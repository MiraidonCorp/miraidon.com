import * as React from "react"
import {Link} from "gatsby";
import RichText from "../richtext/richtext";


const Card = (props) => {
    return (<div
            className="col-lg-4 col-md-6 col-sm-6"
            key={props.id}>
            <div className={`${props.customCssClass}`}>
                <div className="icon">
                    <i className={props.iconClass}></i>
                </div>
                <RichText raw={props.title.raw} />
                <RichText raw={props.description.raw} />
                {props.ctAs?.map((cta) => {
                    return <Link to={cta.url} className={cta.customCssClass ? cta.customCssClass :`default-btn`} key={cta.id}>
                        {cta.label}
                        <i className="flaticon-right-up"></i>
                    </Link>;
                })}
            </div>
        </div>
    );
}
export default Card;