import React from 'react'
import img_1 from "../images/eiliv-aceron.jpg";
import img_2 from "../images/johnathan-macedo.jpg";
import img_3 from "../images/louis-hansel.jpg";
import img_4 from "../images/rc-cf.jpg";

const Team = () => {
  return (
    <div id='team'>
      <h2 className='text-center'>Our Team</h2>
      <br />
      <br />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-3 col-md-6'>
            <div className='text-center'>
              <h4>Eiliv Aceron</h4>
              <img
                src={img_1}
                className="img-fluid rounded-5"
                alt="Eiliv Aceron"
                height="200px"
                width="200px"
              />
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='text-center'>
              <h4>Johnathan Macedo</h4>
              <img
                src={img_2}
                className="img-fluid rounded-5"
                alt="Johnathan Macedo"
                height="200px"
                width="200px"
              />
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='text-center'>
              <h4>Louis Hansel</h4>
              <img
                src={img_3}
                className="img-fluid rounded-5"
                alt="Louis Hansel"
                height="200px"
                width="200px"
              />
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='text-center'>
              <h4>Chef Rc</h4>
              <img
                src={img_4}
                className="img-fluid rounded-5"
                alt="Rc Cf"
                height="200px"
                width="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
