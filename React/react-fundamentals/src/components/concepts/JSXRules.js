import React from "react";

const JSXRules = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1 className="section-title">JSX</h1>
        <dl>
          <dt>Resembles HTML</dt>
          <dd>It's not. It's actually closer to Javascript</dd>
          <dt>"React Elements"</dt>
          <dd>
            These are used to construct and update the DOM, or what you see on
            the screen.
          </dd>
          <dt>Not Required</dt>
          <dd>You can write in vanilla JS, but most sane people use JSX.</dd>
        </dl>
        <hr />
        <NormalComponent />
        <CreateElementComponent />
      </div>
    </div>
  );
};

export default JSXRules;

const NormalComponent = () => {
  return (
    <div style={{ border: "2px solid black" }}>
      {/* JSX inline CSS? */}
      <h1>Normal Functional Component</h1>
      <p>This was constructed with JSX in the return.</p>
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt="pic"
      ></img>
    </div>
  );
};

const CreateElementComponent = () => {
  return React.createElement(
    "div",
    { style: { border: "2px solid black" } },
    React.createElement("h1", null, "CreateElementComponent"),
    React.createElement(
      "p",
      null,
      "This was constructed with CreateElement calls in the return"
    ),
    React.createElement(
      "img",
      {
        src:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      },
      null
    )
  );
};
