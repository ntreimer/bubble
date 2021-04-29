import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function BookmarksPageItem(props) {
  const dispatch = useDispatch();
  const thisBookmark = props.bookmark;

  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = () => {
    dispatch({type: 'FETCH_BOOKMARKS'})
  }

  return (
    <div>
      <h2>Bookmark Item:</h2>
      <h4>{JSON.stringify(thisBookmark)}</h4>
    </div>
  );
}

export default BookmarksPageItem;