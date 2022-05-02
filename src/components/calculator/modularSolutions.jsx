import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shareNodes from "./Assets/share-fill.svg";
import {
  faSquareShareNodes,
  faAnglesRight,
  faAngleRight,
  faStar,
  faLocationDot,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import abcDesignFirmImg from "../calculator/Assets/abcDesignFirmImg.svg";

function getScreenWidth() {
  const { innerWidth: width } = window;
  return width;
}
const ModularSolutions = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

  useEffect(() => {
    function handleResize() {
      setScreenWidth(getScreenWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backGround = {
    background: "linear-gradient(78.72deg, #3B5998 -9.33%, #020812 104.35%)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
    height: " 448px",
  };
  const heading = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "32px",
    textAlign: "center",
    color: "#FFFFFF",
    paddingTop: "60px",
  };
  const headingMob = {
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: "25px",
    textAlign: "center",
    color: "#FFFFFF",
    paddingTop: "60px",
  };
  const mainText = {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "50px",
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: "13px",
  };
  const mainTextMob = {
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "30px",
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: "13px",
  };
  const middleText = {
    fontFamily: "Inter",
    fontSize: "20px",
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: "25px",
    lineHeight: "29px",
  };
  const middleTextMob = {
    fontFamily: "Inter",
    color: "#FFFFFF",
    textAlign: "center",
    paddingTop: "25px",
    lineHeight: "29px",
  };
  const restart = {
    fontFamily: "Inter",
    fontSize: "30px",
    color: "#404898",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: "35px",
  };
  const restartMob = {
    fontFamily: "Inter",
    fontSize: "20px",
    color: "#404898",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: "35px",
  };
  const found = {
    fontFamily: "Inter",
    fontSize: "20px",
    color: "#414141",
    lineHeight: "39px",
  };
  const foundMob = {
    fontFamily: "Inter",
    fontSize: "20px",
    color: "#414141",
    lineHeight: "39px",
    fontWeight: "600",
  };
  const design = {
    fontFamily: "DM Serif Display",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "2.5rem",
    lineHeight: "50px",
    textAlign: "center",
    color: "#000000",
  };
  const designMob = {
    fontFamily: "DM Serif Display",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "2.5rem",
    lineHeight: "50px",
    textAlign: "left",
    color: "#000000",
  };
  const city = {
    position: "absolute",
    top: "125px",
    fontFamily: "Inter",
    color: "#272727",
    marginLeft: "14px",
  };
  const cardBtn = {
    border: "0",
    backgroundColor: "#EBECFF",
    color: " #3B5998",
    borderRadius: "3.5px",
    padding: "9px 15px",
    marginTop: "10px",
    fontFamily: "Inter",
    fontWeight: "600",
  };
  const iconButton = {
    border: "0",
    backgroundColor: "rgba(228, 212, 65, 0.18)",
    color: "#DFCC1A",
    borderRadius: "5px",
    padding: "3px 10px",
  };
  const imageTwo = {
    width: "15px",
    height: "15px",
    left: "230px",
    position: "absolute",
  };
  const imageOne = {
    width: "15px",
    height: "15px",
    left: "150px",
    position: "absolute",
  };
  const firmImage = {};
  return (
    <React.Fragment>
      {screenWidth > 600 && (
        <div className="container mt-5">
          {/* banner section */}
          <div style={backGround}>
            <h4 style={heading}>
              Estimated cost <FontAwesomeIcon icon={faSquareShareNodes} />
            </h4>
            <h1 style={mainText}>₹ 12000 - ₹ 30000</h1>
            <div className="container text-center mt-3">
              <button
                type="button"
                className="btn btn-light"
                style={{ color: "#2F4776" }}
              >
                Get Detailed Quotation <FontAwesomeIcon icon={faAnglesRight} />
              </button>
            </div>
            <div style={middleText}>
              <h5>Renovating in the next 3 months?</h5>
              <p>
                Receive a list of reliable interior firms based on your
                renovation requirements.
              </p>
            </div>
            <div className="container text-center mt-3">
              <button
                type="button"
                className="btn btn"
                style={{ color: "white", border: "1px solid white" }}
              >
                Free Recommendations
              </button>
            </div>
          </div>
          {/* second section */}
          <div className="row m-0 mt-4 shadow p-5 mb-5 bg-body rounded">
            <div className="col-md-6 text-center">
              <h5 style={found}>Found this tool helpful?</h5>
              <p>Share it with your friends </p>
              <div className="d-flex text-center mt-3 justify-content-evenly container">
                <div
                  style={{
                    border: "1px solid #535A9E",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src="https://i.ibb.co/VSZ5vxt/Vector-12.png"
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    border: "1px solid #535A9E",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src="https://i.ibb.co/M24JPFt/Vector-13.png"
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    border: "1px solid #535A9E",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src="https://i.ibb.co/hmtsGCN/Vector-14.png"
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    border: "1px solid #535A9E",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src="https://i.ibb.co/WGb7Ltg/Vector-15.png"
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 style={restart}>Restart Calculator</h3>
            </div>
          </div>
          {/* design exclusives */}
          <h1 style={design}>iDesign Exclusives</h1>
          {/* cards */}
          <div className="row mt-4 mb-5 text-center d-flex justify-content-around">
            <div
              className="card col-md-6 col-sm-12  border-0 p-0"
              style={{ width: "18rem", height: "18rem" }}
            >
              <img
                style={{ position: "relative" }}
                src="https://i.ibb.co/xzMKSZS/Vector-16.png"
                className="img-fluid card-img-top"
                alt="..."
              />
              <img
                src="https://i.ibb.co/3hfMxgB/quote-1-1.png"
                className="card-img-top"
                style={{
                  top: "35px",
                  left: "110px",
                  width: "75px",
                  position: "absolute",
                }}
                alt="..."
              />
              <div style={{ top: "145px", position: "absolute" }}>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: " #3B5998",
                      fontWeight: "500",
                      fontFamily: "DM Serif Display",
                    }}
                  >
                    Quote Comparison
                  </h5>
                  <p className="card-text">
                    We totally understand your fears and queries when you
                    receive
                  </p>
                </div>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#3B5998",
                    color: "white",
                    border: "1px solid #3B5998",
                  }}
                  className="btn btn container"
                >
                  Get Started
                </button>
              </div>
            </div>

            <div
              className="card col-md-6 col-sm-12 p-0 border-0"
              style={{ width: " 18rem", height: "18rem" }}
            >
              <img
                style={{ position: "relative" }}
                src="https://i.ibb.co/zG5MX3J/Vector-17.png"
                className="img-fluid card-img-top"
                alt="..."
              />
              <img
                src="https://i.ibb.co/PhpgCg5/billing-1.png"
                className="card-img-top"
                style={{
                  top: "30px",
                  left: "110px",
                  width: "70px",
                  position: "absolute",
                }}
                alt="..."
              />
              <div style={{ top: "145px", position: "absolute" }}>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: " #6838CC",
                      fontWeight: "500",
                      fontFamily: "DM Serif Display",
                    }}
                  >
                    Final Billing
                  </h5>
                  <p className="card-text">
                    Speak to industry professional and get clarity.
                  </p>
                </div>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#845DD6",
                    color: "white",
                    border: "1px solid #845DD6",
                  }}
                  className="btn btn-primary container"
                >
                  Get Final Billing
                </button>
              </div>
            </div>

            <div
              className="card border-0 p-0 col-md-6 col-sm-12"
              style={{ width: " 18rem", height: "18rem" }}
            >
              <img
                style={{ position: "relative" }}
                src="https://i.ibb.co/JCnN115/Vector-18.png"
                className="img-fluid card-img-top"
                alt="..."
              />
              <img
                src="https://i.ibb.co/dgYzvZW/Group-1098.png"
                className="card-img-top"
                style={{
                  top: "25px",
                  left: "115px",
                  width: "70px",
                  position: "absolute",
                }}
                alt="..."
              />
              <div style={{ top: "145px", position: "absolute" }}>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: "#25ABAB",
                      fontWeight: "500",
                      fontFamily: "DM Serif Display",
                    }}
                  >
                    Easy Loans
                  </h5>
                  <p className="card-text">
                    iDesigns brings to you easy finance options .
                  </p>
                </div>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#3CC99E",
                    color: "white",
                    border: "1px solid #3CC99E",
                  }}
                  className="btn btn-primary container"
                >
                  Get Loans
                </button>
              </div>
            </div>
          </div>
          {/*popular design start  */}

          {/* card start */}
          <div className="marginCard row d-flex justify-content-around text-left ">
            <h1 style={design} className="mt-5 mb-5">
              Popular Designer near you
            </h1>
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-2 mb-5 bg-body rounded "
              style={{ width: " 18rem", height: "auto" }}
            >
              <img src={abcDesignFirmImg} style={firmImage} alt="" />
              <div style={{ top: "0px", position: "relative" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-2 mb-5 bg-body rounded "
              style={{ width: " 18rem", height: "auto" }}
            >
              <img src={abcDesignFirmImg} style={firmImage} alt="" />
              <div style={{ top: "0px", position: "relative" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-2 mb-5 bg-body rounded "
              style={{ width: " 18rem", height: "auto" }}
            >
              <img src={abcDesignFirmImg} style={firmImage} alt="" />
              <div style={{ top: "0px", position: "relative" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card end */}
          {/* card start */}
          <div className=" row marginSecondCard d-flex justify-content-around text-left">
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-2 mb-5 bg-body rounded "
              style={{ width: " 18rem", height: "auto" }}
            >
              <img src={abcDesignFirmImg} style={firmImage} alt="" />
              <div style={{ top: "0px", position: "relative" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-2 mb-5 bg-body rounded "
              style={{ width: " 18rem", height: "auto" }}
            >
              <img src={abcDesignFirmImg} style={firmImage} alt="" />
              <div style={{ top: "0px", position: "relative" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-2 mb-5 bg-body rounded "
              style={{ width: " 18rem", height: "auto" }}
            >
              <img src={abcDesignFirmImg} style={firmImage} alt="" />
              <div style={{ top: "0px", position: "relative" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card end */}
        </div>
      )}
      {screenWidth < 600 && (
        <div className="container mt-5">
          {/* banner section */}
          <div style={backGround}>
            <img
              src={shareNodes}
              alt="..."
              style={{
                color: "white",
                fontSize: "4em",
                margin: "0.2em",
                width: "0.5em",
                float: "right",
              }}
            />

            {/* <FontAwesomeIcon icon={faShareNodes} /> */}
            <h4 style={headingMob}>Estimated cost</h4>
            <h1 style={mainTextMob}>₹ 12000 - ₹ 30000</h1>
            <div className="container text-center mt-3">
              <button
                type="button"
                className="btn btn-light"
                style={{ color: "#2F4776", width: "90%", fontWeight: "600" }}
              >
                Get Detailed Quotation <FontAwesomeIcon icon={faAngleRight} />
                <FontAwesomeIcon icon={faAngleRight} />
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
            <div className="mt-4" style={middleTextMob}>
              <p style={{ fontWeight: "100" }}>
                Renovating in the{" "}
                <span style={{ fontWeight: "600" }}>next 3 months?</span>
              </p>
              <p style={{ fontSize: "80%" }}>
                Receive a list of reliable interior firms based on your
                renovation requirements.
              </p>
            </div>
            <div className="container text-center mt-5">
              <button
                type="button"
                className="btn btn"
                style={{
                  color: "white",
                  border: "1px solid white",
                  width: "90%",
                }}
              >
                Free Recommendations
              </button>
            </div>
          </div>
          {/* second section */}
          <div className="row m-0 mt-4 shadow p-5 mb-5 bg-body rounded">
            <div className="col-md-6 text-center">
              <h5 style={foundMob}>Found this tool helpful?</h5>
              <p>Share it with your friends </p>
              <div
                className="d-flex text-center mt-3 justify-content-between container"
                style={{ width: "100%" }}
              >
                <div
                  style={{
                    border: "1px solid #535A9E",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src="https://i.ibb.co/VSZ5vxt/Vector-12.png"
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    border: "1px solid #535A9E",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src="https://i.ibb.co/M24JPFt/Vector-13.png"
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    border: "1px solid #535A9E",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src="https://i.ibb.co/hmtsGCN/Vector-14.png"
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    border: "1px solid #535A9E",
                    padding: "6px",
                    borderRadius: "5px",
                  }}
                >
                  <img
                    src="https://i.ibb.co/WGb7Ltg/Vector-15.png"
                    style={{ width: "30px", height: "30px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="mt-5"
              style={{
                borderTop: "2px solid #BABABA",
                width: "60%",
                margin: "auto",
              }}
            />
            <div className="col-md-6">
              <h3 style={restartMob}>Restart Calculator</h3>
            </div>
          </div>
          {/* design exclusives */}
          <h1 style={designMob}>iDesign Exclusives</h1>
          {/* cards */}
          <div className="row mt-4 mb-5 text-center d-flex justify-content-around">
            <div
              className="card col-md-6 col-sm-12  border-0 p-0"
              style={{ width: "18rem", height: "18rem" }}
            >
              <img
                style={{ position: "relative" }}
                src="https://i.ibb.co/xzMKSZS/Vector-16.png"
                className="img-fluid card-img-top"
                alt="..."
              />
              <img
                src="https://i.ibb.co/3hfMxgB/quote-1-1.png"
                className="card-img-top"
                style={{
                  top: "35px",
                  left: "110px",
                  width: "75px",
                  position: "absolute",
                }}
                alt="..."
              />
              <div style={{ top: "145px", position: "absolute" }}>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: " #3B5998",
                      fontWeight: "600",
                      fontFamily: "DM Serif Display",
                    }}
                  >
                    Quote Comparison
                  </h5>
                  <p className="card-text">
                    We totally understand your fears and queries when you
                    receive
                  </p>
                </div>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#3B5998",
                    color: "white",
                    border: "1px solid #3B5998",
                  }}
                  className="btn btn container"
                >
                  Get Started
                </button>
              </div>
            </div>

            <div
              className="card col-md-6 col-sm-12 p-0 border-0 mt-5 mb-5"
              style={{ width: " 18rem", height: "18rem" }}
            >
              <img
                style={{ position: "relative" }}
                src="https://i.ibb.co/zG5MX3J/Vector-17.png"
                className="img-fluid card-img-top"
                alt="..."
              />
              <img
                src="https://i.ibb.co/PhpgCg5/billing-1.png"
                className="card-img-top"
                style={{
                  top: "30px",
                  left: "110px",
                  width: "70px",
                  position: "absolute",
                }}
                alt="..."
              />
              <div style={{ top: "145px", position: "absolute" }}>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: " #6838CC",
                      fontWeight: "600",
                      fontFamily: "DM Serif Display",
                    }}
                  >
                    Final Billing
                  </h5>
                  <p className="card-text">
                    Speak to industry professional and get clarity.
                  </p>
                </div>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#845DD6",
                    color: "white",
                    border: "1px solid #845DD6",
                  }}
                  className="btn btn-primary container"
                >
                  Get Final Billing
                </button>
              </div>
            </div>

            <div
              className="card border-0 p-0 col-md-6 col-sm-12 mt-3"
              style={{ width: " 18rem", height: "18rem" }}
            >
              <img
                style={{ position: "relative" }}
                src="https://i.ibb.co/JCnN115/Vector-18.png"
                className="img-fluid card-img-top"
                alt="..."
              />
              <img
                src="https://i.ibb.co/dgYzvZW/Group-1098.png"
                className="card-img-top"
                style={{
                  top: "25px",
                  left: "115px",
                  width: "70px",
                  position: "absolute",
                }}
                alt="..."
              />
              <div style={{ top: "145px", position: "absolute" }}>
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      color: "#25ABAB",
                      fontWeight: "600",
                      fontFamily: "DM Serif Display",
                    }}
                  >
                    Easy Loans
                  </h5>
                  <p className="card-text">
                    iDesigns brings to you easy finance options .
                  </p>
                </div>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#3CC99E",
                    color: "white",
                    border: "1px solid #3CC99E",
                  }}
                  className="btn btn-primary container"
                >
                  Get Loans
                </button>
              </div>
            </div>
          </div>
          {/*popular design start  */}

          {/* card start */}
          <div className="marginCard row d-flex justify-content-around text-left">
            <h1 style={designMob} className="mt-5 mb-5">
              Popular Designer near you
            </h1>

            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-2 mb-5 bg-body rounded "
              style={{ width: " 18rem", height: "auto" }}
            >
              <img src={abcDesignFirmImg} style={firmImage} alt="" />
              <div style={{ top: "0px", position: "relative" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-2 mb-5 bg-body rounded "
              style={{ width: " 18rem", height: "auto" }}
            >
              <img src={abcDesignFirmImg} style={firmImage} alt="" />
              <div style={{ top: "0px", position: "relative" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-2 mb-5 bg-body rounded "
              style={{ width: " 18rem", height: "auto" }}
            >
              <img src={abcDesignFirmImg} style={firmImage} alt="" />
              <div style={{ top: "0px", position: "relative" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card end */}
          {/* card start */}
          {/* <div className=" row marginSecondCard d-flex justify-content-around text-left">
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-3 mb-5 bg-body rounded"
              style={{
                width: " 18rem",
                height: "17rem",
              }}
            >
              <div style={{ top: "100px", position: "absolute" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-3 mb-5 bg-body rounded"
              style={{ width: " 18rem", height: "17rem" }}
            >
              <div style={{ top: "100px", position: "absolute" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card col-md-6 col-sm-12 border-0 shadow p-3 mb-5 bg-body rounded"
              style={{ width: " 18rem", height: "17rem" }}
            >
              <div style={{ top: "100px", position: "absolute" }}>
                <div className="card-body">
                  <div className="d-flex">
                    <h6
                      className="card-title"
                      style={{
                        color: "#272727",
                        fontWeight: "600",
                        fontFamily: "Inter",
                      }}
                    >
                      ABC Design Firm
                    </h6>
                    <img
                      className="image"
                      src="https://i.ibb.co/N6Q5z9Q/Vector-19.png"
                      style={imageOne}
                      alt=""
                    />
                    <img
                      src="https://i.ibb.co/JQ1gqbB/Vector.png"
                      style={imageTwo}
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <button type="button" style={iconButton}>
                      <FontAwesomeIcon icon={faStar} /> 4.3
                    </button>
                  </div>
                  <button type="button" style={cardBtn}>
                    Design fee : ₹5000/room
                  </button>
                  <div className="card-text d-flex mt-3">
                    <FontAwesomeIcon
                      className="text-danger"
                      icon={faLocationDot}
                    />
                    <p style={city}>Saket, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* card end */}
        </div>
      )}
    </React.Fragment>
  );
};

export default ModularSolutions;
