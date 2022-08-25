import React from "react";
import "./App.css";
import notes from "./notes";

function Note(props) {
  return (
    <div className="note">
          <p class="title">{props.title}</p>
          <p class="content">{props.content}</p>
    </div>
  );
}

export default Note;

