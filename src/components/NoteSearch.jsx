function NoteSearch({ inputSearch, onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari judul catatan..."
        value={inputSearch}
        onChange={onSearch}
      />
    </div>
  );
}

export default NoteSearch;
