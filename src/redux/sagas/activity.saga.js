import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";

function* bookmarkActivity(action) {
    try {
      yield axios.post('/api/activity/bookmark', action.payload);
        yield console.log('successfully added');
    } catch (error) {
      console.log('bookmark POST failed', error);
    }
  }

function* calendarActivity(action) {
  try {
    console.log('in calendarActivity:', action.payload);
    yield axios.post('/api/activity/calendar', action.payload);
  } catch (error) {
    console.log('bored get request failed', error);
  }
}

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchActivity() {
    try {
      console.log('in fetchActivity:');
      const activity = yield axios.get('/api/bored');
  
      yield put ({type: 'SET_ACTIVITY', payload: activity.data})
    } catch (error) {
      console.log('bored get request failed', error);
    }
  }

function* activitySaga() {
  yield takeEvery('FETCH_ACTIVITY', fetchActivity);
  yield takeEvery('BOOKMARK_ACTIVITY', bookmarkActivity);
  yield takeEvery('CALENDAR_ACTIVITY', calendarActivity);
}

export default activitySaga;
