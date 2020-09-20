import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>React Resources</h1>
        <p>
          Below are some of the resources that we used throughout this app.
          Note: You'll have one challenge where you will be asked to make this
          page better.
        </p>
        <ul>
          <li>The Official Docs</li>
          <li>React Router Dome</li>
          <li>
            Stephen Grider's Udemy Course for the Udemy API. He's all over the
            place.
          </li>
          <li>Samer Buna's Pluralsight Course for the Github API Starter</li>
          <li>The Moviee App</li>
          <li>
            Font Awesome for React:{" "}
            <Link to="https://gorangajic.github.io/react-icons/fa.html">
              Click Here
            </Link>
          </li>
          <li>
            Bitcoin:{" "}
            <Link to="https://github.com/bmorelli25/interactive-bitcoin-price-chart">
              Click Here
            </Link>
          </li>
          <li>
            Google Maps:{" "}
            <Link to="https://github.com/mthorry/earthquakes-mapper">
              Click Here
            </Link>
          </li>
          <li>
            https://ssetem.gitbooks.io/searchkit/docs/setup/project-setup.html
          </li>
          <li>
            https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp
          </li>
          <li>
            https://neptunian.github.io/react-photo-gallery/examples/basic.html
          </li>
          <li>https://github.com/ngokevin/aframe-react-boilerplate</li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
