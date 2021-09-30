import React from "react";
import { Link } from 'react-router-dom';
import changeLanguage from "./lang";


function gfheader() {
  var currentSite = window.location.pathname;
  return (
    <div>
      <h1>GF Trekroner Syd</h1>
      <button  onClick={() => changeLanguage(true)}>
        <Link to={currentSite}>Change language</Link>
      </button>
    </div>

  );
}

export default gfheader;
