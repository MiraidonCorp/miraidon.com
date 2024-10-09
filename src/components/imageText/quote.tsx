import * as React from "react"
import RichText from "../richtext/richtext";

const Quote = (props) => {


    return (
    <div className="quotes-area dotted-bg bg-color bg-fbecd7">
        <div className="container">
            <div className={`${props.customCssClass}`}>
                        <div className="row align-items-center" key={props.id}>
                            <div className="col-lg-4 col-md-12">
                                <div
                                    className="quotes-image"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay="100"
                                >
                                    <img
                                        src={props.image.url}
                                        alt="quotes"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div
                                    className="quotes-content"
                                    data-aos="fade-in"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    <i className="flaticon-quotes"></i>
                                    <RichText raw={props.text.raw} />
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
    );
}

export default Quote;