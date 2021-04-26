import axios from "axios";
import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function ActivityPage() {
  const [activity, setActivity] = useState("");
  const [object, setObject] = useState({});

  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = () => {
    axios
      .get("/api/bored")
      .then((res) => {
        console.log(res.data);
        setActivity(res.data.activity);
        setObject(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveActivity = () => {
    axios
      .post("/api/activity", object)
      .then((res) => {
        console.log(res);
        alert("POSTed activity");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div>
        <Typography variant="h4">Activity here:</Typography>
        <br />
        <Typography variant="h5">{activity}</Typography>
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
