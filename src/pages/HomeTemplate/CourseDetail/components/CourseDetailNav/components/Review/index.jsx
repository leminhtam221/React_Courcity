import React, { useState } from 'react';
import $ from 'jquery';

function Review(props) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [arrComment, setArrComment] = useState([
    {
      name: 'Micheal King',
      content:
        'Do you run a growing online store or have a ton of videos a your website? More importantly, do you know how this affects needs?',
    },
  ]);

  const handleSubmitForm = (e) => {
    const formData = { name, content };
    $.ajax({
      type: 'POST',
      url: 'ajax/index',
      data: { formData },
      success: function (response) {
        arrComment.push(response);
      },
    });
    const newArrComment = [...arrComment];
    newArrComment.push(formData);
    setArrComment(newArrComment);
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'username':
        setName(value);
        break;

      case 'content':
        setContent(value);
        break;
    }
  };

  return (
    <div className="blog-single-left-content">
      <div className="comment-form">
        <h3>Post A Comment</h3>
        <form onSubmit={handleSubmitForm}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  aria-label="Name"
                  name="username"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Write something here"
                  name="content"
                  value={content}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn-small">
                {' '}
                Post Comment{' '}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="comment-section mt-4">
        {arrComment.map((item, index) => (
          <div className="media mt-3" key={index}>
            <a href="#">
              <img
                src="https://banyanthemes.com/template/courcity/images/speaker-2.png"
                alt="Generic placeholder image"
                className="mr-4"
                style={{ width: '100px' }}
              />
            </a>
            <div className="media-body">
              <p>{item.content}</p>
              <h5 className="mt-3">{item.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
