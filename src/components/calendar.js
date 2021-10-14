import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import myevents from '../objects/events';
import '../styles/calendar.css';

const localizer = momentLocalizer(moment)

function CalendarComp(props) {

    return ( 
        <div>
        <Calendar
          className="calendar"
          localizer={localizer}
          events={myevents}
          views={['month', 'week', 'day', 'agenda']}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
     );
}

export default CalendarComp;