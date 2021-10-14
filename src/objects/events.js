import axios from "axios";

function getEvents() {
    var events = [];
    axios
        .get("https://gftrekronersydrestapi.azurewebsites.net/api/event")
        .then((response) => {
            events = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

        return events;
}

export default (getEvents);
//   {
//     id: 0,
//     title: 'All Day Event very long title',
//     allDay: false,
//     start: new Date(2021, 9, 14, 10,0,0),
//     end: new Date(2021, 9, 14, 14,0,0),
//   },
//   {
//     id: 1,
//     title: 'All Day Event',
//     start: new Date(2021, 9, 14, 10,0,0),
//     end: new Date(2021, 9, 15, 14,0,0),
//     allDay: false,
//   },
//   {
//     id: 2,
//     title: 'All Day Event',
//     start: new Date(2021, 9, 14, 10,0,0),
//     end: new Date(2021, 9, 15, 14,0,0),
//     allDay: false,
//   },
//   {
//     id: 3,
//     title: 'All Day Event',
//     start: new Date(2021, 9, 14, 10,0,0),
//     end: new Date(2021, 9, 15, 14,0,0),
//     allDay: false,
//   }