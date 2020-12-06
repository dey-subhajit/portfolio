import React from 'react';

import portfolio_img from '../../../assets/siteimage/portfolio.jpg';

const PortfolioContent = () => {
   return (
      <div className="col-lg-4 portfolio_gap">
         <div className="my_portfolio">
            <div className="my_portfolio_image">
               <img src={ portfolio_img } alt="Tutorial" />
               <ul>
                  <li>
                     <a href=""><i className="fa fa-link" aria-hidden="true"></i></a>
                  </li>
               </ul>
            </div>
            <h5>Web site</h5>
            <h6>Details</h6>
         </div>
      </div>
   );
}

export default PortfolioContent;