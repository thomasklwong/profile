import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ className, content }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  className: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired
};

export default Content;
