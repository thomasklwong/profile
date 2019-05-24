import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';

const StyledBody = styled.body`
  ${tw`m-0 font-sans text-gray-800 leading-relaxed`};
  text-size-adjust: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  [type='button'],
  [type='reset'],
  [type='submit'],
  button {
    appearance: button;
  }
`;

const StyledBodyDiv = styled.div`
  & > div {
    ${tw`flex max-w-5xl mx-auto`}
  }
`;

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body: __html,
  postBodyComponents
}) => (
  // eslint-disable-next-line jsx-a11y/html-has-lang
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
      {headComponents}
    </head>
    <StyledBody {...bodyAttributes}>
      {preBodyComponents}

      <noscript id="gatsby-noscript" key="noscript">
        This app works best with JavaScript enabled.
      </noscript>

      <StyledBodyDiv
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html }}
        id="___gatsby"
        key={`body`}
      />
      {postBodyComponents}
    </StyledBody>
  </html>
);

HTML.propTypes = {
  body: PropTypes.string,
  bodyAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  htmlAttributes: PropTypes.object,
  postBodyComponents: PropTypes.array,
  preBodyComponents: PropTypes.array
};

export default HTML;
