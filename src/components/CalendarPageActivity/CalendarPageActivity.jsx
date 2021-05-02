import {
  Button,
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

function CalendarPageActivity(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const thisActivity = props.activity;
  const classes = useStyles();

  const getDetails = () => {
    dispatch({ type: "SET_DETAILS", payload: thisActivity });
    history.push("/details");
  };
  const removeActivity = () => {
    dispatch({ type: 'CALENDAR_DELETE', payload: thisActivity});
    dispatch({ type: "FETCH_CALENDAR" });
  }
  return (
    <div>
      <Card className={classes.root}>
        <CardContent onClick={getDetails}>
          <Typography variant="h5" component="h2">
            {thisActivity.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={removeActivity}>Remove from Calendar</Button>
        </CardActions>
      </Card>
      <br />
    </div>
  );
}

export default CalendarPageActivity;
