import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import { Typography, Button } from "@material-ui/core";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

import CalendarPageActivity from '../CalendarPageActivity/CalendarPageActivity';

function CalendarPage(props) {
  const dispatch = useDispatch();
  const calendar = useSelector((store) => store.calendar);

  useEffect(() => {
    getCalendar();
  }, []);

  const [date, setDate] = useState("");
  const getCalendar = () => {
    dispatch({ type: "FETCH_CALENDAR" });
  };

  const showEvent = () => {

    let eventsToShow = [];
    if (calendar[0]) {
      for (let i = 0; i < calendar.length; i++) {
        if (
          moment(calendar[i].date).format("YYYY-MM-DD") ===
          moment(date).format("YYYY-MM-DD")
        ) {
          eventsToShow.push(calendar[i]);
        }
      }
    }

    if (eventsToShow !== []) {
      return eventsToShow.map((activity, index) => (
        <CalendarPageActivity activity={activity} key={index}/>
      ));
    } else {
      return <p>No events for this day.</p>;
    }
  };

  return (
    <div>
      <Typography variant="h2">Calendar</Typography>
      <Calendar onChange={setDate} />
      <br />
      {showEvent()}
    </div>
  );
}

export default CalendarPage;
