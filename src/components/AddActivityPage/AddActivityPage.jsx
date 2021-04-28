import axios from "axios";
import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useDispatch, useSelector } from "react-redux";

//
import RefreshIcon from "@material-ui/icons/Refresh";
import StarsIcon from "@material-ui/icons/Stars";
import TextField from "@material-ui/core/TextField";

//
import { useHistory } from "react-router";
import { HashRouter, Link } from "react-router-dom";

//

const useStyles = makeStyles((theme) => ({
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
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function AddActivityPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [date, setDate] = useState('')
  const activity = useSelector((store) => store.activity);

  const convertPrice = () => {
    if (activity.price === 0) {
      return "yes";
    } else {
      return "no";
    }
  };
  const updateDate = (event) => {
      setDate(event.target.value)
  }
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const saveActivity = () => {
    dispatch({ type: "SAVE_ACTIVITY", payload: objectToSend });
  };

  const classes = useStyles();

  return (
    <div className="container">
      <div>
        <br />
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {activity.activity}
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              Type: {activity.type}
            </Typography>
            <Typography variant="body2" component="p">
              Participants: {activity.participants}
            </Typography>
            <Typography variant="body2" component="p">
              Free: {convertPrice()}
            </Typography>
          </CardContent>
          <CardActions>
            <a target="_blank" href={activity.link}>
              {activity.link}
            </a>
          </CardActions>
        </Card>
        <br />
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            className={classes.textField}
            onChange={updateDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Button onClick={() => {console.log(date);}}>get date</Button>
        <br />
        <Button
          color="secondary"
          variant="contained"
          startIcon={<RefreshIcon />}
        >
          New Activity
        </Button>
        <Button
          color="primary"
          variant="contained"
          startIcon={<StarsIcon />}
          onClick={saveActivity}
        >
          Add Activity
        </Button>
      </div>
    </div>
  );
}

export default AddActivityPage;
