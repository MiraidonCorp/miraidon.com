import * as React from "react"
import { graphql } from "gatsby"
import RichText from "../richtext/richtext"
import Image from "../image/image"
import Button from "../button/button"
import "./hero.scss"


const Hero = (data) => {
    return(
        <div className="herocontainer">
            <div>
            {data.content.container.map((item, index) => {

            switch(item.__typename){
                case "ContentfulText":
                    return <div><RichText raw={item.richText.raw}></RichText></div>
                break;

                case "ContentfulImage":
                    return <div className="imgcontainer"><Image {...item.source}></Image></div>
                break;

                case "ContentfulButton":
                    return <div><Button {...item}></Button></div>
                break;
            }
            })}
            </div>
        </div>
    );
}

export const query = graphql`
  fragment HeroContent on ContentfulContainer {
        ... on ContentfulContainer {
          id
          __typename
          container {
            __typename
            ... on ContentfulButton {
              id
              name
              label
              type
            }
            ... on ContentfulImage {
              id
              source {
                url
                title
              }
            }
            ... on ContentfulText {
              id
              richText {
                raw
              }
            }
          }
        }
  }
`

export default Hero

