import React from 'react'
import { graphql } from 'gatsby'

const Post = ({ data, ...props }) => {
  return (
    <div>
      <h1>{data.contentfulPost.title}</h1>
      <div dangerouslySetInnerHTML={{
      __html: data.contentfulPost.content.childMarkdownRemark.html
          }} />
      <pre>{JSON.stringify(props, null,  2)}</pre>
    </div>
  )
}
export const pageQuery = graphql`
query  ($slug: String!) {
  contentfulPost(slug: {eq: $slug }, visible: {eq: true}) {
    title 
    content {
      childrenMarkdownRemark {
        html
      }
    }
  }
}
`
export default Post