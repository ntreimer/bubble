import axios from "axios";
import { func } from "prop-types";
import { put, takeLatest, takeEvery } from "redux-saga/effects";


function* calendarDelete(action) {
  yield axios.delete('/api/calendar', {data: action.payload})
}

function* fetchCalendar() {
  try {
    const calendar = yield axios.get("/api/calendar");
    yield put({ type: "SET_CALENDAR", payload: calendar.data });
  } catch (error) {
    console.log("calendar get request failed", error);
  }
}

function* calendarSaga() {
  yield takeEvery("FETCH_CALENDAR", fetchCalendar);
  yield takeEvery('CALENDAR_DELETE', calendarDelete)
}

export default calendarSaga;
