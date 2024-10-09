import React from "react";
import "./image.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Image = (props) => {
    return(<img alt={props.title} src={props.url}></img>);
}

export default Image;