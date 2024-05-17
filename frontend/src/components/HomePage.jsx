import React from "react";
import image from "../images/1.jpg";

const HomePage = () => {
  return (
    <div id="homepage">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-center">
              Welcome to
              <h1 className="text-danger text-center">Taste Haven</h1>
              Where Every Meal is a Celebration!
            </h2>
            <br />
            <br />
            <p className="lead text-start">
              We believe that dining should be an unforgettable journey. Our
              menu is a celebration of culinary creativity, blending traditional
              recipes with innovative twists. Each dish is crafted with the
              finest ingredients, ensuring a burst of flavor in every bite.
              Whether you're in the mood for a cozy dinner, a vibrant brunch, or
              an indulgent dessert, our diverse offerings cater to all tastes.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-5"
              alt="Gym"
              height="200px"
              width="400px"
              style={{ marginLeft: '130px' }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default HomePage;
