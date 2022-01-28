import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => handleDeleteNote(id)}
          className='delete-icon'
          size='1.3em'/>
      </div>
    </div>
  );
}

export default Note;