import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";

function Card(note){
    return (<Note 
      key={note.key}
      title={note.title}
      content={note.content}
    />);
}

function App() {
  return (
    <div>
      <Header />
      <div className="card">{notes.map(Card)}</div>
      <Footer />
    </div>
  );
}

export default App;
