import NotesList from './components/NotesList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import Search from './components/Search';
import MyHeader from './components/MyHeader';

function App() {
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: 'First Note',
    //   date: '26/01/22'
    // },
    // {
    //   id: nanoid(),
    //   text: 'Second Note',
    //   date: '25/01/22'
    // },
    // {
    //   id: nanoid(),
    //   text: 'Third Note',
    //   date: '26/01/22'
    // },
    // {
    //   id: nanoid(),
    //   text: 'Fourth Note',
    //   date: '27/01/22'
    // },
  ])

  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-noted-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-noted-data',
      JSON.stringify(notes)
    )
  }, [notes])

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

  // const handleDarkModeSet = () => !darkMode ? setDarkMode(darkMode) : setDarkMode(!darkMode)

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <MyHeader handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          // handleDarkModeSet={handleDarkModeSet}
        />
      </div>
    </div>
  );
}

export default App;
