import React from 'react';
import Content from './Content';

const HTMLContent = ({ className, content }) => (
  // eslint-disable-next-line react/no-danger
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

HTMLContent.propTypes = Content.propTypes;

export default HTMLContent;
