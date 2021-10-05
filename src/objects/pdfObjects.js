import { pdfOverviewText } from "../components/objectText/pdfOverviewText";

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
            img: "https://image.shutterstock.com/image-vector/blue-parking-sign-isolated-vector-600w-1191536209.jpg",
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: "https://soshace.com/wp-content/uploads/2016/01/rule.png"
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: "https://da.hoboetc.com/images/domashnij-uyut/gortenziya-anabel-posadka-i-uhod-opisanie-sorta.jpg"
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: "https://www.moltobene.dk/images/restaurants/large/20de47d2b13a1df9fc7d4990a3d75e36.jpg"
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: "https://i2.wp.com/www.ommersysselrideklub.dk/wp-content/uploads/2018/03/Billede-vedt%C3%A6gter.jpg?resize=500%2C145&ssl=1"
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: "https://img.huffingtonpost.com/asset/5d8bf2c91e000058007256ab.jpeg?ops=scalefit_720_noupscale"
        },
        {
            title_dk: textDK[number].header,
            title_en: textEN[number].header,
            content_dk: textDK[number].text,
            content_en: textEN[number].text, 
            raiseNumber: raiseNumber(),
            img: "https://www.frederikshavn.dk/media/11505/vignet_hoeringssvar_aeldreraadet_groen.jpg?anchor=center&mode=crop&width=900&height=360&rnd=132473342002930000"
        },
    ]
}