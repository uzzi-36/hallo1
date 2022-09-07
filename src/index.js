import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <div>
      <h1>Uzair Khan</h1>
      <h3 className="H1">CV Highlights</h3>
      <ul>
        <li>
          Currently going through CS253 – Web Application Engineering and CS61A
          – Structure & Interpretation of Computer Programs
        </li>
        <li>Learnt basic Python, JavaScript, HTML, CSS on Codecademy.com.</li>
        <li>
          An independent, dedicated, efficient person. These attributes are
          proved through the series of courses I have taken or I am taking as of
          now independently through online platforms.
        </li>
        <li>
          Good Communication Skills, Presentation Skills, attitude towards
          leadership, authorisation and delegation, conflict resolution and
          negotiation and a very good team worker.
        </li>
      </ul>
      
      <h2>Professional Experience</h2>
      
      <h3 className="H2">Programming Skills</h3>
      <p>HTML, CSS,JavaScript, learning "React Native"</p>
      <h3>Sales Agent</h3>
      <li>Worked as a sales agent in a foriegn Insurance company</li>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
