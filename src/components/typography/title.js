import React, {PropTypes} from 'react';

const Title = ({children, className}) => (
  <h1 className={`typography title ${className}`}>{children}</h1>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Title;
