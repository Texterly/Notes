import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

function Note() {
  return (
    <div className="note">
      <span>Hello</span>
      <div className="note-footer">
        <small>13/04/2022</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}

export default Note;