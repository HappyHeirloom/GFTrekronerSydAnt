//#region Imports
import React from "react";
import Card from "../components/card";
import { managagementObjectList } from "../objects/managementObject";
import { withRouter, Link } from "react-router-dom";

//#endregion

function managementOverview() {
  //#region HTML code
  return (
    <div className="" id="Main">
      <div className="">
        <div className="">
          <Link to="#">
            {/* <Card prop={managagementObjectList.managementObjects[0]}></Card> */}
            <Card>
              <Meta title="prop.title" description="prop.description"></Meta>
            </Card>
          </Link>
        </div>
        <div className="">
          <Link to="#">
            <Card prop={managagementObjectList.managementObjects[1]}></Card>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="">
          <Link to="#">
            <Card prop={managagementObjectList.managementObjects[2]}></Card>
          </Link>
        </div>
        <div className="">
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
