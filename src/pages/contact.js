//#region Imports

import { React, useState } from "react";
import { withRouter } from 'react-router-dom'
import { send } from 'emailjs-com';

import "../styles/App.css";

//#endregion

function Contact() {
  //#region React hooks

  var [dis, setDis] = useState(true);
  // React hooks
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'GFTrekronerSyd',
    subject: '',
    message: '',
    reply_to: '',
  });

  //#endregion

  //#region Functions

  // When button is clicked to send. Get information from emailjs and send the email.
  // Give the user an alert and then reload page.
  const onSubmit = (e) => {
    e.preventDefault();
    setDis(dis = true);
    send(
      'service_ybre4yj',
      'template_hiv4dui',
      toSend,
      'user_de1VDinbA9jyG02Px825F'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        if(!alert('Din email er sendt. Bestyrelsen kigger på den hurtigst muligt')){window.location.reload();}
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("Noget gik galt, prøv igen. Tjek din internet forbindelse");
      });
  };

  // Updates the state of the given input.
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    checkInput();
  };

  // checks if there is text in input fields and then enables the button if yes
  function checkInput(){
    if(toSend.from_name.length > 0 && toSend.subject.length > 0 && toSend.message.length > 0 && toSend.reply_to.length > 0){
      setDis(dis = false);
    }
  }

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
          <form id="emailForm" onSubmit={onSubmit}>
            <input
              id="emailName"
              type='text'
              name='from_name'
              placeholder='Dit navn'
              value={toSend.from_name}
              onChange={handleChange}
              />
            <input
              id="emailMail"
              type='text'
              name='reply_to'
              placeholder='Din email'
              value={toSend.reply_to}
              onChange={handleChange}
            />
            <input
              id="emailSubject"
              type='text'
              name='subject'
              placeholder='Email emne'
              value={toSend.subject}
              onChange={handleChange}
              />
            <input
              id="emailMessage"
              type='text'
              name='message'
              placeholder='Din besked'
              value={toSend.message}
              onChange={handleChange}
              />
            <button id="submitButton" type='submit' disabled={dis}>Send e-mail</button>
          </form>
        </div>
      </div>
    </div>
  );

  //#endregion

}

export default withRouter(Contact);
