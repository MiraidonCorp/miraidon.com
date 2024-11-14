import * as React from "react"
import RichText from "../richtext/richtext";

const ImageFeatureList = (props) => {
    console.log(props)
    const {
        customCssClass,
        subTitle,
        featureListTitle,
        layout
    } = props;
    const imageMarkup = (
        <div className="col-lg-6 col-md-12">
            <div className={props.image.customCssClass}>
                <img src={props.image.image.url} alt="expertise"/>
            </div>
        </div>);

    const contentMarkup = (<div
        className="col-lg-6 col-md-12"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="200"
    >
        <div className="expertise-content">
							<span className="sub-title main-color">
								{subTitle}
							</span>
            <h2>{featureListTitle}</h2>
            <RichText raw={props.description.raw}></RichText>
            <ul className="features-list">
                {props.featuresList.map((entry) => {
                    return (<li key={entry.id}>
                        <div className="icon main-color">
                            <i className={entry.iconClass}></i>
                        </div>
                        <RichText raw={entry.title.raw}/>
                        <RichText raw={entry.description.raw}/>
                    </li>);
                })}
            </ul>
        </div>
    </div>);
    return (
        <div className={customCssClass}>
            <div className="container">
                <div className="row align-items-center">
                    { (layout === 'image-left') ?
                        <>{imageMarkup}{contentMarkup} </>: <>{contentMarkup}{imageMarkup}</>
                    }
                </div>
            </div>
        </div>
    );
}

export default ImageFeatureList;