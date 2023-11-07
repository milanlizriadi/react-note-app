import React from "react"
import autoBind from "react-autobind"

class NoteInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title : '',
      body : '',
    }

    autoBind(this)
  }

  onLimitCharHandler(text, limit){
    return limit - text.length
  }

  onChangeTitle(event){
    this.setState(()=>{
      return {
        title : event.target.value
      }
    })
  }

  onChangeBody(event){
    this.setState(()=>{
      return {
        body : event.target.value
      }
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault()
    this.props.addNote(this.state)
  }

  render() {
    const { title } = this.state
    const titleLimitChar = this.onLimitCharHandler(title, 50)

    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa Karakter : {titleLimitChar}</p>
        <form>
          <input id="note-input__title" type="text" placeholder="Masukkan judul..." maxLength={50} value={this.state.title} onChange={this.onChangeTitle} />
          <textarea name="input-body" id="note-input__body" cols="30" rows="10" placeholder="Tulis catatanmu disini..." value={this.state.body} onChange={this.onChangeBody}></textarea>
          <button type="submit" onClick={this.onSubmitEventHandler}>Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteInput