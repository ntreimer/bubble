const calendarReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CALENDAR':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default calendarReducer;