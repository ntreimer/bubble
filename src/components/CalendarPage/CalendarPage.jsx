import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Calendar from 'react-calendar';
import { Typography, Button } from '@material-ui/core';


function CalendarPage(props) {

  const dispatch = useDispatch();
  const calendar = useSelector((store) => store.calendar);

  useEffect(() => {
    getCalendar();
  }, []);

  const [date, setDate] = useState('');
  const string = 'this is a string';
  const newString = string.slice(0, 5)
  const getCalendar = () => {
    dispatch({type: 'FETCH_CALENDAR'})
  }

  return (
    <div>
      <h2>Calendar</h2>
      <Calendar onChange={setDate}/>
      <h4>{newString}</h4>
      <Button onClick={() => {console.log(calendar);}}>get date</Button>
    </div>
  );
}

export default CalendarPage;
