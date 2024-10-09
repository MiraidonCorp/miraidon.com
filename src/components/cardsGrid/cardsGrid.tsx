import * as React from "react"
import {Link} from "gatsby";
import Card from "../teaser/card";
import RichText from "../richtext/richtext";
import CardsRow from "./cardsRow";

const CardsGrid = (props) => {
    const {
        customCssClass,
        gridTitle,
        gridDesc,
        gridSubTitle,
        layout
    } = props;

    if (layout === 'cards-row') {
        return (<CardsRow {...props}></CardsRow>);
    }

    return (
        <div className={`${customCssClass}`}>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">{gridSubTitle}</span>
                    <h2>{gridTitle}</h2>
                    <RichText raw={gridDesc.raw} />
                </div>
                <div className="row justify-content-center">
                    {props.cards?.map((card) => {
                        return <Card {...card} key={card.id}/>;
                    })}
                    <div className="view-all-btn mt-0 text-center">
                        <Link to="/services" className="default-btn">
                            View All Services <i className="flaticon-right-up"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>);
}
export default CardsGrid;