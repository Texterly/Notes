import React from 'react';

function AddNotes() {
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add a note...">
      </textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button type="button" className="save">Save</button>
      </div>
    </div>
  );
}

export default AddNotes;
