import React from "react";
import "./App.css"

const d = new Date();
let year = d.getFullYear();

function Footer() {
  return (
    <div class="footer">
      <p>Copyright &copy; {year}</p>
    </div>
  );
}

export default Footer;