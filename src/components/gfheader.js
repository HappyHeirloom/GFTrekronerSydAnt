import React from "react";
import { Link } from 'react-router-dom';
import getCurrentSite from "./languageComponent";
import changeLanguage from "./languageComponent";

var site = getCurrentSite();


function gfheader() {
  return (
    <div>
      <h1>GF Trekroner Syd</h1>
      <button  onClick={() => changeLanguage(true)}>
        <Link to={site}>Change language/Skift Sprog</Link>
      </button>
    </div>

  );
}

export default gfheader;
