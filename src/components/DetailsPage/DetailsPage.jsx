import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
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

function DetailsPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const details = useSelector((store) => store.details);
  const classes = useStyles();

  const [notes, setNotes] = useState("");
  const convertPrice = () => {
    if (details.price === 0) {
      return "yes";
    } else {
      return "no";
    }
  };

  const addNotes = () => {
    const objectToSend = {
      details: details,
      notes: notes,
    };
    dispatch({ type: "UPDATE_DETAILS", payload: objectToSend });
  };

  const removeActivity = () => {
      console.log('in deleteacitivty');
    dispatch({ type: 'DELETE_ACTIVITY', payload: details });
    history.push('/bookmarks');
  }

  return (
    <div>
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
      <TextField
        id="notes"
        multiline
        label="Notes"
        rows={4}
        variant="outlined"
        onChange={(event) => {
          setNotes(event.target.value);
        }}
      />
      <br />
      <br />
      <Button variant="outlined" color="secondary" onClick={removeActivity}>Remove Activity</Button>
      <Button variant="contained" color="primary" onClick={addNotes}>
        Update notes
      </Button>
    </div>
  );
}

export default DetailsPage;
