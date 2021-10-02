import {pdfText} from '../components/objectText/pdfText';

var number = 0;
var oldNum = 0;
var spareNum = 0;

var text_dk = pdfText.pdfText_DK;
var text_en = pdfText.pdfText_EN;


function resetNumber(){
  // console.log("########## RESET ##########")
  oldNum = number;
  // console.log("Setting oldNum: " + oldNum);
  number = spareNum;
  // console.log("Setting number: " + number);
  spareNum = oldNum;
  // console.log("Setting spareNum: " + spareNum);
}

function raiseNumber(){
  // console.log("########## RAISING ##########")
  number++;
  // console.log("Raising number to: " + number);
}
function setNumber(){
  // console.log("########## SETTING ##########")
  number = oldNum;
  // console.log("Setting number to: " + number);
}


export var pdftext = {
  pdfstext: [
    { // PARKING
      name: "Parking",
      header_DK: text_dk[number].header,
      header_EN: text_en[number].header,
      Text_DK: (
        <div>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! DK ENDING !!!!!!!")} */}
        </div>
      ),
      Text_EN: (
        <div>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! EN ENDING !!!!!!!")} */}
        </div>
      ),
      setNumber: setNumber(),
    },
    { // RULES
      name: "Rules",
      header_DK: text_dk[number].header,
      header_EN: text_en[number].header,
      Text_DK: (
        <div>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            {text_dk[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! DK ENDING !!!!!!!")} */}
        </div>
      ),
      Text_EN: (
        <div>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            {text_en[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! EN ENDING !!!!!!!")} */}
        </div>
      ),
      setNumber: setNumber(),
    },
    { // AREA CARETAKING
      name: "Plejebeskrivelse",
      header_DK: text_dk[number].header,
      header_EN: text_en[number].header,
      Text_DK: (
        <div>
            {text_dk[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! DK ENDING !!!!!!!")} */}
        </div>
      ),
      Text_EN: (
        <div>
            {text_en[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! EN ENDING !!!!!!!")} */}
        </div>
      ),
      setNumber: setNumber(),
    },
    { // RESUME
      name: "Resume",
      header_DK: text_dk[number].header,
      header_EN: text_en[number].header,
      Text_DK: (
        <div>
            {text_dk[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! DK ENDING !!!!!!!")} */}
        </div>
      ),
      Text_EN: (
        <div>
            {text_en[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! EN ENDING !!!!!!!")} */}
        </div>
      ),
      setNumber: setNumber(),
    },
    { //AOA
      name: "Vedtægter",
      header_DK: text_dk[number].header,
      header_EN: text_en[number].header,
      Text_DK: (
        <div>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_dk[number].header}</h3>
            {text_dk[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! DK ENDING !!!!!!!")} */}
        </div>
      ),
      Text_EN: (
        <div>
            {text_dk[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            <br/>
            {raiseNumber()}
            <h3>{text_en[number].header}</h3>
            {text_en[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! EN ENDING !!!!!!!")} */}
        </div>
      ),
      setNumber: setNumber(),
    },
    { // BUDGET
      name: "Budget",
      header_DK: text_dk[number].header,
      header_EN: text_en[number].header,
      Text_DK: (
        <div>
            {text_dk[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! DK ENDING !!!!!!!")} */}
        </div>
      ),
      Text_EN: (
        <div>
            {text_en[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! EN ENDING !!!!!!!")} */}
        </div>
      ),
      setNumber: setNumber(),
    },
    { // TENDER
      name: "Udbudsmateriale",
      header_DK: text_dk[number].header,
      header_EN: text_en[number].header,
      Text_DK: (
        <div>
            {text_dk[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! DK ENDING !!!!!!!")} */}
        </div>
      ),
      Text_EN: (
        <div>
            {text_en[number].text}
            {raiseNumber()}
            {resetNumber()}
            {/* {console.log("!!!!!!! EN ENDING !!!!!!!")} */}
        </div>
      ),
      setNumber: setNumber(),
    },
  ],
};
