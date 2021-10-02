import { pdftext } from "./pdftext";
var pdfstexts = pdftext.pdfstext;

var number = 0;

function raiseNumber(){
  number++;
}

export var pdfList = {
  pdfs: [
    {
      name: "Parking",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2020/12/P-bestemmelser-Grundejerforeningen-Trekroner-syd-August-19.pdf",
      text_dk: pdfstexts[number].Text_DK,
      text_en: pdfstexts[number].Text_EN,
      header_dk: pdfstexts[number].header_DK,
      header_en: pdfstexts[number].header_EN,
      raiseNumber: raiseNumber(),
    },
    {
      name: "Rules",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2020/12/Ordensregler_Trekroner_Syd_compressed.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
        raiseNumber: raiseNumber(),
    },
    {
      name: "AreaCaretaking",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2021/08/Trekroner-elementer-plejebeskrivelse.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
        raiseNumber: raiseNumber(),
    },
    {
      name: "Resume2021",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2021/07/Referat-fra-ordinaer-generalforsamling-2021.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
    },
    {
      name: "Resume2020",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2020/12/Referat-Generalforsamling-GF-Trekroner-Syd-18.-august-2020.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
    },
    {
      name: "Resume2019",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2020/12/Grundejerforeningen-Trekroner-Syd-Arsrapport-2019-godkendt-af-revisor-ex.-underskrifter.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
    },
    {
      name: "Resume2018",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2020/12/Arsrapport-2018.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
    },
    {
      name: "Resume2017",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2020/12/Aarsrapport-2017.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
        raiseNumber: raiseNumber(),
    },
    {
      name: "Aoa2020",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2021/07/Vedtaegter-GF-Trekroner-Syd-underskrevne-2020-08-18.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
        raiseNumber: raiseNumber(),
    },
    {
      name: "Budget2021",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2021/07/41337-budget-2021-Grundejerforeningen-Trekroner-Syd-1.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
    },
    {
      name: "Budget2020",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2020/12/Budget-udkast-2020-G-F-til-Generalforsamling-.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
    },
    {
      name: "Budget2019",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2021/01/Kopi-af-GF-Trekroner-Syd-budget-2019-godkendt-af-bestyrelse.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
    },
    {
      name: "Budget2018",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2020/12/Budget-2018-Grundejerforeningen-Trekroner-Syd.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
    },
    {
      name: "Budget2017",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2020/12/Trekroner_Syd_Budget_2017.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
        raiseNumber: raiseNumber(),
    },
    {
      name: "Tender",
      embedURL:
        "https://usercontent.one/wp/www.gftrekronersyd.dk/wp-content/uploads/2021/07/Trekroner-Driftsudbud-Saerlige-Arbejdsbetingelser-SAB.pdf",
        text_dk: pdfstexts[number].Text_DK,
        text_en: pdfstexts[number].Text_EN,
        header_dk: pdfstexts[number].header_DK,
        header_en: pdfstexts[number].header_EN,
        raiseNumber: raiseNumber(),
    },
  ],
};

// AOA = vedtægter
// Tender = udbudsmateriale

// pdfList.pdfs[0].embedURL = Parking
// pdfList.pdfs[1].embedURL = Rules
// pdfList.pdfs[2].embedURL = AreaCaretaking
// pdfList.pdfs[3].embedURL = Resume2021
// pdfList.pdfs[4].embedURL = Resume2020
// pdfList.pdfs[5].embedURL = Resume2019
// pdfList.pdfs[6].embedURL = Resume2018
// pdfList.pdfs[7].embedURL = Resume2017
// pdfList.pdfs[8].embedURL = Aoa2020
// pdfList.pdfs[9].embedURL = Budget2021
// pdfList.pdfs[10].embedURL = Budget2020
// pdfList.pdfs[11].embedURL = Budget2019
// pdfList.pdfs[12].embedURL = Budget2018
// pdfList.pdfs[13].embedURL = Budget2017
// pdfList.pdfs[14].embedURL = Tender
