import React from "react";

function NoteItemBody({ title, createdAt, body }) {
  return (
    <div className="note-item__body">
      <h4 className="note-item__title"> {title}</h4>
      <p className="note-item__date">Dibuat : {createdAt}</p>
      <p className="note-item__body"> {body}</p>
    </div>
  );
}

export default NoteItemBody;
