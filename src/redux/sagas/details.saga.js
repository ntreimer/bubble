import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";


// worker Saga: will be fired on "FETCH_USER" actions
function* fetchDetails() {
  try {
    console.log("in fetchDetails:");
    const details = yield axios.get("/api/details");
    yield put({ type: "SET_DETAILS", payload: details.data });
  } catch (error) {
    console.log("details get request failed", error);
  }
}

function* detailsSaga() {
  yield takeEvery("FETCH_DETAILS", fetchDetails);
}

export default detailsSaga;
