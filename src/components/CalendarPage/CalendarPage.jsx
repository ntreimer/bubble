import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Calendar from 'react-calendar';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function CalendarPage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [date, setDate] = useState('');
  const string = 'this is a string';
  const newString = string.slice(0, 5)
  const truncateDate = () => {
    // const short = date.slice(0, 8)
    // return short;
  }
  let shortDate = truncateDate();
  return (
    <div>
      <h2>Calendar</h2>
      <Calendar onChange={setDate}/>
      <h4>{newString}</h4>
    </div>
  );
}

export default CalendarPage;
