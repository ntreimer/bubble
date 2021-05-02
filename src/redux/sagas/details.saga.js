import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";

// worker Saga: will be fired on "FETCH_USER" actions
function* updateDetails(action) {
  try {
    console.log("in updateDetails with:", action.payload);
    yield axios.put("/api/details", action.payload);
    yield console.log("successfully updated notes");
  } catch (error) {
    console.log("details get request failed", error);
  }
}

function* deleteDetails(action) {
  try {
    console.log("in delete activity details with:", action.payload);
    yield axios.delete("/api/details", {data: action.payload});
    yield console.log("successfully deleted");
  } catch (error) {
    console.log("details delete request failed", error);
  }
}

function* detailsSaga() {
  yield takeEvery("UPDATE_DETAILS", updateDetails);
  yield takeEvery("DELETE_ACTIVITY", deleteDetails);
}

export default detailsSaga;
