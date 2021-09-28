import { React, useState } from "react";
import { send } from 'emailjs-com';

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

    return (
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
    )
}

export default EmailForm