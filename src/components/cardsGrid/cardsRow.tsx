import * as React from "react"
import Card from "../teaser/card";

const CardsRow = (props) => {

    return (
        <div className={`${props.customCssClass}`}>
            <div className="container-fluid">
                <div className="features-inner-box bg-black pt-100 pb-75">
                    <div className="row justify-content-center">
                        {props.cards?.map((card) => {
                            return <Card {...card} key={card.id}/>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardsRow;