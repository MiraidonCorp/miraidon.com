import * as React from "react"
import ImageList from "./imageList";


const Container = (props) => {
    const {
        layout
    } = props;

    if (layout === 'image-list') {
        return <ImageList {...props} ></ImageList>
    }


    return(<div>this is container</div>);
}

export default Container;