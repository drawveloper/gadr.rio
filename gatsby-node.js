const _ = require('lodash');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve('./src/templates/blog-post.jsx');
  createPage({
    path: '/',
    component: path.resolve('./src/templates/blog-index.jsx'),
  });

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                draft
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      console.log(result.errors);
      reject(result.errors);
      return;
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges;

    _.each(posts, (post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          draft: post.node.frontmatter.draft,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (_.get(node, 'internal.type') === `MarkdownRemark`) {
    createNodeField({
      node,
      name: 'slug',
      value: path.basename(path.dirname(_.get(node, 'fileAbsolutePath'))),
    });
  }
};
