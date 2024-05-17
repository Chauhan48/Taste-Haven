import React from "react";
import img_1 from "../images/2.jpg";
import img_2 from "../images/3.jpg";
import img_3 from "../images/4.jpg";

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-start">Dine-In Experience</h2>
            <br />
            <br />
            <p className="lead text-start">
              At Taste Haven, we pride ourselves on offering a top-notch dine-in
              experience. Our beautifully designed dining area is perfect for
              any occasion, whether it’s a casual lunch, a romantic dinner, or a
              family celebration. Enjoy our expertly crafted dishes in a cozy
              and inviting atmosphere, with exceptional service from our
              friendly staff.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src={img_1}
              className="img-fluid rounded-5"
              alt="Gym"
              height="200px"
              width="400px"
              style={{ marginLeft: "130px" }}
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3">
            <img
              src={img_2}
              className="img-fluid rounded-5"
              alt="Gym"
              height="200px"
              width="400px"
            />
          </div>
          <div className="col-md-5" style={{ marginLeft: "300px" }}>
            <h2 className="text-start">Catering Services</h2>
            <br />
            <br />
            <p className="lead text-start">
              Planning a special event? Let Taste Haven cater your next
              gathering! We offer a wide range of catering options for all types
              of events, including weddings, corporate functions, and private
              parties. Our catering menu features a variety of our most popular
              dishes, and we can customize the offerings to suit your specific
              needs and preferences. Our team will work with you to ensure your
              event is a delicious success.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-start">Seasonal and Special Menus</h2>
            <br />
            <br />
            <p className="lead text-start">
              At Taste Haven, we love to celebrate the seasons and special
              occasions with exclusive menus. From holiday feasts to seasonal
              specialties, our chefs create unique dishes that highlight the
              best ingredients of each season. Stay tuned to our website and
              social media for announcements about our special menus and events.
            </p>
          </div>
          <div className="col-md-3">
            <img
              src={img_3}
              className="img-fluid rounded-5"
              alt="Gym"
              height="200px"
              width="400px"
              style={{ marginLeft: "130px" }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Services;
