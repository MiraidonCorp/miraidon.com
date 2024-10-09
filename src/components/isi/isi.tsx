import * as React from "react"
import { graphql } from "gatsby"
import RichText from "../richtext/richtext"
import "./isi.scss"

const ISI = (data) => {
    return <div className="isicontainer"><RichText raw={data.content.richText.raw}></RichText></div>;
}

export const query = graphql`
  fragment IsiContent on ContentfulText {
        ... on ContentfulText {
          id
          richText {
            raw
          }
        }
  }
`

export default ISI

