import React from 'react';
import '../../assets/css/all_page.css';
import '../../assets/css/all_page_responsive.css';
// import Protfolio_img from '../../assets/siteimage/subhajit_dey.jpg';
import Protfolio_img from '../../assets/siteimage/cv_image.jpg';
// import { Link } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

const Menu = () => {
	return (
		<nav className="responsive_nav">
			<button className="responsive_toggel d-block d-lg-none">
				<i className="fa fa-times cross" aria-hidden="true"></i>
				<i className="fa fa-bars bar_menu" aria-hidden="true"></i>
			</button>
			<div className="nav_inner">
				<div className="nav_my_image">
					<Link to="/">
						<img src={Protfolio_img} alt="Subhajit Dey" className="nav_image" />
					</Link>
				</div>
				<div className="nav_menu">
					<ul>
						<li>
							{/* <a className="active" href="">Home</a> */}
							{/* <Link to="/">Home</Link> */}
							{/* <Link 
								pathname: "/",
								hash: "#submit",
								search: "?abcd"
								>Home</Link> */}
							{/* <NavLink to="/" exact activeClassName="abcd" activeStyle={{
									color: 'red'
								}}>Home</NavLink> */}
								<NavLink to="/" exact className="menu_click">Home</NavLink>
						</li>
						<li>
							{/* <a href="">About</a> */}
							<NavLink to="/about" exact className="menu_click">About</NavLink>
						</li>
						<li>
							{/* <a href="">Resume</a> */}
							<NavLink to="/resume" exact className="menu_click">Resume</NavLink>
						</li>
						<li>
							{/* <a href="">Portfolio</a> */}
							<NavLink to="/portfolio" className="menu_click">Portfolio</NavLink>
						</li>
						<li>
							{/* <a href="">Blogs</a> */}
							<NavLink to="/blog" className="menu_click">Blog</NavLink>
						</li>
						<li>
							{/* <a href="">Contact</a> */}
							<NavLink to="/contact" exact className="menu_click">Contact</NavLink>
						</li>
					</ul>
				</div>
				<div className="nav_copyright">
					<p>&copy; 2020 Subhajit Theme</p>
				</div>
			</div>
		</nav>
	);
};

export default Menu;