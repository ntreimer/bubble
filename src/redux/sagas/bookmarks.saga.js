import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";


// worker Saga: will be fired on "FETCH_USER" actions
function* fetchBookmarks() {
  try {
    console.log("in fetchBookmarks:");
    const bookmarks = yield axios.get("/api/bookmarks");
    yield put({ type: "SET_BOOKMARKS", payload: bookmarks });
  } catch (error) {
    console.log("bookmarks get request failed", error);
  }
}

function* bookmarksSaga() {
  yield takeEvery("FETCH_BOOKMARKS", fetchBookmarks);
}

export default bookmarksSaga;
