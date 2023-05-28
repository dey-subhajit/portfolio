import React, { Component } from 'react';
import axios from 'axios';
import BlogContent from './Blogs/blogcontent';
import Pagnitation from './pageNumber/pageNumber';
import { Helmet } from 'react-helmet';

class Blog extends Component {

   state = {
      posts: [],
      currentPage: 1,
      contentPerpage: 6
   }

   componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response => {
            // console.log(response);
            this.setPagination(response.data.slice(0,30));
            /*response.data.map((value, key) => {
               console.log(key);
            });*/
         });
   }

   setPagination(data) {
      let content = [];
      for(let i = 0; i < data.length; i+=this.state.contentPerpage){
         let content_data = [];
         for (let j = i; j< i+this.state.contentPerpage; j++){
            if(data.length > j)
               content_data.push(data[j]);
         }
         content.push(content_data);
      }
      this.setState({
         posts: content
      });
   }

   componentDidUpdate() {
      if(this.state.currentPage !== parseInt(this.props.match.params.page_no, 10) && this.props.match.params.page_no !== undefined){
         if(this.props.match.params.page_no === undefined || parseInt(this.props.match.params.page_no,10) === 1){
            this.setState({currentPage: 1});
         }
         else {
            this.setState({currentPage: parseInt(this.props.match.params.page_no, 10)});
         }
      }
   }

   setCurentContent() {
      // console.log(this.state.currentPage, typeof(this.state.currentPage));
      this.setState({currentContent: this.state.posts[this.state.currentPage]});
   }

   pageNumber() {
      /*const page_no = this.state.posts.map((value, key) => {
         return (
            <li key={key} className="active">
               <a href={"/page/"}>{key+1}</a>
            </li>
         );
      });
      return <AUX>{page_no}</AUX>;*/
   }

   ScrollPage() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		 });
	}

   render() {
      
      // console.log(this.state);
      // console.log(this.state.posts[this.state.currentPage-1]);
      /* Blog content */
      let blogs = null;
      if(this.state.posts[this.state.currentPage-1] !== undefined){
         const posts_array=[];
         posts_array.push(this.state.posts[this.state.currentPage-1]);
         // console.log(posts_array);
         blogs = posts_array[0].map((value, key) => {
            // return value.title;
            return (
               <BlogContent key={key} title={value.title} />
            );
         });
         // console.log(blogs);
      }

      const pages = this.state.posts.map((value, key) => {
         return (
            <Pagnitation key={key} page_no={key} active_page={this.state.currentPage} url="/blog/page/" click={this.ScrollPage()} />
         );
      });
      return (
         <div className="content">
            <Helmet>
               <title>My Blogs | {process.env.REACT_APP_TITLE}</title>
            </Helmet>
				<div className="my_blog-content">
					<div className="container">
						<div className="my_blog_title">
							<h2>Recent Blogs</h2>
							<span>Recent Blogs</span>
						</div>
                  <div className="row my_blog_gap_hide">
                     {blogs}
                  </div>
                  <div className="row">
                     {/* <!-- Pagination --> */}
                     <div className="blog_page page_gap">
                        <ul>
                           {pages}
                           {/* {this.pageNumber()} */}
                           {/* <li className="active">
                              <a href="">1</a>
                           </li> */}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Blog;