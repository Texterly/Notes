import React from 'react';

function Header({ handleToggleDarkMode }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}
        className="save"
        type="button"
      >
        Toggle mode
      </button>
    </div>
  );
}

export default Header;
