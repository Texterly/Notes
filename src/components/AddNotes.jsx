import React, { useState } from 'react';

function AddNotes({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSaveClick = () => {
    handleAddNote(noteText);
  };
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      >
      </textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button type="button" className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}

export default AddNotes;
