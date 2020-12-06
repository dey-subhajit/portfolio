import React from 'react';
import '../../assets/css/contact.css';
import '../../assets/css/contact_responsive.css';

const Contact = () => (
   <div className="content">
		<div className="contact-content">
			<div className="container">
				<div className="contact_title">
					<h2>Contact</h2>
					<span>Contact</span>
				</div>

				<div className="row contact_gap_hide">
					<div className="col-lg-6 contact_gap">
						<div className="contact_form_wrapper">
							<h4>Get in touch</h4>
							<form className="contact_form">
								<div className="contact_form_field">
									<label className="contact_form_field_name">Enter your name*</label>
									<input type="text" name="" />
								</div>
								<div className="contact_form_field">
									<label className="contact_form_field_name">Enter your email*</label>
									<input type="text" name="" />
								</div>
								<div className="contact_form_field">
									<label className="contact_form_field_name">Enter your subject*</label>
									<input type="text" name="" />
								</div>
								<div className="contact_form_field">
									<label className="contact_form_field_name">Enter your messasage*</label>
									{/* <!-- <input type="text" name="" /> --> */}
									<textarea name="message" className="scroller" cols="30" rows="6"></textarea>
								</div>
								<div className="contact_form_bttn">
									<button>Send Mail</button>
								</div>
							</form>
						</div>
					</div>

					<div className="col-lg-6 contact_gap">
						<div className="contact_info">
							<div className="contact_info_block">
								<span className="contact_info_block_icon">
									<i className="fa fa-phone" aria-hidden="true"></i>
								</span>
								<div className="contact_info_block_content">
									<h6>Phone</h6>
									<p>+91 8961613356</p>
									<p>+91 9123046263</p>
								</div>
							</div>
							<div className="contact_info_block">
								<span className="contact_info_block_icon">
									<i className="fa fa-envelope" aria-hidden="true"></i>
								</span>
								<div className="contact_info_block_content">
									<h6>Email</h6>
									<p>dey.subhajit.1998@gmail.com</p>
								</div>
							</div>
							<div className="contact_info_block">
								<span className="contact_info_block_icon">
									<i className="fa fa-map-marker" aria-hidden="true"></i>
								</span>
								<div className="contact_info_block_content">
									<h6>Address</h6>
									<p>92 Purbasha Park, Bansdroni, Kolkata 700070</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Contact;