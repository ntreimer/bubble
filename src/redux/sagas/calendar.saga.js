import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";


// worker Saga: will be fired on "FETCH_USER" actions
function* fetchCalendar() {
  try {
    console.log("in fetchCalendar:");
    const calendar = yield axios.get("/api/calendar");

    yield put({ type: "SET_CALENDAR", payload: calendar.data });
  } catch (error) {
    console.log("calendar get request failed", error);
  }
}

function* calendarSaga() {
  yield takeEvery("FETCH_CALENDAR", fetchCalendar);
}

export default calendarSaga;
