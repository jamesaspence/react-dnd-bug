import React from 'react';
import './ListItem.scss';

const ListItem = ({
  item,
  checked = false,
  draggableProps,
  dragHandleProps,
  innerRef
}) => {
  return (
    <div
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
      className="ListItem"
    >
      <p className={`ListItem__text ${checked ? 'ListItem__text--checked' : ''}`}>
        {item}
      </p>
    </div>
  );
};

export default ListItem;