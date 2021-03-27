import { Link, graphql } from 'gatsby';
import { formatPostDate, formatReadingTime } from '../utils/helpers';

import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Panel from '../components/Panel';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';

class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    const draftStyles = {
      border: 'rgb(8, 34, 22, 0.3) 2px dashed',
      borderRadius: '5px',
    };
    const draftBadge = {
      backgroundColor: '#444',
      color: 'white',
      marginLeft: '10px',
      borderRadius: '5px',
      padding: '2px 4px',
    };
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <aside>
          <Bio />
        </aside>
        <main>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            const draft = get(node, 'frontmatter.draft') || false;
            const articleStyles = {
              padding: '15px',
              marginBottom: rhythm(1),
              ...(draft && draftStyles),
            };
            return (
              <article key={node.fields.slug} style={articleStyles}>
                <header>
                  <h3
                    style={{
                      fontSize: rhythm(1),
                      marginBottom: rhythm(1 / 6),
                    }}
                  >
                    <Link
                      style={{ boxShadow: 'none' }}
                      to={node.fields.slug}
                      rel="bookmark"
                    >
                      {title}
                    </Link>
                  </h3>
                  <small
                    style={{
                      marginBottom: rhythm(1 / 2),
                      display: 'inline-block',
                    }}
                  >
                    {formatPostDate(node.frontmatter.date, 'pt-br')}
                    {` • ${formatReadingTime(node.timeToRead)}`}
                    {draft && <span style={draftBadge}>draft</span>}
                  </small>
                </header>
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
                  style={{
                    marginBottom: rhythm(0),
                  }}
                />
              </article>
            );
          })}
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            draft
            spoiler
          }
        }
      }
    }
  }
`;
