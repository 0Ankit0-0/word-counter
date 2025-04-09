import React, { useState } from "react";

export default function TextArea(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase");
  };
  const handleClick = () => {
    console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase");
  };
  const handleclearClick = () => {
    console.log("ClearTextt was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text area cleared");
  };
  const handlecopyClick = () => {
    console.log("Copy was clicked" + text);
    var text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  // const handlepasteClick = () => {
  //   /* not working*/
  //   console.log("Paste was clicked" + text);
  //   var text = document.getElementById("box");
  //   console.log(text);
  // };
  const handlespeakClick = () => {
    console.log("speak was clicked" + text);
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleOnClick = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        <div className="container  mx-2 my-2 my-3 ">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control mx-1"
              value={text}
              onChange={handleOnClick}
              style={{
                backgroundColor: props.mode === `dark` ? `black` : `white`,
                color: props.mode === `dark` ? `white` : `black`,
              }}
              id="box"
              rows="8"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary  mx-2 my-2"
            onClick={handleUpClick}
          >
            Convert to upperCase
          </button>
          <button
            type="button"
            className="btn btn-outline-primary  mx-2 my-2"
            id="lower"
            align="left"
            onClick={handleClick}
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            className="btn btn-outline-primary  mx-2 my-2"
            id="lower"
            onClick={handleclearClick}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-outline-primary  mx-2 my-2"
            id="lower"
            onClick={handlecopyClick}
          >
            Copy Text
          </button>
          {/* <button
            type="button"
            className="btn btn-outline-primary  mx-2 my-2"
            id="lower"
            onClick={handlepasteClick}
          >
            Paste Text
          </button> */}
          <button
            type="button"
            className="btn btn-outline-primary  mx-2 my-2"
            id="lower"
            onClick={handlespeakClick}
          >
            Read Text
          </button>
        </div>
        <div className="container my-3">
          <h1>Your text summary</h1>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <h2>Preview</h2>
          <div className="container">
            <p>{text.length > 0 ? text : "Enter your above to preview"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
