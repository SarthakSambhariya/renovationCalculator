import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import room from "../../../images/room bed 1.png";

function getScreenWidth() {
  const { innerWidth: width } = window;
  return width;
}
const CeilingDetail = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  const wardrobesRef = useRef();
  const tvUnitsRef = useRef();
  useEffect(() => {
    function handleResize() {
      setScreenWidth(getScreenWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const saveInputsToLocalStorageHandler = () => {
    localStorage.setItem("wardrobes", wardrobesRef.current.value);
    localStorage.setItem("tvUnits", tvUnitsRef.current.value);
  };

  const hrStyleProgress = {
    height: "480px",
    width: "15px",
    borderRadius: "8px",
    background: "#404898",
    marginTop: "1px",
  };
  const areasInputMob = {
    position: "relative",
    display: "inline-block",
    borderRadius: "10px 0 0 10px",
    border: "1px solid gray",
    outline: "none",
    width: "80%",
    height: "30px",
    textAlign: "center",
  };
  const textClass = {
    fontFamily: "DM Serif Display",
    color: "#000000",
    width: "auto",
    height: "66px",
    fontWeight: "500",
    fontSize: "50px",
    marginTop: "20px",
  };
  const textClassMob = {
    fontFamily: "DM Serif Display",
    color: "#000000",
    width: "auto",
    height: "66px",
    fontWeight: "500",
    fontSize: "35px",
    marginTop: "20px",
  };

  const propertyText = {
    color: "#3D3D3D",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "24px",
    marginTop: "25px",
  };
  const box = {
    position: "absoulate",
    marginTop: "25px",
  };
  const areasInput = {
    position: "relative",
    display: "inline-block",
    borderRadius: "10px 0 0 10px",
    border: "1px solid gray",
    outline: "none",
    width: "100px",
    height: "30px",
    textAlign: "center",
  };
  const areasButton = {
    display: "inline-block",
    position: "relative",
    borderRadius: "0 10px 10px 0",
    width: "20%",
    border: "1px solid gray",
    outline: "none",
    height: "30px",
    textAlign: "center",
    borderLeft: "1px solid gray",
  };
  const startBtn = {
    background: "linear-gradient(180deg, #3B5998 0%, #082B76 100%)",
    borderRadius: "6px",
    color: "white",
    border: "none",
    marginTop: "15px",
    padding: "8px 20px",
    fontSize: "15px",
    textAlign: "center",
  };
  const backBtn = {
    background: "white",
    borderRadius: "6px",
    color: "#2E337F",
    border: "2px solid #2E337F",
    marginTop: "15px",
    padding: "8px 20px",
    fontSize: "15px",
    textAlign: "center",
    fontWeight: "600",
  };
  const hrStyle = {
    height: "480px",
    width: "15px",
    borderRadius: "8px",
    background: "#F1F1F1",
    marginTop: "19px",
  };
  const stepOne = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "24px",
    marginTop: "95px",
  };
  const stepTwo = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "24px",
    marginTop: "80px",
  };
  const stepThree = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "24px",
    marginTop: "80px",
  };
  const stepText = {
    color: "#2E337F",
    fontFamily: "Inter",
    fontSize: "22px",
  };
  const hrStyleMobProgress = {
    height: "10px",
    width: "100%",
    borderRadius: "8px",
    background: "#404898",
    marginTop: "1px",
  };
  const hrStyleMob = {
    height: "10px",
    width: "auto",
    borderRadius: "8px",
    background: "#F1F1F1",
    marginTop: "0px",
    // transform: "rotate(-90deg)",
  };
  const stepOneMob = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "16px",
    marginTop: "0px",
  };
  const stepTwoMob = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "16px",
    marginRight: "0px",
  };
  const stepThreeMob = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "16px",
    marginTop: "0px",
  };
  const stepTextMob = {
    color: "#2E337F",
    fontFamily: "Inter",
    fontSize: "14px",
  };
  const calculatorImage = {
    height: "446px",
    width: "435px",
  };
  const calculatorImageMob = {
    height: "410px",
    width: "435px",
  };
  const formText = {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "15px",
    color: "#3D3D3D",
    marginTop: "25px",
    marginBottom: "8px",
  };
  return (
    <React.Fragment>
      {screenWidth > 600 && (
        <div className="container mt-5">
          <h1 style={textClass}>Renovation Calculator</h1>
          <div className="row mt-3">
            <div className="col-md-9 shadow rounded">
              <div className="row">
                <div className="col-md-6">
                  <h4 style={propertyText}>Modular Solutions</h4>
                  <p style={formText}>Do you need a Modular Kitchen ?</p>
                  <div className="d-flex">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onClick={() => {
                          localStorage.setItem("modularKitchenNeeded", true);
                        }}
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check ms-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                        onClick={() => {
                          localStorage.setItem("modularKitchenNeeded", false);
                        }}
                      >
                        No
                      </label>
                    </div>
                  </div>
                  <p style={formText}>
                    In how many Bedrooms do you need Wardrobes ?
                  </p>
                  <div style={box}>
                    <input style={areasInput} disabled placeholder="Bedroom" />
                    <input
                      type="number"
                      style={areasButton}
                      ref={wardrobesRef}
                    />
                  </div>
                  <p style={formText}>How many TV Units do you require ?</p>
                  <div style={box}>
                    <input style={areasInput} disabled placeholder="TV Units" />
                    <input type="number" style={areasButton} ref={tvUnitsRef} />
                  </div>
                </div>
                <div className="col-md-6">
                  <img
                    src={room}
                    alt=""
                    className="img-fluid mt-3 mb-3"
                    style={calculatorImage}
                  />
                </div>
                <div className="d-flex justify-content-between ps-5 pe-5 mb-3">
                  <Link to="/ceiling">
                    <button type="button" style={backBtn}>
                      Back
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      style={startBtn}
                      onClick={saveInputsToLocalStorageHandler}
                    >
                      Next
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-evenly  ms-5">
                <div style={hrStyle}>
                  <div style={hrStyleProgress}></div>
                </div>
                <div>
                  <h3 style={stepOne}>Step 1</h3>
                  <h3 style={stepText}>Property Details</h3>
                  <h3 style={stepTwo}>Step 2</h3>
                  <h3 style={stepText}>Task/Work</h3>
                  <h3 style={stepThree}>Step 3</h3>
                  <h3 style={stepText}>Modular Solutions</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {screenWidth < 600 && (
        <div className="container mt-5">
          <h1 style={textClassMob}>Renovation Calculator</h1>
          <div className="row mt-3">
            <div className="col-md-3 mb-4">
              <div
                className=""
                style={{
                  margin: "auto",
                  height: "auto",
                  width: "auto",
                }}
              >
                <div className="d-flex align-items-start justify-content-evenly ms-4 mb-2">
                  <div>
                    <h3 style={stepOneMob}>Step 1</h3>
                    <h3 style={stepTextMob}>Property Details</h3>
                  </div>
                  <div style={{ marginLeft: "10%" }}>
                    <h3 style={stepTwoMob}>Step 2</h3>
                    <h3 style={stepTextMob}>Task/Work</h3>
                  </div>
                  <div style={{ marginLeft: "20%" }}>
                    <h3 style={stepThreeMob}>Step 3</h3>
                    <h3 style={stepTextMob}>Modular Solutions</h3>
                  </div>
                </div>
                <div style={hrStyleMob}>
                  <div style={hrStyleMobProgress}></div>
                </div>
              </div>
            </div>
            <div className="col-md-9 shadow rounded  mb-4">
              <div className="row">
                <div className="col-md-6">
                  <h4 style={propertyText}>Modular Solutions</h4>
                  <p style={formText}>Do you need a Modular Kitchen ?</p>
                  <div className="d-flex">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onClick={() => {
                          localStorage.setItem("modularKitchenNeeded", true);
                        }}
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check ms-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onClick={() => {
                          localStorage.setItem("modularKitchenNeeded", false);
                        }}
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        No
                      </label>
                    </div>
                  </div>
                  <p style={formText}>
                    In how many Bedrooms do you need Wardrobes ?
                  </p>
                  <div style={box}>
                    <input
                      style={areasInputMob}
                      disabled
                      placeholder="Bedroom"
                    />
                    <input
                      type="number"
                      style={areasButton}
                      ref={wardrobesRef}
                    />
                  </div>
                  <p style={formText}>How many TV Units do you require ?</p>
                  <div style={box}>
                    <input
                      style={areasInputMob}
                      disabled
                      placeholder="TV Units "
                    />
                    <input type="number" style={areasButton} ref={tvUnitsRef} />
                  </div>
                </div>
                <div className="col-md-6 mt-3">
                  <img
                    src={room}
                    alt=""
                    className="img-fluid mt-3 mb-3"
                    style={calculatorImageMob}
                  />
                </div>
                <div className="d-flex justify-content-between ps-5 pe-5 mb-4">
                  <Link to="/ceiling">
                    <button type="button" style={backBtn}>
                      Back
                    </button>
                  </Link>
                  <Link to="/">
                    <button
                      type="button"
                      style={startBtn}
                      onClick={saveInputsToLocalStorageHandler}
                    >
                      Next
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CeilingDetail;
