import React from 'react';
import { NavLink } from 'react-router-dom';

const Pagnitation = (props) => {
   let mod_page_no = props.page_no+1;
   // let active_class = (parseInt(props.active_page) == parseInt(mod_page_no)) ? "active" : null;
   return (
      <li key={props.page_no} className={(parseInt(props.active_page, 10) === parseInt(mod_page_no, 10)) ? "active" : null}>
         {/* <a href={`/blog/page/${mod_page_no}`}>{mod_page_no}</a> */}
         <NavLink to={props.url+mod_page_no} onClick={props.click}>{ mod_page_no }</NavLink>
      </li>
   )
}

export default Pagnitation;