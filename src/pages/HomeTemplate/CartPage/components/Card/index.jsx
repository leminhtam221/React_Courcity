import React from 'react';
import './style.css';

function Card(props) {
  const { card, handleDeleteCard } = props;
  const { course_image, course_name, description, price } = card;
  return (
    <tr>
      <td data-th="Product">
        <div className="row">
          <div className="col-sm-2 hidden-xs">
            <img src={course_image} alt="..." className="img-responsive" />
          </div>
          <div className="col-sm-10">
            <h5 className="nomargin">{course_name}</h5>
            <p>{description}</p>
          </div>
        </div>
      </td>
      <td data-th="Price">${price}</td>
      <td data-th="Quantity">
        <input type="number" className="form-control text-center" defaultValue={1} />
      </td>
      <td data-th="Subtotal" className="text-center">
        ${price}
      </td>
      <td className="actions" data-th>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            handleDeleteCard(card);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Card;
