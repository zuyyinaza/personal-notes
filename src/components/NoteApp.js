import React from "react";
import NoteList from "./NoteList";
import { getData } from "../utils/data";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const note = this.state.note.filter((note) => note.id !== id);
    this.setState({ note });
  }

  onAddNoteHandler({ title, body }) {
    let string = new Date().toISOString();
    this.setState((prevState) => {
      return {
        note: [
          ...prevState.note,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: string,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="note-app">
        <br></br>
        <h1>Notes App</h1>
        <hr></hr>
        <h3>Buat Catatan</h3>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h3>Catatan Aktif</h3>
        <NoteList note={this.state.note} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NoteApp;
