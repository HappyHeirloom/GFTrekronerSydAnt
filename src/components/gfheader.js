import React from "react";
import { Link } from 'react-router-dom';
import getCurrentSite from "./languageComponent";
import changeLanguage from "./languageComponent";

function gfheader() {
  return (
    <div>
      <h1>GF Trekroner Syd</h1>
      <button  onClick={() => changeLanguage(true)}>
        <Link to={getCurrentSite()}>Change language/Skift Sprog</Link>
      </button>
    </div>

  );
}

export default gfheader;
