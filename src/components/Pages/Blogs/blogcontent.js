import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../../../assets/css/blog.css';
import '../../../assets/css/blog_responsive.css';
// import AOX from '../../../hoc/Aux';

import blogimage from '../../../assets/siteimage/blog.jpg';

class BlogContent extends Component{
	render() {
		// console.log(this.props);
		return (
			// <AOX>
			<React.Fragment>
				<div className="col-lg-6 my_blog_gap">
					<div className="my_blog">
						<div className="my_blog_image">
							{/* <a href="">
								<img src={ blogimage } alt="How to install Ubuntu in Dell Laptop" />
							</a> */}
							<NavLink to='/blog/blog1'><img src={ blogimage } alt="How to install Ubuntu in Dell Laptop" /></NavLink>
							<div className="my_blog_date">
								<span className="date">20</span>
								<span className="month">Feb</span>
							</div>
						</div>
						<div className="my_blog_content">
							<h5>
								{/* <a href="">Blog Title</a> */}
								<NavLink to='blog/blog1'>{this.props.title}</NavLink>
							</h5>
						</div>
					</div>
				</div>
			</React.Fragment>
			// </AOX>
		);
	}
}

export default BlogContent;