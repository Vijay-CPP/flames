import "./App.css";
import React, { useEffect, useState } from "react";
import { resultLetter } from "./utility.js";
import { resultObj } from "./letterMap.js";
import Header from "./components/Header.jsx";
import InputElement from "./components/InputElement.jsx";
import Intro from "./components/Intro.jsx";
import Footer from "./components/Footer.jsx";
import Result from "./components/Result.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  useEffect(() => {
    // Function to send POST request to the server
    const logToServer = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_LOG_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify({ message: "Logging message here" }), // Adjust as needed
        });

        // if (!response.ok) {
        //   throw new Error("Failed to log to server");
        // }
      } catch (error) {
        // console.error("Error logging to server:", error);
      }
    };

    // Call the function to log to the server
    logToServer();
  }, []);

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState({});

  const calculateFLAMES = (e) => {
    e.preventDefault();
    const letter = resultLetter(name1, name2);
    setResult(resultObj[letter]);
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  function clean() {
    setName1("");
    setName2("");
    setResult("");
  }

  const [show, setShow] = useState(false);

  return (
    <div className="app-bg h-screen">
      <Header clean={clean} />
      {Object.keys(result).length == 0 ? (
        <>
          <InputElement
            name1={name1}
            name2={name2}
            setName1={setName1}
            setName2={setName2}
            calculateFLAMES={calculateFLAMES}
          />
          <Intro />
          <Footer />
        </>
      ) : (
        <>
          {show && <Loader />}
          {!show && (
            <Result data={result} name1={name1} name2={name2} clean={clean} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
