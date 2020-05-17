import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';
import ListItem from './ListItem';

const DragDropList = ({
  items,
  listId
}) => {
  const [sortedItems, setSortedItems] = useState(items);

  const onDragEnd = result => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }

    const newItems = Array.from(items);
    newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, items[source.index]);

    setSortedItems(newItems);
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId={listId}>
        {provided => (
          <List {...provided.droppableProps} innerRef={provided.innerRef}>
            {sortedItems.map((item, i) =>
              <Draggable key={item.id} draggableId={item.id} index={i}>
                {provided => (
                  <ListItem
                    item={item.text}
                    checked={item.checked}
                    index={i}
                    itemId={item.id}
                    draggableProps={provided.draggableProps}
                    dragHandleProps={provided.dragHandleProps}
                    innerRef={provided.innerRef}
                  />
                )}
              </Draggable>
            )}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropList;