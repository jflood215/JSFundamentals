import React, { useState } from "react";
import PropTypes from "prop-types";

const PropsDemo = () => {
  const [color, setColor] = useState("lightblue");
  const [backgroundColor, setbackgroundColor] = useState("purple");
  const [borderRadius, setborderRadius] = useState("5px");
  const [borderStyle, setborderStyle] = useState("dashed");
  const [display, setdisplay] = useState("inline-block");
  const [width, setwidth] = useState("350px");
  const [textAlign, settextAlign] = useState("center");

  //Object that will pass the styles off as a prop

  let styles = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    display: display,
    width: width,
    textAlign: textAlign,
  };

  const toggleColor = () => {
    color === "lightblue" ? setColor("pink") : setColor("lightblue");
  };

  const backColor = () => {
    backgroundColor === "white"
      ? setbackgroundColor("black")
      : setbackgroundColor("white");
  };

  const toggleBorderRadius = () => {
    borderRadius === "5px" ? setborderRadius("20px") : setborderRadius("5px");
  };

  const toggleBorderStyle = () => {
    borderStyle === "dashed"
      ? setborderStyle("double")
      : setborderStyle("dashed");
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <div style={styles}>
          <FunctionalComponent
            string="Color Toggle"
            function={toggleColor}
            selectedStyle={color}
          />
          <FunctionalComponent
            string="Background Color Toggle"
            function={backColor}
            selectedStyle={backgroundColor}
          />
          <FunctionalComponent
            string="Border Radius Toggle"
            function={toggleBorderRadius}
            selectedStyle={borderRadius}
          />
          <FunctionalComponent
            string="Border Style Toggle"
            function={toggleBorderStyle}
            selectedStyle={borderStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default PropsDemo;

// Child Component
const FunctionalComponent = (props) => {
  return (
    <div>
      <p>{props.string}</p>
      <button onClick={props.function}>Toggle Style!</button>
      <TinyComponent selectedStyle={props.selectedStyle} />
    </div>
  );
};

const TinyComponent = (props) => {
  return (
    <div>
      <p>The current style is: {props.selectedStyle}</p>
    </div>
  );
};

FunctionalComponent.defaultProps = {
  string: "This is wild!",
  function: () => console.log("Can I see this in my dev tools?"),
  selectedStyle: "what style??",
};

// Tell other developers what is required in the code, seen in dev tools

FunctionalComponent.propTypes = {
  string: PropTypes.string.isRequired,
  function: PropTypes.func.isRequired,
  selectedStyle: PropTypes.string.isRequired,
};
