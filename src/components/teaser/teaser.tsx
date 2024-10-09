import * as React from "react"
import {Link} from "gatsby";
import RichText from "../richtext/richtext";
import Image from "../image/image";


const Teaser = (props) => {
    const bannerContent = (<div className="col-lg-6 col-md-12">
        <div className="banner-content">
            <span className="sub-title">{props.subTitle}</span>
            <RichText raw={props.title.raw} />
            <RichText raw={props.description.raw} />
            {props.ctAs?.map((cta) => {
                return <Link to={cta.url} className="default-btn" key={cta.id}>
                    {cta.label}
                    <i className="flaticon-right-up"></i>
                </Link>;
            })}
        </div>
    </div>);
    const bannerImage = ( <div className="col-lg-6 col-md-12">
        <div
            className="banner-image text-center"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
        >
            <Image {...props.image} />
        </div>
    </div>);
    return(<div className="banner-area dotted-bg bg-f7ffe2">
        <div className="container-fluid">
            <div className="row align-items-center">
                {props.layout === 'image-right' ? <><>{bannerContent}</>
                <>{bannerImage}</>
                </> : (<><>{bannerImage}</>
                        <>{bannerContent}</>
                    </>
                )
                }

            </div>
        </div>
    </div>);
}

export default Teaser;