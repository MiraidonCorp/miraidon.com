import * as React from "react";

const ContactForm = () => {
	return (
		<>
			<div className="contact-area ptb-100 dotted-bg">
				<div className="container">
					<div className="contact-inner-box">
						<div className="row m-0">
							<div className="col-lg-4 col-md-12 p-0 ">
								<div className="contact-info">
									<div className="d-table">
										<div className="d-table-cell">
											<ul className="info">
												<li>
													<h4>Office Address</h4>
													<span>
														<i className="flaticon-maps-and-flags"></i>
														2750 Quadra Street
														Victoria Road, New York,
														USA
													</span>
												</li>
												<li>
													<h4>Phone Number</h4>
													<span>
														<i className="flaticon-phone-call"></i>
														<a href="tel:(+123) 456-7898">
															(+123) 456-7898
														</a>
													</span>
												</li>
												<li>
													<h4>Email Us</h4>
													<span>
														<i className="flaticon-envelope"></i>
														<a href="mailto:hello@doji.com">
															hello@doji.com
														</a>
													</span>
												</li>
												<li>
													<h4>Follow Us</h4>
													<ul className="social-links list-unstyled mb-0">
														<li>
															<a
																href="/"
																target="_blank"
															>
																<i className="flaticon-facebook-app-symbol"></i>
															</a>
														</li>
														<li>
															<a
																href="/"
																target="_blank"
															>
																<i className="flaticon-twitter"></i>
															</a>
														</li>
														<li>
															<a
																href="/"
																target="_blank"
															>
																<i className="flaticon-instagram"></i>
															</a>
														</li>
														<li>
															<a
																href="/"
																target="_blank"
															>
																<i className="flaticon-linkedin"></i>
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-8 col-md-12 p-0">
								<div className="contact-form">
									<h4>Get In Touch</h4>
									<form>
										<div className="form-group">
											<label>
												Your Name
												<input
													type="text"
													className="form-control"
													placeholder="Enter your Name"
												/>
											</label>
										</div>
										<div className="form-group">
											<label>
												Your Email
												<input
													type="email"
													className="form-control"
													placeholder="Enter your emal"
												/>
											</label>
										</div>
										<div className="form-group">
											<label>
												Your Phone
												<input
													type="text"
													className="form-control"
													placeholder="Enter your phone"
												/>
											</label>
										</div>
										<div className="form-group">
											<label>
												Your Message
												<textarea
													cols="30"
													rows="5"
													className="form-control"
													placeholder="Write your message"
												></textarea>
											</label>
										</div>
										<button
											type="submit"
											className="default-btn"
										>
											Send Message
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
