import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
const NavList = ({ menu }) => {
	const [accordionStatus, setAccordionStatus] = useState(false);

	const onClicked = () => {
		setAccordionStatus(!accordionStatus);
	};

	const isActive = ({ isCurrent }) => {
		const activeClass = isCurrent ? "active" : "";
		return { className: `accordion-link ${activeClass}` };
	};

	return (
		<div className="accordion-item">
			<button
				className={`accordion-button ${
					accordionStatus ? "uncollapsed active" : "collapsed"
				} `}
				onClick={onClicked}
				type="button"
			>
				{menu.name}
			</button>
			<div
				className={`accordion-collapse collapse ${
					accordionStatus && "show"
				} `}
			>
				<div className="accordion-body">
					<div className="accordion">
						{menu.pages.map((page) => (
							<div className="accordion-item" key={page.id}>
								<AniLink
									fade
									to={page.url}
									activeClassName="active"
									getProps={isActive}
								>
									{page.name}
								</AniLink>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavList;
