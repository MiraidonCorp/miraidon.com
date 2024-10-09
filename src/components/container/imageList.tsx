import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Image from "../image/image";

const ImageList = (props) => {

    const data = useStaticQuery(graphql`
    query {
          allContentfulContainer(filter: {layout: {eq: "image-list"}}) {
            edges {
              node {
                id
                entryTitle
                layout
                content {
                  ... on ContentfulImageText {
                   id
                    entryTitle
                    image {
                      id
                      url
                    }
                  }
                }
              }
            }
      }
    }
  `)

    return(
        <div className={`${props.customCssClass}`}>
        {
            data.allContentfulContainer.edges.map((edge)=> {
                if (edge.node.id === props.id) {
                    return (
                        <div className="container-fluid" key={edge.node.id}>
                            <div className="row justify-content-center align-items-center">
                                {edge.node.content &&
                                    edge.node.content.map((p) => (
                                        <div
                                            className="col"
                                            data-aos="fade-in"
                                            data-aos-duration="1000"
                                            data-aos-delay="200"
                                            key={p.id}
                                        >
                                            <div className="partner-item mb-25 text-center">
                                                <Image {...p.image}></Image>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )
                }
            })
        }</div>
    );
}

export default ImageList;