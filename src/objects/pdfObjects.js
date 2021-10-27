import { pdfOverviewText } from "../objectText/pdfOverviewText";
import parking from "../images/parking1.png";
import rules from "../images/rules1.png";
import areaCaretaking from "../images/areaofcaretaking1.png";
import resume from "../images/resume1.png";
import aoa from "../images/aoa1.png";
import budget from "../images/budget1.png";
import tender from "../images/tender1.png";




var number = 0;

function raiseNumber(){
  number++;
}

var textDK = pdfOverviewText.pdfOverviewText_DK;
var textEN = pdfOverviewText.pdfOverviewText_EN;

export var pdfObjectList = {
    pdfObjects: [
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: parking,
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: rules,
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: areaCaretaking,
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: resume,
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: aoa,
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: budget,
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: tender,
        },
    ]
}