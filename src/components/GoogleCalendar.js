import React from 'react';


const GoogleCalendar = () => {
    return (
        <>
            {/* <Calendar apiKey={API_KEY} calendars={calendars}/> */}
            <iframe title="calendar" id="calendar" src="https://calendar.google.com/calendar/embed?src=mbn1ve0oomloqsj4fafciacuao%40group.calendar.google.com&ctz=Europe%2FLondon"  width="100%" height="800" frameborder="0" scrolling="no"></iframe>
        </>

    )
}

export default GoogleCalendar