//#region Imports
import React from 'react';
import { Collapse } from 'antd';

//#endregion

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
// Tekst til FAQ
var text = "Se parkeringsregler under dokumenter";
var text2 = "GÆSTEPARKERINGS/DAGSKORT kort printes ud fra ejerforeningens hjemmeside til brug for gæster. Gæsteparkeringskortet skal påføres parkeringsdato, og kun én dato pr kort, og er gældende kun for denne dato. Gæsteparkeringskortene er gældende for parkering i områder med 30 minutters tidsbegrænset parkering . Dagskortet, der anvendes i Ahornlunden, er kun gældende på pladsen i Ahornlunden 1-9 plads nummer 3962. I Ahornlunden er det tilladt at parkere 1 time med korrekt indstillet P skive. Parkeringskortene administreres overordnet af Grundejerforeningen.";
var text3 = "Affaldssortering hører under de enkelte ejerforeninger. Du kan finde deres regler på deres hjemmesider. Der er links til disse på Ejereningerne siden.";
var text4 ="Alle må benytte legepladserne. Der må dog ikke luftes hunde på legepladserne. Læs skiltene og husk at ryd op efter dig";
var text5 ="Du skal skrive til bestyrelsen via kontaktformularen på siden Kontakt os"

function FAQ() {


  //#region React hooks

  //#endregion

  //#region Functions

  //#endregion

  //#region Html code

  return (
    <Collapse defaultActiveKey={['0']} onChange={callback}>
    <Panel header="Parkering som beboer" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="Gæste parkering" key="2">
      <p>{text2}</p>
    </Panel>
    <Panel header="Affaldsortering" key="3">
      <p>{text3}</p>
    </Panel>
    <Panel header="Hvem må benytte legepladserne" key="4">
      <p>{text4}</p>
    </Panel>
    <Panel header="Hvor skal jeg melde hvis noget går i stykker" key="5">
      <p>{text5}</p>
    </Panel>
  </Collapse>
  );

  //#endregion

}

export default FAQ;