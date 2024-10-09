import * as React from "react"
import Quote from "./quote";

const ImageText = (props) => {
    const {
        layout
    } = props;
 if (layout === 'quote') {
return (<Quote {...props}></Quote>);
 }

 return (<>Inside Image text</>);
}

export default ImageText;