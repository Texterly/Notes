import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NodeList from './components/NodeList';

function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'This is my first note!',
    date: '15/10/2022',
  },
  {
    id: nanoid(),
    text: 'This is my second note!',
    date: '25/10/2022',
  },
  {
    id: nanoid(),
    text: 'This is my third note!',
    date: '26/10/2022',
  }]);
  return (
    <div className="container">
      <NodeList notes={notes} />
    </div>
  );
}

export default App;
