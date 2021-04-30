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
  
  function DetailsPage(props) {
    const dispatch = useDispatch();
    const details = useSelector((store) => store.details);
    const classes = useStyles();
    const convertPrice = () => {
      if (details.price === 0) {
        return "yes";
      } else {
        return "no";
      }
    };
  
    return (
      <div>
          <h2>details</h2>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {details.description}
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              Type: {details.type}
            </Typography>
            <Typography variant="body2" component="p">
              Participants: {details.participants}
            </Typography>
            <Typography variant="body2" component="p">
              Free: {convertPrice()}
            </Typography>
          </CardContent>
          <CardActions>
            <a target="_blank" href={details.link}>
              {details.link}
            </a>
          </CardActions>
        </Card>
        <br />
      </div>
    );
  }
  
  export default DetailsPage;
  