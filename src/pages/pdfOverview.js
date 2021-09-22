//#region Import
import React from 'react'
import Card from '../components/card';
import {pdfObjectList} from '../objects/pdfObjects';
import { withRouter, Link } from "react-router-dom";

//#endregion

function pdfOverview() {
    //#region HTML code
    return ( 
        <div className="p-5" id="Main">
            <div className="row p-4">
                <div className="col-md-6">
                    <Link to="/doc/parkering">
                        <Card prop={pdfObjectList.pdfObjects[0]}></Card>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/doc/reglement">
                        <Card prop={pdfObjectList.pdfObjects[1]}></Card>
                    </Link>
                </div>
            </div>
            
            <div className="row p-4">
                <div className="col-md-6">
                    <Link to="/doc/plejebeskrivelse">
                        <Card prop={pdfObjectList.pdfObjects[2]}></Card>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/doc/resume">
                        <Card prop={pdfObjectList.pdfObjects[3]}></Card>
                    </Link>
                </div>
            </div>

            <div className="row p-4">
                <div className="col-md-6">
                    <Link to="/doc/vedtægter">
                        <Card prop={pdfObjectList.pdfObjects[4]}></Card>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/doc/budget">
                        <Card prop={pdfObjectList.pdfObjects[5]}></Card>
                    </Link>
                </div>
            </div>

            <div className="row p-4">
                <div className="col-md-12">
                    <Link to="/doc/udbudsmateriale">
                        <Card prop={pdfObjectList.pdfObjects[6]}></Card>
                    </Link>
                </div>
            </div>
        
        </div>
     );
     //#endregion
}

export default withRouter(pdfOverview);