import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const StyledArticleContainer = tw.article`py-10 px-8`;
const StyledArticle = tw.article`mb-8`;
const StyledTitle = tw.h2`text-2xl leading-loose mb-3`;
const StyledMeta = tw.section`text-sm uppercase`;
const StyledDivider = tw.span`mx-1`;
const StyledCategory = tw.span`leading-relaxed text-yellow-600`;
const StyledExcerpt = tw.p`leading-relaxed my-4`;
const StyledReadMore = styled(Link)`
  ${tw`text-indigo-600 hover:underline focus:underline`}
`;

const BlogRoll = () => {
  const {
    allMarkdownRemark: { edges: projects }
  } = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "project-page" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <StyledArticleContainer>
      {projects?.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter: { title, date },
            excerpt
          }
        }) => (
          <StyledArticle key={id}>
            <header>
              <StyledMeta>
                {/* TODO: Extract proper datetime here */}
                <time dateTime={Date.now()}>{date}</time>
                <StyledDivider />
                {/* TODO: Add Category/Tag */}
                <StyledCategory>Category</StyledCategory>
              </StyledMeta>
              <StyledTitle>
                <Link to={slug}>{title}</Link>
              </StyledTitle>
            </header>
            <StyledExcerpt>{excerpt}</StyledExcerpt>
            <nav>
              <StyledReadMore className="button" to={slug}>
                Keep Reading
              </StyledReadMore>
            </nav>
          </StyledArticle>
        )
      )}
    </StyledArticleContainer>
  );
};

BlogRoll.propTypes = {};

export default BlogRoll;
