import React from 'react';
import '../../assets/css/resume.css';
import '../../assets/css/resume_responsive.css';
import { Helmet } from 'react-helmet';

const Resume = () => (
   <div className="content">
		<Helmet>
			<title>My Experience | {process.env.REACT_APP_TITLE}</title>
		</Helmet>
		<div className="skill-content">
			<div className="container">
				<div className="skill_title">
					<h2>My Skills</h2>
					<span>My Skills</span>
				</div>
				<div className="my_skill">
					<div className="row">
						<div className="col-lg-6 skill_gap">
							<div className="my_progress">
								<h6 className="my_progress_title">HTML5</h6>
								<div className="progress">
									<div className="progress-bar progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span className="progress_value">55%</span></div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 skill_gap">
							<div className="my_progress">
								<h6 className="my_progress_title">CSS3</h6>
								<div className="progress">
									<div className="progress-bar" role="progressbar" style={{ width:"67%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span className="progress_value">67%</span></div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 skill_gap">
							<div className="my_progress">
								<h6 className="my_progress_title">JavaScript</h6>
								<div className="progress">
									<div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span className="progress_value">70%</span></div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 skill_gap">
							<div className="my_progress">
								<h6 className="my_progress_title">JQuery</h6>
								<div className="progress">
									<div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span className="progress_value">70%</span></div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 skill_gap">
							<div className="my_progress">
								<h6 className="my_progress_title">ReactJS</h6>
								<div className="progress">
									<div className="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span className="progress_value">40%</span></div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 skill_gap">
							<div className="my_progress">
								<h6 className="my_progress_title">PHP</h6>
								<div className="progress">
									<div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span className="progress_value">70%</span></div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 skill_gap">
							<div className="my_progress">
								<h6 className="my_progress_title">Python</h6>
								<div className="progress">
									<div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span className="progress_value">80%</span></div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 skill_gap">
							<div className="my_progress">
								<h6 className="my_progress_title">Bootstrap</h6>
								<div className="progress">
									<div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span className="progress_value">80%</span></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* <!-- Resume --> */}
		<div className="skill-content resume_content">
			<div className="container">
				<div className="skill_title">
					<h2>Resume</h2>
					<span>Resume</span>
				</div>
				<div className="my_small_title">
					<span className="my_small_title_icon">
						<i className="fa fa-briefcase" aria-hidden="true"></i>
					</span>
					<h4>Working Experience</h4>
				</div>

				<div className="my_resume_wrapper">
					<div className="my_resume wrapper_gap">
						<div className="my_resume_summary">
							<h6 className="my_resume_year">2019 - 2020</h6>
						</div>
						<div className="my_resume_details">
							<h5>Python Developer</h5>
							<h6 className="my_resume_company">Bargad Software Solutions PVT. LTD.</h6>
							<p>Work with Rest API using Python with PHP, using tools Frappe/ErpNext. Creating new Python tools for upload data from biomatric machine to Mysql database.</p>
						</div>
					</div>

					<div className="my_resume wrapper_gap">
						<div className="my_resume_summary">
							<h6 className="my_resume_year">2018 - 2019</h6>
						</div>
						<div className="my_resume_details">
							<h5>Web Developer</h5>
							<h6 className="my_resume_company">Arham Creation</h6>
							<p>Design and develop new websites using PHP, MySQL, JavaScript, JQuery etc. Host webapp, link with domain name. Backup entire webapplications with database, restore the entire application.</p>
						</div>
					</div>
				</div>

				<div className="wrapper_gap"></div>

				<div className="my_small_title">
					<span className="my_small_title_icon">
						<i className="fa fa-book" aria-hidden="true"></i>
					</span>
					<h4>Educational Qualifications</h4>
				</div>

				<div className="my_resume_wrapper">
					<div className="my_resume wrapper_gap">
						<div className="my_resume_summary">
							<h6 className="my_resume_year">2018 - 2021</h6>
						</div>
						<div className="my_resume_details">
							<h5>Master's of Computer Application</h5>
							<h6 className="my_resume_company">Future Institute of Engineering & Management</h6>
							{/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p> */}
						</div>
					</div>

					<div className="my_resume wrapper_gap">
						<div className="my_resume_summary">
							<h6 className="my_resume_year">2015 - 2018</h6>
						</div>
						<div className="my_resume_details">
							<h5>Bachelor of Computer Application</h5>
							<h6 className="my_resume_company">Future Institute of Engineering & Management</h6>
							{/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p> */}
						</div>
					</div>
				</div>

			</div>
		</div>
		{/* <!-- /Resume --> */}
	</div>
);

export default Resume;