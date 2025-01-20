import React from "react";
import shape1 from "../../images/shape/shape1.png";
import shape2 from "../../images/shape/shape2.png";
import { Link } from "gatsby";

const PageBanner = ({ pageName }) => {
    return (
        <div className="page-banner-area dotted-bg bg-fbecd7">
            <div className="container">
                <div className="page-banner-content">
                    <h1>{pageName}</h1>
                    <ul className="meta">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>{pageName}</li>
                    </ul>
                </div>
            </div>
            <div className="shape1">
                <img src={shape1} alt="shape1" />
            </div>
            <div className="shape2">
                <img src={shape2} alt="shape2" />
            </div>
        </div>
    );
};

export default PageBanner;
