import React from "react";
import "./css/Work.scss";
import Worklist from "./Worklist";

function Work() {
  return (
    <div className="work">
      <p className="wtxt">
        We know how to get the job done from visionary brainstorming through
        post-production. Our streamlined techniques and certified experts ensure
        that our clients receive personalized experience every time. Have a
        glance at our work portfolio.
      </p>
      <Worklist />
    </div>
  );
}

export default Work;
