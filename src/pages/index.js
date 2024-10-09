import * as React from "react"
import {graphql} from "gatsby";
import Layout from "../components/layout/layout"
import * as sections from "../components/sections";

const Page = (props) => {
 console.log('page', props);
  
 return( <Layout>

  {props.data?.contentfulPage?.container.map( (block) => {
   const { id, component, ...componentProps } = block;
   const Component = sections[component];
   return <Component key={id} {...componentProps}/>
  })}

  </Layout>);
}

export const query = graphql`
  query PageQuery($slug : String ) {
        contentfulPage(slug: {eq: $slug}) {
          pageTitle
          slug
          container {
            ... on ContentfulTeaser {
              component: __typename
              id
              title {
                raw
              }
              subTitle
              description {
                raw
              }
              layout
              image {
                   title
          url
                 }
              ctAs {
          ... on ContentfulLink {
            entryTitle
            id
            label
            url
            displayAsButton
          }
        }   
            }
          }
        }
      }
`

export default Page
