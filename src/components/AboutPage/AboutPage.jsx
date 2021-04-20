import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>
          Bubble is an app designed to generate activities for the user, to help
          alleviate the boredom and help them to plan their days.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
