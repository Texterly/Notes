import React from 'react';
import AddNotes from './AddNotes';
import Note from './Note';

function NodeList({ notes, handleAddNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNotes handleAddNote={handleAddNote} />
    </div>
  );
}

export default NodeList;
