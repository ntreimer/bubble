import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function BookmarksPage(props) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((store) => store.bookmarks);

  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = () => {
    dispatch({type: 'FETCH_BOOKMARKS'})
  }

  return (
    <div>
      <h2>Bookmarks</h2>
      <h4>{JSON.stringify(bookmarks)}</h4>
    </div>
  );
}

export default BookmarksPage;