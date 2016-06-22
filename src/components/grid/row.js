import React, {PropTypes} from 'react';

const Row = ({children, className}) => (
  <div className={`grid row ${className}`}>{children}</div>
);

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
};

export default Row;
