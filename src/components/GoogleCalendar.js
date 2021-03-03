import React from 'react';


const GoogleCalendar = () => {
    return (
        <>
            {/* <Calendar apiKey={API_KEY} calendars={calendars}/> */}
            <iframe title="calendar" src="https://calendar.google.com/calendar/embed?src=n10aprm17di2oamle2m0irii0g%40group.calendar.google.com&ctz=Europe%2FLondon"  width="100%" height="800" frameborder="0" scrolling="no"></iframe>
        </>

    )
}

export default GoogleCalendar