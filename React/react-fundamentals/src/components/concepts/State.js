import React, { useState, Fragment } from "react";

const State = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <ul>
          <dt>useState is unique to Functional Components</dt>
          <dd>
            Class components have a separate means of using and changing state.
          </dd>
          <dt>useState uses Array Destructuring</dt>
          <dd>useState provides a state variable and a setState function</dd>
          <dt>Is a Hook</dt>
          <dd>useState is a hook baked into React</dd>
          <dt>Triggers Re-render</dt>
          <dd>
            Like with props changes, changing the state of a component
            re-renders the whole component.
          </dd>
        </ul>
        <StateExample />
      </div>
    </div>
  );
};

function StateExample() {
  const [text, setText] = useState("");
  const [likeNum, setLikeNum] = useState(0);
  const [textColor, setTextColor] = useState("blue");
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <img
        style={{ width: "100px", height: "100px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"
        alt="Thumbs up"
        onClick={(e) => setLikeNum(likeNum + 1)}
      />
      <span>{likeNum}</span>
      <br />
      <p
        style={{ color: textColor }}
        onMouseEnter={(e) => setTextColor("red")}
        onMouseLeave={(e) => setTextColor("blue")}
      >
        useState Challenge - Blue to Red
      </p>
    </div>
  );
}

export default State;
