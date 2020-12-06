import React, { Component } from 'react';
import '../../assets/css/about.css';
import '../../assets/css/about_responsive.css';
import myImage from'../../assets/siteimage/subhajit_dey.jpg';


class About extends Component {
   render() {
      return (
         <div className="content">
            <div className="about-content">
               <div className="container">
                  <div className="about_title">
                     <h2>About Me</h2>
                     <span>About Me</span>
                  </div>
                  <div className="row">
                     <div className="col-12 col-lg-6">
                        <div className="about_image_div">
                           <img src={myImage} alt="myimage" />
                        </div>
                     </div>
                     <div className="col-12 col-lg-6">
                        <div className="about_content_div">
                           <h3>I am <span className="name">Subhajit Dey</span></h3>
                           <p>I am fullstack web developer. I can provide clean code and pixel perfect design & develop. I also make website more & more interactive with web animations.</p>
                           <ul>
                              <li>
                                 <strong>Full Name</strong>
                                 Subhajit Dey
                              </li>
                              <li>
                                 <strong>Age</strong>
                                 22 Years
                              </li>
                              <li>
                                 <strong>Nationality</strong>
                                 Indian
                              </li>
                              <li>
                                 <strong>Languages</strong>
                                 English, Bengali
                              </li>
                              <li>
                                 <strong>Address</strong>
                                 92 Purbasha Park, Bansdroni, Kolkata, India
                              </li>
                              <li>
                                 <strong>Freelance</strong>
                                 Available
                              </li>
                           </ul>
                           {/* <a href="" className="cv_bttn">Download CV</a> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="about-content service-content">
               <div className="container">
                  <div className="about_title">
                     <h2>Services</h2>
                     <span>Services</span>
                  </div>
                  <div className="row">
                     <div className="col-lg-4 service-gap">
                        <div className="my_service">
                           <span className="my_service_icon"><i className="fa fa-css3" aria-hidden="true"></i></span>
                           <h5>Web Design</h5>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                        </div>
                     </div>
                     <div className="col-lg-4 service-gap">
                        <div className="my_service">
                           <span className="my_service_icon"><i className="fa fa-code" aria-hidden="true"></i></span>
                           <h5>Web Development</h5>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                        </div>
                     </div>
                     <div className="col-lg-4 service-gap">
                        <div className="my_service">
                           <span className="my_service_icon"><i className="fa fa-desktop" aria-hidden="true"></i></span>
                           <h5>Desktop Application</h5>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   };
}

export default About;
