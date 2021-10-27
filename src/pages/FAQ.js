//#region Imports
import React from 'react';
import { Col, Row } from 'antd';

import '../styles/faq.css';

//#endregion

// const { Panel } = Collapse;

// function callback(key) {
//   console.log(key);
// }

// Tekst til FAQ
var text = "Se parkeringsregler under dokumenter";
var text2 = "GÆSTEPARKERINGS/DAGSKORT kort printes ud fra ejerforeningens hjemmeside til brug for gæster. Gæsteparkeringskortet skal påføres parkeringsdato, og kun én dato pr kort, og er gældende kun for denne dato. Gæsteparkeringskortene er gældende for parkering i områder med 30 minutters tidsbegrænset parkering . Dagskortet, der anvendes i Ahornlunden, er kun gældende på pladsen i Ahornlunden 1-9 plads nummer 3962. I Ahornlunden er det tilladt at parkere 1 time med korrekt indstillet P skive. Parkeringskortene administreres overordnet af Grundejerforeningen.";
var text3 = "Affaldssortering hører under de enkelte ejerforeninger. Du kan finde deres regler på deres hjemmesider. Der er links til disse på Ejerforeningerne siden.";
var text4 ="Alle må benytte legepladserne. Der må dog ikke luftes hunde på legepladserne. Læs skiltene og husk at ryd op efter dig";
var text5 ="Du skal skrive til bestyrelsen via kontaktformularen på siden Kontakt os"

function FAQ() {


  //#region React hooks

  //#endregion

  //#region Functions

  //#endregion

  //#region Html code

  return (
        <div className="faqWrapper">
          <div className="faqContainer">
            <Row type="flex" className="faqTop">
              <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                <div className="topLeft">
                  <div className="faqTextTopLeft">
                    <h1> Affaldssortering </h1>
                    <p> {text3} </p>
                  </div>
                </div>
              </Col>
              <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                <div className="topRight">
                  <div className="faqTextTopRight">
                    <h1> Gæste parkering </h1>
                    <p> {text2} </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row type="flex" className="faqBot">
              <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                <div className="botLeft">
                  <div className="faqTextBotLeft">
                    <h1> Parkering som beboer i området </h1>
                    <p> {text} </p>
                  </div>
                </div>
              </Col>
              <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                <div className="botMid">
                  <div className="faqTextBotMid">
                    <h1> Hvem må benytte legepladserne </h1>
                    <p> {text4} </p>
                  </div>
                </div>
              </Col>
              <Col xl={8} lg={8} md={24} sm={24} xs={24}>
                <div className="botRight">
                  <div className="faqTextBotRight">
                    <h1> Hvor skal jeg melde hvis noget går i stykker </h1>
                    <p> {text5} </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>


  //   <Collapse defaultActiveKey={['0']} onChange={callback}>
  //   <Panel header="Parkering som beboer" key="1">
  //     <p>{text}</p>
  //   </Panel>
  //   <Panel header="Gæste parkering" key="2">
  //     <p>{text2}</p>
  //   </Panel>
  //   <Panel header="Affaldsortering" key="3">
  //     <p>{text3}</p>
  //   </Panel>
  //   <Panel header="Hvem må benytte legepladserne" key="4">
  //     <p>{text4}</p>
  //   </Panel>
  //   <Panel header="Hvor skal jeg melde hvis noget går i stykker" key="5">
  //     <p>{text5}</p>
  //   </Panel>
  // </Collapse>
  );

  //#endregion

}

export default FAQ;