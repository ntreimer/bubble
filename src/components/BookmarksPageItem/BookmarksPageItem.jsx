import { Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function BookmarksPageItem(props) {
  const dispatch = useDispatch();
  const thisBookmark = props.bookmark;
  const classes = useStyles();
  useEffect(() => {
    getBookmarks();
  }, []);

  const getBookmarks = () => {
    dispatch({ type: "FETCH_BOOKMARKS" });
  };

  const convertPrice = () => {
    if (thisBookmark.price === 0) {
      return "yes";
    } else {
      return "no";
    }
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {thisBookmark.description}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Type: {thisBookmark.type}
          </Typography>
          <Typography variant="body2" component="p">
            Participants: {thisBookmark.participants}
          </Typography>
          <Typography variant="body2" component="p">
            Free: {convertPrice()}
          </Typography>
        </CardContent>
        <CardActions>
          <a target="_blank" href={thisBookmark.link}>
            {thisBookmark.link}
          </a>
        </CardActions>
      </Card>
      <br />
    </div>
  );
}

export default BookmarksPageItem;
