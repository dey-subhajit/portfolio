import React from 'react';
// import Aux from '../../hoc/Aux';
import Menu from '../Menu/Menu';
import { Route } from 'react-router-dom';

import HomePage from '../Pages/home';
import AboutPage from '../Pages/about';
import ResumePage from '../Pages/resume';
import PortfolioPage from '../Pages/portfolio';
import BlogPage from '../Pages/blog';
import BlogPagedetails from '../Pages/Blogs/blogdetails';
import ContactPage from '../Pages/contact';

// import Background from './Background';



const Layout = (props) => (
   // <Aux>
   <React.Fragment>
      <Menu />
      {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/resume" exact component={ResumePage} />
      <Route path="/portfolio" exact component={PortfolioPage} />
      <Route path="/portfolio/:page_no" exact component={PortfolioPage} />
      <Route path="/blog" exact component={BlogPage} />
      <Route path="/blog/page/:page_no" exact component={BlogPage} />
      <Route path="/blog/:blog_name" exact component={BlogPagedetails} />
      <Route path="/contact" exact component={ContactPage} />
   </React.Fragment>
   // </Aux>
)

export default Layout;