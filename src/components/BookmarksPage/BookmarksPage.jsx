import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import BookmarksPageItem from '../BookmarksPageItem/BookmarksPageItem';

function BookmarksPage(props) {
  const dispatch = useDispatch();
  const bookmarks = useSelector((store) => store.bookmarks);

  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = () => {
    dispatch({type: 'FETCH_BOOKMARKS'})
  }
  const showBookmarks = () => {
    if (bookmarks.map) {
      console.log('we can map!');
      return (bookmarks.map((bookmark, index) => <BookmarksPageItem bookmark={bookmark} key={index}/>));
    }
    else {
      return <h5>No bookmarks to show.</h5>;
    }
  }
  return (
    <div>
      <h2>Bookmarks</h2>
      {showBookmarks()}
    </div>
  );
}

export default BookmarksPage;