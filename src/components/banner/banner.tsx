import * as React from "react"
import {Link} from "gatsby";
import Image from "../image/image";

const Banner = (props) => {
    return(
        <div className={`${props.customCssClass}`}>
            <div className="container">
                <div className="lets-talk-inner-box bg-black">
                    <h2>{props.bannerTitle}</h2>
                    <Link className={props.cta.customCssClass ? props.cta.customCssClass :`default-btn`} to={props.cta.url} >
                        {props.cta.label}
                    </Link>
                    {
                        props.floatingImages.map((entry) => {
                            return (
                                <div className={entry.customCssClass} key={entry.image.id}>
                                    <Image {...entry.image}></Image>
                                </div>);
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Banner;