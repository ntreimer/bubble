import axios from "axios";
import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

//

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

function ActivityPage() {
  const [activity, setActivity] = useState('');
  const [type, setType] = useState('');
  const [participants, setParticipants] = useState('');
  const [price, setPrice] = useState('');
  const objectToSend = {
    activity: activity,
    type: type,
    participants: participants,
    price: price
  }

  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = () => {
    axios
      .get("/api/bored")
      .then((res) => {
        console.log(res.data);
        convertActivity(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const convertActivity = (input) => {
    setActivity(input.activity);
    setType(input.type);
    setParticipants(input.participants);
    if (input.price === 0) {
      setPrice('yes')
    }
    else {
      setPrice('no')
    }
  }

  const saveActivity = () => {
    axios
      .post("/api/activity", objectToSend)
      .then((res) => {
        console.log(res);
        alert("POSTed activity");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="container">
      <div>
        <br />
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {activity}
            </Typography>
            <br/>
            <Typography variant="body2" component="p">
              Type: {type}
            </Typography>
            <Typography variant="body2" component="p">
              Participants: {participants}
            </Typography>
            <Typography variant="body2" component="p">
              Free: {price}
            </Typography>
          </CardContent>
        </Card>
        <br />
        <Button color="primary" variant="contained" onClick={getActivity}>
          Get Activity
        </Button>
        <Button color="primary" variant="contained" onClick={saveActivity}>
          Save Activity
        </Button>
      </div>
    </div>
  );
}

export default ActivityPage;
