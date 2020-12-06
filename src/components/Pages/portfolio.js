import React, { Component } from 'react';
import axios from 'axios';
import '../../assets/css/portfolio.css';
import '../../assets/css/portfolio_responsive.css';
import PortfolioContent from './Portfolio/PortfolioContent';
import Pagnitation from './pageNumber/pageNumber';

import portfolio_img from '../../assets/siteimage/portfolio.jpg';

class Portfolio extends Component {

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
	
	ScrollPage() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		 });
	}

	render() {
		
      let blogs = null;
      // console.log(this.state.posts, Object.keys(this.state.posts).length);
      if(this.state.posts[this.state.currentPage-1] !== undefined || Object.keys(this.state.posts).length > 0){
         const posts_array=[];
         posts_array.push(this.state.posts[this.state.currentPage-1]);
         // console.log(posts_array);
         blogs = posts_array[0].map((value, key) => {
            // return value.title;
            return (
               <PortfolioContent key={key} />
            );
         });
         // console.log(blogs);
      }else{
         blogs = "Loading...";
      }

		const pages = this.state.posts.map((value, key) => {
         return (
				<Pagnitation 
					key={key} 
					page_no={key} 
					active_page={this.state.currentPage} 
					url="/portfolio/"
					click={this.ScrollPage()} />
         );
      });
		return (
			<div id="portfolio" className="content">
				<div className="portfolio-content">
					<div className="container">
						<div className="portfolio_title">
							<h2>Portfolio</h2>
							<span>Portfolio</span>
						</div>

						<div className="row portfolio_gap_hide">
							{/* {blogs} */}
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
                           <h5>Weather Forcust</h5>
                           <h6>You can enter area pincode for know the weather update.</h6>
                        </div>
                     </div>
						</div>

						<div className="row">
							{/* <!-- Pagination --> */}
							<div className="portfolio_page page_gap">
								<ul>
									{/* {pages} */}
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
	};
}

export default Portfolio;