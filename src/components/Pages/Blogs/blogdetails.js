import React from 'react';
import '../../../assets/css/blog_details.css';
import '../../../assets/css/blog_details_responsive.css';

import BlogImage from '../../../assets/siteimage/blog-image-1.jpg'

const BlogDetails = () => (
   <div className="content">
		<div className="blog_details_content">
			<div className="container">
				<p>
					<img src={ BlogImage } alt="Blogname" />
				</p>
				<h3>Markdown & HTML supported blog.</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora deleniti repellendus doloribus necessitatibus ullam accusantium iste natus assumenda nisi ut eius commodi quis tenetur fugit magni at, tempore cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consequatur earum debitis mollitia repellat porro dolorum magni neque, consectetur et nam fugiat ipsa, quibusdam accusamus aperiam asperiores quia inventore numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis reprehenderit cum quos quia necessitatibus ipsa mollitia error nemo dicta, possimus nobis tempora quod voluptate nostrum ducimus nulla aperiam, explicabo pariatur.</p>
				<blockquote>
					<p>Inventore tempora deleniti repellendus doloribus necessitatibus ullam accusantium iste natus assumenda nisi ut eius commodi quis tenetur fugit consequatur earum debitis mollitia repellat.</p>
				</blockquote>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora deleniti repellendus doloribus necessitatibus ullam accusantium iste natus assumenda nisi ut eius commodi quis tenetur fugit magni at, tempore cumque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum consequatur earum debitis mollitia repellat.</p>
				<p>Inventore tempora deleniti repellendus doloribus necessitatibus ullam accusantium iste natus assumenda nisi ut eius commodi quis tenetur fugit consequatur earum debitis mollitia repellat.</p>
			</div>
		</div>
	</div>
);

export default BlogDetails;