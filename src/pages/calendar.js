import React from "react";
import { withRouter } from "react-router";
import CalendarComp from "../components/calendar";


function CalendarPage() {
    return (
        <CalendarComp/>
    )
}

export default withRouter(CalendarPage);