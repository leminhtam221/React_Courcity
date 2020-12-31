import React from 'react';

function OverView(props) {
  return (
    <div
      className="tab-pane fade show active"
      id="overview"
      role="tabpanel"
      aria-labelledby="overview-tab"
    >
      <div className="learning-system">
        <h4>What Will I Learn?</h4>
        <p>
          Learn cutting-edge deep reinforcement learning algorithms—from Deep Q-Networks
          (DQN) to Deep Deterministic Policy Gradients (DDPG). Apply these concepts to
          train agents to walk, drive, or perform other complex tasks.
        </p>
        <ul>
          <li>
            <div className="single-way">
              <h4>Visual learning tips</h4>
              <p>
                Graphic designers create visual concepts that inspire, and transform.
                Learn how to use industry-leading software to build innovative.
              </p>
            </div>
          </li>
          <li>
            <div className="single-way">
              <h4>How improve visual design</h4>
              <p>
                Remember skills can be developed with practice. Design crash course
                through interactive tutorials. Follow design and read design books. Start
                using tools like Canva and pair it with SocialPilot.{' '}
              </p>
            </div>
          </li>
          <li>
            <div className="single-way">
              <h4>Value of visual design</h4>
              <p>
                Graphic design is process of visual communication problem solving using
                one or more of typography, photography and illustration. The field is
                considered a subset of visual.
              </p>
            </div>
          </li>
          <li>
            <div className="single-way">
              <h4>Difference Between Visual Design and Graphic Design</h4>
              <p>
                User interface (UI) designers are responsible for the “look and feel” of a
                website, app, or other product. In other words, they're the ones who add
                colors, pair typefaces, and set layouts.{' '}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="requirements">
        <h4>Requirements</h4>
        <ul>
          <li>
            <i className="fas fa-check" /> Understand what visual learning is for and how
            it is used.
          </li>
          <li>
            <i className="fas fa-check" /> Need knowledge of photoshop and basic knowledge
            of indesign.
          </li>
          <li>
            <i className="fas fa-check" /> Preferable to have experience with PS, Sketch,
            Indesign and Adobe XD.
          </li>
          <li>
            <i className="fas fa-check" /> Preferable to understand word embeddings.
          </li>
        </ul>
      </div>
      <div className="description">
        <h4>Description</h4>
        <p>
          Your ability to use type is one of the things that differentiates graphic design
          from other visual professions. A big part of graphic design is understanding
          typography, developing your knowledge of typefaces, and how to apply them in
          your design. This will be a constant study throughout your career.
        </p>
      </div>
      <div className="price">
        <h5>
          <del>$169</del>
          <span>$139</span>
        </h5>
        <a href="#" className="btn-small">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default OverView;
