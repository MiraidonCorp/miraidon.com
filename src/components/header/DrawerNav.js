import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import logo from "../../images/logo.png";
import NavList from "./NavList";

/*const query = graphql`
	query {
		menubarJson {
			menus {
				id
				name
				pages {
					id
					name
					url
				}
			}
		}
	}
`;*/

const DrawerNav = ({ onDrawerModal }) => {
/*	const {
		menubarJson: { menus },
	} = useStaticQuery(query);*/
	return (
		<>
			<div className="responsive-navbar offcanvas offcanvas-end show">
				<div className="offcanvas-header">
					<Link to="/" className="logo d-inline-block">
						<img src={logo} alt="logo" />
					</Link>
					<button
						type="button"
						className="close-btn"
						onClick={onDrawerModal}
					>
						<i className="flaticon-close"></i>
					</button>
				</div>
				<div className="offcanvas-body">
					{/*<div className="accordion">
						{menus &&
							menus.map((menu) => (
								<NavList key={menu.id} menu={menu} />
							))}
					</div>*/} menu here
					<div className="offcanvas-contact-info">
						<h4>Contact Info</h4>
						<ul className="info">
							<li>
								<i className="bx bx-envelope"></i>
								<a href="mailto:hello@doji.com">
									hello@doji.com
								</a>
							</li>
							<li>
								<i className="bx bx-phone-call"></i>
								<a href="tel:+2414524526">+241 452 4526</a>
							</li>
							<li>
								<i className="bx bx-map"></i>
								2750 Quadra Street Victoria Road, New York, USA
							</li>
						</ul>
						<ul className="social-links list-unstyled mb-0">
							<li>
								<a href="/" target="_blank">
									<i className="flaticon-facebook"></i>
								</a>
							</li>
							<li>
								<a href="/" target="_blank">
									<i className="flaticon-twitter-1"></i>
								</a>
							</li>
							<li>
								<a href="/" target="_blank">
									<i className="flaticon-instagram-1"></i>
								</a>
							</li>
							<li>
								<a href="/" target="_blank">
									<i className="flaticon-linkedin-1"></i>
								</a>
							</li>
						</ul>
					</div>
					<div className="others-option d-flex d-lg-none align-items-center">
						<div className="option-item">
							<button type="button" className="search-btn">
								<i className="flaticon-search"></i>
							</button>
						</div>
						<div className="option-item">
							<Link to="/contact-us" className="default-btn">
								Let’s Talk <i className="flaticon-comment"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="offcanvas-backdrop fade show"></div>
		</>
	);
};

export default DrawerNav;
