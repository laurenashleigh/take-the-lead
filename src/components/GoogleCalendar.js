import React from 'react';

import Calendar from '@ericz1803/react-google-calendar'

const API_KEY = "AIzaSyAO2sQtePTISXP-5kDVNZ2r830KQUIak4g";

let calendars = [
    {calendarId: "n10aprm17di2oamle2m0irii0g@group.calendar.google.com"}
  ];

const GoogleCalendar = () => {
    return (
        <>
            <Calendar apiKey={API_KEY} calendars={calendars}/>
        </>

    )
}

export default GoogleCalendar