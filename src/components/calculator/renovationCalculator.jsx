import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import apartment from "../../images/apartment.png";
import bunglow from "../../images/Bunglow.png";
import calculatorProgress from "./Assets/calculatorProgress.svg";

function getScreenWidth() {
  const { innerWidth: width } = window;
  return width;
}

const RenovationCalculator = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  const carpetAreaRef = useRef();
  const bedroomsRef = useRef();
  const bathroomsRef = useRef();
  const kitchenRef = useRef();
  const diningRef = useRef();
  const [bathroomRange, setBathroomRange] = useState(1);
  const [bedroomRange, setBedroomRange] = useState(1);

  const saveInputsToLocalStorageHandler = (e) => {
    localStorage.setItem("bedroom", bedroomsRef.current.value);
    localStorage.setItem("bathroom", bathroomsRef.current.value);
    localStorage.setItem("kitchen", kitchenRef.current.value);
    localStorage.setItem("dining", diningRef.current.value);
  };

  const setRangeForInputsHandler = (e) => {
    // console.log(`Set ranges for the following carpet area: ${carpetAreaRef.current.value}`);
    if (e.target.value > 4999) {
      e.target.value = 4999;
    } else if (e.target.value < 300) {
      e.target.value = 300;
    }
    let currentCarpetArea = carpetAreaRef.current.value;
    localStorage.setItem("carpetArea", currentCarpetArea);
    if (currentCarpetArea <= 599 && currentCarpetArea >= 300) {
      setBedroomRange(2);
    } else if (currentCarpetArea <= 999 && currentCarpetArea >= 600) {
      setBathroomRange(2);
      setBedroomRange(3);
    } else if (currentCarpetArea <= 1599 && currentCarpetArea >= 1000) {
      setBathroomRange(4);
      setBedroomRange(4);
    } else if (currentCarpetArea <= 2099 && currentCarpetArea >= 1600) {
      setBathroomRange(5);
      setBedroomRange(5);
    } else if (currentCarpetArea <= 3999 && currentCarpetArea >= 2100) {
      setBathroomRange(6);
      setBedroomRange(6);
    } else if (currentCarpetArea <= 4999 && currentCarpetArea >= 4000) {
      setBathroomRange(7);
      setBedroomRange(7);
    }
  };

  useEffect(() => {
    function handleResize() {
      setScreenWidth(getScreenWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const textClass = {
    fontFamily: "DM Serif Display",
    color: "#000000",
    fontWeight: "500",
    fontSize: "3.3rem",
    marginTop: "20px",
  };
  const textClassMob = {
    fontFamily: "DM Serif Display",
    color: "#000000",
    fontWeight: "500",
    fontSize: "35px",
    marginTop: "20px",
  };
  const propertyText = {
    color: "#3D3D3D",
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "24px",
    marginTop: "25px",
  };
  const box = {
    position: "absoulate",
    marginTop: "25px",
    width: "100%",
  };
  const inputField = {
    position: "relative",
    display: "inline-block",
    borderRadius: "10px 0 0 10px",
    border: "1px solid gray",
    outline: "none",
    width: "200px",
    textAlign: "center",
    height: "35px",
  };
  const inputFieldMob = {
    position: "relative",
    display: "inline-block",
    borderRadius: "10px 0 0 10px",
    border: "1px solid gray",
    outline: "none",
    width: "90%",
    textAlign: "center",
    height: "35px",
  };
  const inputsqft = {
    display: "inline-block",
    position: "relative",
    borderRadius: "0 10px 10px 0",
    width: "10%",
    border: "1px solid gray",
    outline: "none",
    color: "blue",
    height: "35px",
    textAlign: "center",
    borderLeft: "1px solid gray",
  };
  const areasInput = {
    position: "relative",
    display: "inline-block",
    borderRadius: "10px 0 0 10px",
    border: "1px solid gray",
    outline: "none",
    width: "120px",
    height: "35px",
    textAlign: "center",
  };
  const areasInputMob = {
    position: "relative",
    display: "inline-block",
    borderRadius: "10px 0 0 10px",
    border: "1px solid gray",
    outline: "none",
    width: "80%",
    height: "35px",
    textAlign: "center",
  };
  const areasButton = {
    display: "inline-block",
    position: "relative",
    borderRadius: "0 10px 10px 0",
    width: "20%",
    border: "1px solid gray",
    outline: "none",
    height: "35px",
    textAlign: "center",
    borderLeft: "1px solid gray",
  };
  const startBtn = {
    background: "linear-gradient(180deg, #3B5998 0%, #082B76 100%)",
    borderRadius: "7px",
    color: "white",
    border: "none",
    marginTop: "30px",
    marginBottom: "10px",
    padding: "8px 20px",
    fontSize: "17px",
    textAlign: "center",
    width: "25%",
  };
  const startBtnMob = {
    background: "linear-gradient(180deg, #3B5998 0%, #082B76 100%)",
    borderRadius: "7px",
    color: "white",
    border: "none",
    width: "100%",
    margin: "30px auto 10px auto",
    // marginBottom: "10px",
    padding: "8px 20px",
    fontSize: "17px",
    textAlign: "center",
  };
  const hrStyle = {
    height: "480px",
    width: "15px",
    borderRadius: "8px",
    background: "#F1F1F1",
    marginTop: "19px",
  };
  const hrStyleMob = {
    height: "10px",
    width: "auto",
    borderRadius: "8px",
    background: "#F1F1F1",
    marginTop: "0px",
    // transform: "rotate(-90deg)",
  };
  const hrStyleProgress = {
    height: "320px",
    width: "15px",
    borderRadius: "8px",
    background: "#404898",
    marginTop: "1px",
  };
  const hrStyleMobProgress = {
    height: "10px",
    width: "66%",
    borderRadius: "8px",
    background: "#404898",
    marginTop: "1px",
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
  const hrProgressStyle = {
    height: "160px",
    width: "15px",
    borderRadius: "8px",
    background: "#3B5998",
    marginTop: "1px",
  };
  const hrStyle2 = {
    height: "480px",
    width: "15px",
    borderRadius: "8px",
    background: "#F1F1F1",
    marginTop: "19px",
    transform: "rotate(90deg)",
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
  const calculatorImage = {
    paddingTop: "20px",
  };
  const imageText = {
    marginTop: "8px",
    fontSize: "18px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
  };
  const typeText = {
    color: "#2E337F",
    fontSize: "18px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    textAlign: "center",
  };
  // state for toggle
  const [changeCategory, setChangeCategory] = useState("apartment");
  return (
    <React.Fragment>
      {screenWidth > 600 && (
        <div className="container mt-5">
          <h1 style={textClass}>Renovation Calculator</h1>
          <div className="row gx-5 mt-3 direction">
            <div className="col-md-9 shadow rounded">
              <div className="row direction">
                <div className="col-md-7">
                  <h4 style={propertyText}>Property Type</h4>
                  {/* toggle button */}
                  <div className="d-flex btn align-center mt-4">
                    <button
                      type="button"
                      className={
                        changeCategory === "apartment"
                          ? "btn blue btn-lg text-light me-3"
                          : "btn light btn-lg text-secondary shadow-sm me-3"
                      }
                      onClick={() => {
                        setChangeCategory("apartment");
                        localStorage.setItem("propertyType", "apartment");
                      }}
                    >
                      Apartment
                    </button>
                    <button
                      type="button"
                      className={
                        changeCategory === "bungalow"
                          ? "btn blue btn-lg text-light me-3"
                          : "btn light btn-lg ms-3 text-secondary shadow-sm"
                      }
                      onClick={() => {
                        setChangeCategory("bungalow");
                        localStorage.setItem("propertyType", "bungalow");
                      }}
                    >
                      Bungalow
                    </button>
                  </div>
                  {changeCategory === "apartment" && (
                    <>
                      <h4 style={propertyText}>Carpet Area</h4>
                      <div style={box}>
                        <input
                          style={inputField}
                          type="text"
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          placeholder="Minimum 300"
                          min="300"
                          onBlur={setRangeForInputsHandler}
                          ref={carpetAreaRef}
                        />
                        <input disabled style={inputsqft} placeholder="sqft" />
                      </div>

                      <h4 style={propertyText}>Areas to renovate</h4>
                      <div className="d-flex align-center">
                        <div style={box}>
                          <input
                            style={areasInput}
                            disabled
                            placeholder="Bedroom"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max={`${bedroomRange}`}
                            onBlur={(e) => {
                              if (e.target.value > bedroomRange) {
                                e.target.value = bedroomRange;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={bedroomsRef}
                          />
                        </div>
                        <div style={box}>
                          <input
                            style={areasInput}
                            disabled
                            placeholder="Bathroom"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max={`${bathroomRange}`}
                            onBlur={(e) => {
                              if (e.target.value > bathroomRange) {
                                e.target.value = bathroomRange;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={bathroomsRef}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-center">
                        <div style={box}>
                          <input
                            style={areasInput}
                            disabled
                            placeholder="Kitchen"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max="1"
                            onBlur={(e) => {
                              if (e.target.value > 1) {
                                e.target.value = 1;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={kitchenRef}
                          />
                        </div>
                        <div style={box}>
                          <input
                            style={areasInput}
                            disabled
                            placeholder="Dining"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max="1"
                            onBlur={(e) => {
                              if (e.target.value > 1) {
                                e.target.value = 1;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={diningRef}
                          />
                        </div>
                      </div>
                      <Link to="/renovationTypes">
                        <button
                          type="button"
                          style={startBtn}
                          onClick={saveInputsToLocalStorageHandler}
                        >
                          Next
                        </button>
                      </Link>
                    </>
                  )}
                  {changeCategory === "bungalow" && (
                    <>
                      <h4 style={propertyText}>Carpet Area</h4>
                      <div style={box}>
                        <input
                          style={inputField}
                          type="text"
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          placeholder="Minimum 300"
                          min="300"
                          onBlur={setRangeForInputsHandler}
                          ref={carpetAreaRef}
                        />
                        <input disabled style={inputsqft} placeholder="sqft" />
                      </div>

                      <h4 style={propertyText}>Areas to renovate</h4>
                      <div className="d-flex align-center">
                        <div style={box}>
                          <input
                            style={areasInput}
                            disabled
                            placeholder="Bedroom"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max={`${bedroomRange}`}
                            onBlur={(e) => {
                              if (e.target.value > bedroomRange) {
                                e.target.value = bedroomRange;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={bedroomsRef}
                          />
                        </div>
                        <div style={box}>
                          <input
                            style={areasInput}
                            disabled
                            placeholder="Bathroom"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max={`${bathroomRange}`}
                            onBlur={(e) => {
                              if (e.target.value > bathroomRange) {
                                e.target.value = bathroomRange;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={bathroomsRef}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-center">
                        <div style={box}>
                          <input
                            style={areasInput}
                            disabled
                            placeholder="Kitchen"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max="1"
                            onBlur={(e) => {
                              if (e.target.value > 1) {
                                e.target.value = 1;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={kitchenRef}
                          />
                        </div>
                        <div style={box}>
                          <input
                            style={areasInput}
                            disabled
                            placeholder="Dining"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max="1"
                            onBlur={(e) => {
                              if (e.target.value > 1) {
                                e.target.value = 1;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={diningRef}
                          />
                        </div>
                      </div>
                      {/* next button */}
                      <Link to="/renovationTypes">
                        <button
                          type="button"
                          style={startBtn}
                          onClick={saveInputsToLocalStorageHandler}
                        >
                          Next
                        </button>
                      </Link>
                    </>
                  )}
                </div>
                <div className="col-md-5">
                  {changeCategory === "bungalow" && (
                    <>
                      <img
                        src={bunglow}
                        alt=""
                        className="img-fluid mt-3 mb-3"
                        style={calculatorImage}
                      />
                      <p style={imageText}>
                        <span style={typeText}>Bungalow</span> is a low
                        independent house Typically having having two storeys.
                      </p>
                    </>
                  )}
                  {changeCategory === "apartment" && (
                    <>
                      <img
                        src={apartment}
                        alt=""
                        className="img-fluid mt-3 mb-3"
                        style={calculatorImage}
                      />
                      <p style={imageText}>
                        <span style={typeText}>Apartment</span>,is a single
                        level dwelling, in some cases a duplex. It is usually a
                        part of a multi storey condominium
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-evenly ">
                <div style={hrStyle}>
                  <div style={hrProgressStyle}></div>
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

          <div className="row gx-5 mt-3 direction">
            <div className="col-md-8 shadow rounded">
              <div className="row direction">
                <div className="col-md-7">
                  <h4 style={propertyText}>Property Type</h4>
                  {/* toggle button */}
                  <div className="d-flex btn align-center mt-4">
                    <button
                      type="button"
                      className={
                        changeCategory === "apartment"
                          ? "btn blue btn-lg text-light me-3"
                          : "btn light btn-lg text-secondary shadow-sm me-3"
                      }
                      onClick={() => {
                        setChangeCategory("apartment");
                        localStorage.setItem("propertyType", "apartment");
                      }}
                    >
                      Apartment
                    </button>
                    <button
                      type="button"
                      className={
                        changeCategory === "bungalow"
                          ? "btn blue btn-lg text-light me-3"
                          : "btn light btn-lg ms-3 text-secondary shadow-sm"
                      }
                      onClick={() => {
                        setChangeCategory("bungalow");
                        localStorage.setItem("propertyType", "bungalow");
                      }}
                    >
                      Bungalow
                    </button>
                  </div>
                  {changeCategory === "apartment" && (
                    <>
                      <h4 style={propertyText}>Carpet Area</h4>
                      <div style={box}>
                        <input
                          style={inputFieldMob}
                          type="text"
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          placeholder="Minimum 300"
                          min="300"
                          onBlur={setRangeForInputsHandler}
                          ref={carpetAreaRef}
                        />
                        <input disabled style={inputsqft} placeholder="sqft" />
                      </div>

                      <h4 style={propertyText}>Areas to renovate</h4>
                      <div className="d-flex align-center">
                        <div style={box}>
                          <input
                            style={areasInputMob}
                            disabled
                            placeholder="Bedroom"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max={`${bedroomRange}`}
                            onBlur={(e) => {
                              if (e.target.value > bedroomRange) {
                                e.target.value = bedroomRange;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={bedroomsRef}
                          />
                        </div>
                        <div style={box}>
                          <input
                            style={areasInputMob}
                            disabled
                            placeholder="Bathroom"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max={`${bathroomRange}`}
                            onBlur={(e) => {
                              if (e.target.value > bathroomRange) {
                                e.target.value = bathroomRange;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={bathroomsRef}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-center">
                        <div style={box}>
                          <input
                            style={areasInputMob}
                            disabled
                            placeholder="Kitchen"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max="1"
                            onBlur={(e) => {
                              if (e.target.value > 1) {
                                e.target.value = 1;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={kitchenRef}
                          />
                        </div>
                        <div style={box}>
                          <input
                            style={areasInputMob}
                            disabled
                            placeholder="Dining"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max="1"
                            onBlur={(e) => {
                              if (e.target.value > 1) {
                                e.target.value = 1;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={diningRef}
                          />
                        </div>
                      </div>
                      <Link to="/renovationTypes">
                        <button
                          type="button"
                          style={startBtnMob}
                          onClick={saveInputsToLocalStorageHandler}
                        >
                          Next
                        </button>
                      </Link>
                    </>
                  )}
                  {changeCategory === "bungalow" && (
                    <>
                      <h4 style={propertyText}>Carpet Area</h4>
                      <div style={box}>
                        <input
                          style={inputFieldMob}
                          type="text"
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          placeholder="Minimum 300"
                          min="300"
                          onBlur={setRangeForInputsHandler}
                          ref={carpetAreaRef}
                        />
                        <input disabled style={inputsqft} placeholder="sqft" />
                      </div>

                      <h4 style={propertyText}>Areas to renovate</h4>
                      <div className="d-flex align-center">
                        <div style={box}>
                          <input
                            style={areasInputMob}
                            disabled
                            placeholder="Bedroom"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max={`${bedroomRange}`}
                            onBlur={(e) => {
                              if (e.target.value > bedroomRange) {
                                e.target.value = bedroomRange;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={bedroomsRef}
                          />
                        </div>
                        <div style={box}>
                          <input
                            style={areasInputMob}
                            disabled
                            placeholder="Bathroom"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max={`${bathroomRange}`}
                            onBlur={(e) => {
                              if (e.target.value > bathroomRange) {
                                e.target.value = bathroomRange;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={bathroomsRef}
                          />
                        </div>
                      </div>
                      <div className="d-flex align-center">
                        <div style={box}>
                          <input
                            style={areasInputMob}
                            disabled
                            placeholder="Kitchen"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max="1"
                            onBlur={(e) => {
                              if (e.target.value > 1) {
                                e.target.value = 1;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={kitchenRef}
                          />
                        </div>
                        <div style={box}>
                          <input
                            style={areasInputMob}
                            disabled
                            placeholder="Dining"
                          />
                          <input
                            type="number"
                            style={areasButton}
                            min="1"
                            max="1"
                            onBlur={(e) => {
                              if (e.target.value > 1) {
                                e.target.value = 1;
                              } else if (e.target.value < 1) {
                                e.target.value = 1;
                              }
                            }}
                            ref={diningRef}
                          />
                        </div>
                      </div>
                      {/* next button */}
                      <Link to="/renovationTypes">
                        <button
                          type="button"
                          style={startBtnMob}
                          onClick={saveInputsToLocalStorageHandler}
                        >
                          Next
                        </button>
                      </Link>
                    </>
                  )}
                </div>
                <div className="col-md-5">
                  {changeCategory === "bungalow" && (
                    <>
                      <img
                        src={bunglow}
                        alt=""
                        className="img-fluid mt-3 mb-3"
                        style={calculatorImage}
                      />
                      <p style={imageText}>
                        <span style={typeText}>Bungalow</span> is a low
                        independent house Typically having having two storeys.
                      </p>
                    </>
                  )}
                  {changeCategory === "apartment" && (
                    <>
                      <img
                        src={apartment}
                        alt=""
                        className="img-fluid mt-3 mb-3"
                        style={calculatorImage}
                      />
                      <p style={imageText}>
                        <span style={typeText}>Apartment</span>,is a single
                        level dwelling, in some cases a duplex. It is usually a
                        part of a multi storey condominium
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
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
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default RenovationCalculator;
