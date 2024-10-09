import * as React from "react"
import {Link} from "gatsby";
import usaFlag from "../../images/usa.png";

export default function TopHeader(props) {
    console.log("props", props);
    const {
        email,
        phone,
        rightButtons
    } = props.topHeader;
    let usaFlag = "";
    return (
        <div className="top-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <ul className="top-header-info">
                            <li>
                                <i className="flaticon-envelope"></i>
                                <a href={"mailto:"+email}>
                                    {email}
                                </a>
                            </li>
                            <li>
                                <i className="flaticon-phone-call"></i>
                                <a href={"tel:+"+phone}>+{phone}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ul className="top-header-right-side">
                            <li>
                                <img src="" alt="usa"/>
                                <select className="form-select">
                                    <option defaultValue="en">English</option>
                                    <option value="1">Spanish</option>
                                    <option value="2">French</option>
                                    <option value="3">Arabic</option>
                                </select>
                            </li>
                            <li>
                                <Link to="/auth">
                                    <i className="flaticon-user-2"></i>Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}