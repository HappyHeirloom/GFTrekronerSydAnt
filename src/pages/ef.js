//#region Imports
import React from "react";
import Card from "../components/card";
import { efObjectList } from "../objects/efObjects";
import { withRouter} from "react-router-dom";

//#endregion

function efOverview() {
  //#region HTML code
  return (
    <div className="p-5" id="Main">
      <div className="row p-4">
        <div className="col-md-6">
          <a target="_blank" rel="noreferrer" href="http://ahornlunden.dk/" >
            <Card prop={efObjectList.efObjects[0]}></Card>
          </a>
        </div>
        <div className="col-md-6">
          <a target="_blank" rel="noreferrer" href="" >
            <Card prop={efObjectList.efObjects[1]}></Card>
          </a>
        </div>
      </div>
      <div className="row p-4">
        <div className="col-md-6">
          <a target="_blank" rel="noreferrer" href="" >
            <Card prop={efObjectList.efObjects[2]}></Card>
          </a>
        </div>
        <div className="col-md-6">
          <a target="_blank" rel="noreferrer" href="" >
            <Card prop={efObjectList.efObjects[3]}></Card>
          </a>
        </div>
      </div>
   <div className="row p-4">
        <div className="col-md-6">
          <a target="_blank" rel="noreferrer" href="https://akf-holding.dk/udviklingsprojekter/akacielunden-1-7-4000-roskilde/" >
            <Card prop={efObjectList.efObjects[4]}></Card>
          </a>
        </div>
        <div className="col-md-6">
          <a target="_blank" rel="noreferrer" href="http://www.poppellunden.dk/" >
            <Card prop={efObjectList.efObjects[5]}></Card>
          </a>
        </div>
      </div>
      <div className="row p-4">
        <div className="col-md-6">
          <a target="_blank" rel="noreferrer" href="https://propstep.com/da/property/paerelunden/" >
            <Card prop={efObjectList.efObjects[6]}></Card>
          </a>
        </div>
        <div className="col-md-6">
          <a target="_blank" rel="noreferrer" href="https://trekronerbutikscenter.dk" >
            <Card prop={efObjectList.efObjects[7]}></Card>
          </a>
        </div>
      </div>
      <div className="row p-4">
        <div className="col-md-6">
          <a target="_blank" rel="noreferrer" href="https://trekronerbutikscenter.dk" >
            <Card prop={efObjectList.efObjects[8]}></Card>
          </a>
        </div>
        <div className="col-md-6">
          <a target="_blank" rel="noreferrer" href="https://trekronerbutikscenter.dk" >
            <Card prop={efObjectList.efObjects[9]}></Card>
          </a>
        </div>
      </div>

    </div>
  );
  //#endregion
}

export default withRouter(efOverview);
