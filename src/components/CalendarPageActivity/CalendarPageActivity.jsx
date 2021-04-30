import {
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
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

function CalendarPageActivity(props) {

  const dispatch = useDispatch();
  const thisActivity = props.activity;
  const classes = useStyles();




  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {thisActivity.description}
          </Typography>
        </CardContent>
      </Card>
      <br />
    </div>
  );
}

export default CalendarPageActivity;
