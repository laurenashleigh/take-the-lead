import React from 'react';

import Calendar from '@ericz1803/react-google-calendar'

const API_KEY = "AIzaSyC88E3t79v8qCfI1XIffIQPbfDLStXn08Y";

let calendars = [
    {calendarId: "mbn1ve0oomloqsj4fafciacuao@group.calendar.google.com"}
  ];

const GoogleCalendar = () => {
    return (
        <>
            <Calendar apiKey={API_KEY} calendars={calendars}/>
        </>

    )
}

export default GoogleCalendar