import React, { useState } from "react";
import Navbar from "./component/navbar";
import TextArea from "./component/textArea";
import About from "./component/About";
// import Alert from "./component/Alert";
// import Cal from "./cal";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    const [mode, setmode] = useState("light");

    const [alert, setAlert] = useState(!null);

    const showAlert = (message, types) => {
      setAlert({
        msg: message,
        type: types,
      });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    };
    const toggleMode = () => {
      if (mode === `light`) {
        setmode(`dark`);
        document.body.style.backgroundColor = `#000000`;
        showAlert("Dark mode enable!", "Success : ");
      } else {
        setmode(`light`);
        document.body.style.backgroundColor = `white`;
        showAlert("Light mode enable!", "Success : ");
      }
    };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        {/* <Alert alert={alert} /> */}
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextArea
                  showAlert={showAlert}
                  heading="Enter text"
                  mode={mode}
                />
              }
            />
            {/* <Route exact path="/cal" element={<Cal mode={mode} />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
