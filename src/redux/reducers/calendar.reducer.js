const calendarReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_ACTIVITY':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default calendarReducer;