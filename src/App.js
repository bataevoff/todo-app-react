import NotesList from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid'

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'First Note',
      date: '26/01/22'
    },
    {
      id: nanoid(),
      text: 'Second Note',
      date: '25/01/22'
    },
    {
      id: nanoid(),
      text: 'Third Note',
      date: '26/01/22'
    },
    {
      id: nanoid(),
      text: 'Fourth Note',
      date: '27/01/22'
    },
  ])

  const addNote = (text) => {
    const date = new Date().toString()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = id => {
      const newNotes = notes.filter((note) => note.id !== id)
      setNotes(newNotes)
  }

  return (
    <div className="container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
