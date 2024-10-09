import * as React from "react"
import { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import logo from "../../images/logo.png";
import SearchForm from "./SearchForm";
import DrawerNav from "./DrawerNav";

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

const Navbar = (props) => {
    const [searchModal, setSearchModal] = useState(false);
    const [drawerModal, setDrawerModal] = useState(false);

    const { NavStyleClass = "" ,navGroup = {}} = props;

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("sticky");
            } else {
                elementId.classList.remove("sticky");
            }
        });
    });

    const isActive = ({ isCurrent }) => {
        const activeClass = isCurrent ? "active" : "";
        return { className: `nav-link ${activeClass}` };
    };

    return (
        <>
            <div className={`navbar-area ${NavStyleClass}`} id="navbar">
                <div
                    className={`${
                        NavStyleClass === "style-four dotted-bg"
                            ? "container"
                            : "container-fluid"
                    }`}
                >
                    <nav className="navbar navbar-expand-lg">
                        <AniLink fade to="/" className="navbar-brand">
                            <img src={logo} alt="logo" />
                        </AniLink>

                        <button
                            className="navbar-toggler"
                            role="button"
                            onClick={() => setDrawerModal(!drawerModal)}
                        >
							<span className="burger-menu">
								<span className="top-bar"></span>
								<span className="middle-bar"></span>
								<span className="bottom-bar"></span>
							</span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                {navGroup &&
                                    navGroup.map((menu) => (
                                        <li className="nav-item" key={menu.id}>
                                            <Link
                                                to={menu.link}
                                                className="dropdown-toggle nav-link"
                                            >
                                                {menu.displayText}
                                            </Link>
                                            { menu.level2Links ?
                                            <ul className="dropdown-menu">
                                                { menu.level2Links.map((page) => (
                                                    <li
                                                        className="nav-item"
                                                        key={page.id}
                                                    >
                                                        <AniLink
                                                            fade
                                                            to={page.url}
                                                            activeClassName="active"
                                                            getProps={isActive}
                                                        >
                                                            {page.label}
                                                        </AniLink>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                        </li>
                                    ))}

                            </ul>
                            <div className="others-option d-flex align-items-center">
                                <div className="option-item">
                                    <button
                                        type="button"
                                        className="search-btn"
                                        onClick={(e) =>
                                            setSearchModal(!searchModal)
                                        }
                                    >
                                        <i className="flaticon-search"></i>
                                    </button>
                                </div>
                                <div className="option-item">
                                    <Link
                                        to="/contact-us"
                                        className="default-btn"
                                    >
                                        Let’s Talk{" "}
                                        <i className="flaticon-comment"></i>
                                    </Link>
                                </div>
                                <div className="option-item">
                                    <button
                                        className="sidebar-toggler"
                                        onClick={() =>
                                            setDrawerModal(!drawerModal)
                                        }
                                    >
                                        <i className="flaticon-menu-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {searchModal && (
                <SearchForm
                    onSearchModal={() => setSearchModal(!searchModal)}
                />
            )}
            {drawerModal && (
                <DrawerNav onDrawerModal={() => setDrawerModal(!drawerModal)} />
            )}
        </>
    );
};

export default Navbar;
