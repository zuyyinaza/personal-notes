import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ note, onDelete }) {
  return (
    <div className="note-list">
      {note.length > 0 ? (
        note.map((note) => <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />)
      ) : (
        <p>
          <center>Tidak ada catatan</center>
        </p>
      )}
    </div>
  );
}

export default NoteList;
