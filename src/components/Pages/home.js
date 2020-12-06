import React from 'react';
import '../../assets/css/index.css';
import '../../assets/css/index_responsive.css';
// import Aux from '../../hoc/Aux';

import Background from '../Layout/Background';

const homePage = () => (
   // <Aux>
   <React.Fragment>
      <div id="particle-container">
         <Background />
      </div>
      <div className="content">
         <div className="content-items">
            <div className="container">
               <div className="row content-align">
                  <div className="col-lg-10">
                     <h1 className="heading">Hi, I am <span className="name">Subhajit Dey</span></h1>
                     <p className="sort-desc">I am fullstack software developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                     <ul className="social_links">
                        <li>
                           <a href="">
                              <div className="icons">
                                 <i className="fa fa-facebook" aria-hidden="true"></i>
                              </div>
                           </a>
                        </li>
                        <li>
                           <a href="">
                              <div className="icons">
                                 <i className="fa fa-twitter" aria-hidden="true"></i>
                              </div>
                           </a>
                        </li>
                        <li>
                           <a href="">
                              <div className="icons">
                                 <i className="fa fa-linkedin" aria-hidden="true"></i>
                              </div>
                           </a>
                        </li>
                        <li>
                           <a href="">
                              <div className="icons">
                                 <i className="fa fa-github" aria-hidden="true"></i>
                              </div>
                           </a>
                        </li>
                        <li>
                           <a href="">
                              <div className="icons">
                                 <i className="fa fa-skype" aria-hidden="true"></i>
                              </div>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </React.Fragment>
   // </Aux>
);

export default homePage;