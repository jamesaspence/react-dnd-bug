import React from 'react';
import './App.scss';
import DragDropList from './components/DragDropList';

function App() {
  const items = [
    {
      text: 'Item 1',
      checked: false,
      id: '1'
    },
    {
      text: 'Item 2',
      checked: false,
      id: '2'
    }
  ]

  return (
    <div className="App">
      <DragDropList items={items} listId="123456" />
    </div>
  );
}

export default App;
