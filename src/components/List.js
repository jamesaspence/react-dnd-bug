import React from 'react';

const List = ({ children, innerRef }) => (
  <div  className="List" ref={innerRef}>
    {children}
  </div>
);

export default List;