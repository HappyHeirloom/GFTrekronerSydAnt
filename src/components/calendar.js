import React, { Component } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import '../styles/calendar.css';

const localizer = momentLocalizer(moment)

var eventsies = [
    {
    id: 0,
    title: 'All Day Event very long title',
    allDay: false,
    start: new Date(2021, 9, 14, 10,0,0),
    end: new Date(2021, 9, 14, 14,0,0),
  },
  {
    id: 1,
    title: 'All Day Event',
    start: new Date(2021, 9, 14, 10,0,0),
    end: new Date(2021, 9, 15, 14,0,0),
    allDay: false,
  },
  {
    id: 2,
    title: 'All Day Event',
    start: new Date(2021, 9, 14, 10,0,0),
    end: new Date(2021, 9, 15, 14,0,0),
    allDay: false,
  },
  {
    id: 3,
    title: 'All Day Event',
    start: new Date(2021, 9, 14, 10,0,0),
    end: new Date(2021, 9, 15, 14,0,0),
    allDay: false,
  }
]

class CalendarComp extends Component {
  constructor(props) {
    super(props)
    this.state = { events: [] }
  }

  componentDidMount(){
    axios
      .get("https://gftrekronersydrestapi.azurewebsites.net/api/event")
      .then((response) => {
        response.data.forEach(element => {
          var obj = {};
          var ADS = []; // ArrayDateStart
          var ADE = []; // ArrayDateEnd
          var startDate;
          var endDate;
          ADS = element.start.split(",").map(Number);
          ADE = element.end.split(",").map(Number);
          startDate = new Date(ADS[0], ADS[1], ADS[2], ADS[3], ADS[4], ADS[5],);
          endDate = new Date(ADE[0], ADE[1], ADE[2], ADE[3], ADE[4], ADE[5],);
          obj.id = element.id;
          obj.title = element.title;
          obj.allDay = element.allDay;
          obj.start = startDate;
          obj.end = endDate;
          this.state.events.push(obj);
        });
      })
      .catch(function (error) {
          console.log(error);
      });
  }

  render() {
    return (
        <Calendar
        className="calendar"
        localizer={localizer}
        events={this.state.events}
        views={['month', 'week', 'day', 'agenda']}
        startAccessor="start"
        endAccessor="end"
      />
    )
  }
}

export default CalendarComp