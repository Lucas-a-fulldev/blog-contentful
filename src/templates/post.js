import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents }  from '@contentful/rich-text-react-renderer'

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{strong}</strong>
  },
  renderBlock: {
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>
  }
}


const Post = ({ data, ...props }) => {
  return (
    <div>
      <h1>{data.contentfulPost.title}</h1>
     { /* <img src={data.contentfulPost.featuredImage.fixed.src} />  */ }
    <Image fixed={data.contentfulPost.featuredImage.fixed}/>
      <div dangerouslySetInnerHTML={{
      __html: data.contentfulPost.content.childMarkdownRemark.html
          }} 
          />
          <div>
            {documentToReactComponents(data.contentfulPost.contentRich.json, options)}
          </div>
      <pre>{JSON.stringify(props, null,  2)}</pre>
    </div>
)
}
export const pageQuery = graphql`
query  ($slug: String!) {
  contentfulPost(slug: {eq: $slug }, visible: {eq: true}) {
    title 
    content {
      childMarkdownRemark {
        html
      }
    }

    featuredImage {
      fixed(width: 480, height: 320) {
        ...GatsbyContentfulFixed
      }
    }
    contentRich{
      json
  }
  }
}
`
export default Post