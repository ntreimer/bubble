import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

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
  const history = useHistory();
  const thisBookmark = props.bookmark;
  const classes = useStyles();

  const convertPrice = () => {
    if (thisBookmark.price === 0) {
      return "yes";
    } else {
      return "no";
    }
  };
  const getDetails = () => {
    dispatch({type: 'SET_DETAILS', payload: thisBookmark});
    history.push('/details')
  }
  return (
    <div>
      <Card className={classes.root} onClick={getDetails}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {thisBookmark.description}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Type: {thisBookmark.type}
          </Typography>
        </CardContent>
      </Card>
      <br />
    </div>
  );
}

export default BookmarksPageItem;
