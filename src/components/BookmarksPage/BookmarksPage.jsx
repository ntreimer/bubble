import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';


function BookmarksPage(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = () => {
    dispatch({type: 'FETCH_BOOMARKS'})
  }

  return (
    <div>
      <h2>Bookmarks</h2>
    </div>
  );
}

export default BookmarksPage;