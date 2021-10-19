import { React, useState } from "react";
import { send } from 'emailjs-com';
import {kontaktText} from '../objectText/kontaktText';
import changeLanguage from './languageComponent';

import '../styles/contact.css'

var pHolder = "";
var number = 0;

function resetNumber(){
  number = 0;
}

function raiseNumber(){
  number++;
}

function EmailForm() {
    //#region Variables
    // React hooks
    var [dis, setDis] = useState(true);
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

    if(changeLanguage() ? pHolder = kontaktText.kontaktformText_EN : pHolder = kontaktText.kontaktformText_DK);

    //#endregion

    const stylebesked = {
        maxHeight: "75px",
        minHeight: "100px",
        resize: "none",
        padding: "10px",
        boxSizing: "border-box",
        fontSize: "15px"}
    const style= {
        maxHeight: "75px",
        minHeight: "38px",
        resize: "none",
        padding: "10px",
        boxSizing: "border-box",
        fontSize: "15px"}


    return (

      
        <form id="emailForm" onSubmit={onSubmit}>
            <input
            style={style}
            id="emailName"
            type='text'
            name='from_name'
            placeholder={pHolder[number].text}
            value={toSend.from_name}
            onChange={handleChange}
            />
            {raiseNumber()}
            <input
            style={style}
            id="emailMail"
            type='text'
            name='reply_to'
            placeholder={pHolder[number].text}
            value={toSend.reply_to}
            onChange={handleChange}
            />
            {raiseNumber()}
            <input
            style={style}
            id="emailSubject"
            type='text'
            name='subject'
            placeholder={pHolder[number].text}
            value={toSend.subject}
            onChange={handleChange}
            />
            {raiseNumber()}
            <input
            style={stylebesked}
            id="emailMessage"
            type='text'
            name='message'
            placeholder={pHolder[number].text}
            value={toSend.message}
            onChange={handleChange}
            />
            {raiseNumber()}
            <button id="submitButton" type='submit' disabled={dis}>{pHolder[number].text}</button>
            {resetNumber()}
        </form>
    )
}

export default EmailForm
