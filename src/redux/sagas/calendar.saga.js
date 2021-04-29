import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";


// worker Saga: will be fired on "FETCH_USER" actions
function* fetchCalendar() {
  try {
    console.log("in fetchActivity:");
    const activity = yield axios.get("/api/bored");

    yield put({ type: "SET_ACTIVITY", payload: activity.data });
  } catch (error) {
    console.log("bored get request failed", error);
  }
}

function* calendarSaga() {
  yield takeEvery("FETCH_CALENDAR", fetchCalendar);
}

export default calendarSaga;
