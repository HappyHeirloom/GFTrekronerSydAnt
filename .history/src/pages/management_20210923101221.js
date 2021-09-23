//#region Imports
import React from "react";
import Card from "../components/card";
import { managagementObjectList } from "../objects/managementObject";
import { withRouter, Link } from "react-router-dom";

//#endregion

function managementOverview() {
  //#region HTML code
  return (
    <div className="p-5" id="Main">
      <div className="row p-4">
        <div className="col-md-6">
          <Link to="#">
            <Card prop={managagementObjectList.managementObjects[0]}></Card>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="#">
            <Card prop={managagementObjectList.managementObjects[1]}></Card>
          </Link>
        </div>
      </div>
      <div className="row p-4">
        <div className="col-md-6">
          <Link to="#">
            <Card prop={managagementObjectList.managementObjects[2]}></Card>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="#">
            <Card prop={managagementObjectList.managementObjects[3]}></Card>
          </Link>
        </div>
      </div>
    </div>
  );
  //#endregion
}

export default withRouter(managementOverview);
