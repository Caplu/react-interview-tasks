import React, {PropTypes} from 'react';

const Column = ({children, className}) => (
  <div className={`grid column ${className}`}>{children}</div>
);

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  className: PropTypes.string,
};

export default Column;
