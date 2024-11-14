import * as React from "react"
import {graphql} from "gatsby";
import Layout from "../components/layout/layout"
import mapTo from "../services/registercomponent";

const Page = (props) => {
    return( <Layout>
        {props.data.contentfulPage?.container?.map( (block) => {
            const { id } = block;
            const Component = mapTo(block);
            return <Component key={id} {...block}/>
        })}

    </Layout>);
}

export const query = graphql`
query PageQuery($slug: String) {
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
            __typename
            id
            label
            url
            displayAsButton
          }
        }
      }
      ... on ContentfulCardsGrid {
        component: __typename
        layout
        id
        customCssClass
        gridTitle: title
        gridSubTitle: subTitle
        gridDesc: description {
          raw
        }
        cards {
          ... on ContentfulTeaser {
            component: __typename
            customCssClass
            id
            title {
              raw
            }
            subTitle
            description {
              raw
            }
            iconClass
            ctAs {
              ... on ContentfulLink {
                id
                label
                url
                customCssClass
              }
            }
          }
        }
      }
      ... on ContentfulContainer {
        component: __typename
        id
        contentful_id
        layout
        customCssClass
      }
      ... on ContentfulImageText {
        component: __typename
        id
        entryTitle
        layout
        image {
          title
          url
        }
        customCssClass
        text {
          raw
        }
      }
      ... on ContentfulBanner {
        component: __typename
        id
        customCssClass
        bannerTitle: title
        layout
        floatingImages {
          ... on ContentfulImage {
            component: __typename
            customCssClass
            id
            altText
            image {
              url
              id
              title
            }
          }
        }
        cta {
          ... on ContentfulLink {
            id
            label
            url
            customCssClass
          }
        }
      }
      ... on ContentfulImageFeatureList {
        component: __typename
        layout
        featureListTitle: title
        subTitle
        customCssClass
        description {
          raw
        }
        image {
          customCssClass
          image {
            url
          }
        }
        featuresList {
          ... on ContentfulTeaser {
            title {
              raw
            }
            description {
              raw
            }
            iconClass
            customCssClass
          }
        }
      }
    }
  }
}
`

export default Page
