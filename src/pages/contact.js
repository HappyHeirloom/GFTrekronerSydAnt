//#region Imports

import { React } from "react";
import { withRouter } from 'react-router-dom'

import EmailForm from "../components/emailForm";

import "../styles/App.css";

//#endregion

function Contact() {
  //#region React hooks

  //#endregion

  //#region Functions

  //#endregion

  //#region Html code

  return (
    <div className="row">
      <div className="col-6 my-auto">
        <div className="text-center">
          <h1 className="mb-5">
            Kontakt os
          </h1>
          <p>
            G/F Trekroner syd er en grundejerforening, hvor vi befinder os i
            Roskilde kommune. Bestyrelsen i grundejerforeningen varetager dine
            rettigheder, og er med til at løse problemerne i området. G/F varetager
            en bred vifte af opgaver for medlemmerne i grundejerforening. For at
            kunne give vores forbrugere i området den bedste ydelse, er det vigtigt
            at vide, at vi ikke svarer på private henvendelser, men hvor vi er
            fokuserede på, at levere den bedste ydelse, og besvare vores medlemmer,
            så hurtigst vi kan. Har du ikke fået svar på dit spørgsmål, vil vi gerne
            henvende dig til vores FAQ. Klik på linket nedenunder, derimod hvis det
            ikke gav dig en klar melding, skal du henvende dig til din ejerforening,
            hvor de kan vejlede dig.
          </p>
        </div>
      </div>

      {/* Submit emails form */}
      <div className="col-6 my-auto">
        <div className="email">
          <EmailForm/>
        </div>
      </div>
    </div>
  );

  //#endregion

}

export default withRouter(Contact);
