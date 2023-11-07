import NoteSearch from "./NoteSearch";

function NoteHeader({ inputSearch, onSearch }){
  return (
    <div className="note-app__header">
      <h1>Personal Notes</h1>
      <NoteSearch inputSearch={inputSearch} onSearch={onSearch}/>
    </div>
  )
}

export default NoteHeader