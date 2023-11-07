import React from "react"
import { getInitialData } from "../utils/index"
import NoteHeader from "./NoteHeader"
import NotesList from "./NoteItemList"
import NoteInput from "./NoteInput"
import autoBind from 'react-autobind'

class NotesApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),
      inputSearch : "",
    }

    autoBind(this)
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes})
  }

  onArchiveHandler(id) {
    this.setState((prevState)=>{
      return {
        prevState : prevState.notes.map((note)=>(
          note.id === id ? (note.archived = !note.archived) : note
        ))
      }
    })
  }

  onAddNoteHandler({ title, body}){
    this.setState((prevState)=>{
      return {
        notes : [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toISOString(),
            body,
            archived: false
          }
        ]
      }
    })
  }

  onSearchHandler(event){
    this.setState({
      inputSearch : event.target.value
    })
  }

  searchNotes(){
    const { notes, inputSearch } = this.state
    return (
      notes.filter((note) => {
        note.title.toLowerCase().includes(inputSearch.toLowerCase())
      })  
    )
  }

  render() {
    const activeNotes = this.state.notes.filter((note) => note.archived === false)
    const archiveNotes = this.state.notes.filter((note) => note.archived === true)

    return (
      <div className="note-app">
        <NoteHeader inputSearch={this.state.inputSearch} onSearch={this.onSearchHandler}/>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler}/>
          <h2>Catatan Aktif</h2>
          <NotesList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
          <h2>Arsip</h2>
          <NotesList notes={archiveNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
        </div>
      </div>
    )
  }
}

export default NotesApp