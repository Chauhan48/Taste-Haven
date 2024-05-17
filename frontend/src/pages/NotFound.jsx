import React from "react";
import img from "../images/NotFound.jpg";

const NotFound = () => {
  return (
    <div>
      <img
        src={img}
        className="img-fluid rounded-5"
        style={{ height: "80vh", width: "60vw", marginLeft: "200px", marginTop: "80px" }}
      />
    </div>
  );
};

export default NotFound;
