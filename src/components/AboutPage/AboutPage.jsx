import axios from "axios";
import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  const getActivity = () => {
    axios.get('/api/bored').then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="container">
      <div>
        <p>
          Bubble is an app designed to generate activities for the user, to help
          alleviate the boredom and help them to plan their days.
        </p>
        <button onClick={getActivity}>get</button>
      </div>
    </div>
  );
}

export default AboutPage;
