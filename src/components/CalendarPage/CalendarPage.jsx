import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar";
import { Typography, Button } from "@material-ui/core";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

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
    console.log("in showEvent date:", date);
    console.log("in showEvent calendar:", calendar);

    let eventsToShow = [];
    if (calendar[0]) {
      for (let i = 0; i < calendar.length; i++) {
        if (
          moment(calendar[i].date).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD")
        ) {
          eventsToShow.push(calendar[i].description);
        }
      }
    }

    if (eventsToShow !== []) {
      return eventsToShow.map((activity, index) => (
        <p key={index}>{activity}</p>
      ));
    } else {
      return <p>No events for this day.</p>;
    }
  };

  return (
    <div>

      <Typography variant="h2">Calendar</Typography>
      <Calendar onChange={setDate} />
      <br/>
      {showEvent()}
    </div>
  );
}

export default CalendarPage;
