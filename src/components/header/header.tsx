import * as React from "react"
import {useStaticQuery, graphql} from "gatsby";
import TopHeader from "./topHeader";
import NavBar from "./navBar";

export default function Header() {

  const data = useStaticQuery(graphql`
    query {
      contentfulHeader(entryTitle: {eq: "Global Header"}) {
        entryTitle
        enableTopHeader
        topHeader {
          email
          phone
          rightButtons {
            entryTitle
            label
            url
            target
          }
        }
        image {
          gatsbyImageData
          title
        }
        imageAlt
        navigationGroups {
          id
          displayText
          entryTitle
          link
          level2Links {
            id
            entryTitle
            label
            url     
          }
        }
      }
}
  `)

  return(
      <header className="header-area">
          <NavBar NavStyleClass="style-two" navGroup={data.contentfulHeader.navigationGroups}/>
      </header>
  )
} 
