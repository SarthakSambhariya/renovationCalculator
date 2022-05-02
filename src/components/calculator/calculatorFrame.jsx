import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faStopwatch,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import frame from "../../images/Screen 1.png";
import stopWatch from "./Assets/stopWatch.svg";

function getScreenWidth() {
  const { innerWidth: width } = window;
  return width;
}

const CalculatorFrame = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

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
    marginBottom: "10px",
    fontWeight: "400",
    fontSize: "3.3rem",
  };
  const paragraphText = {
    fontFamily: "Inter",
    color: "#141414",
  };
  const paragraphTextMob = {
    fontFamily: "Inter",
    color: "#141414",
    fontSize: "1em",
  };
  const icon = {
    color: "#3B5998",
    paddingRight: "6px",
  };
  const iconWatch = {
    color: "#2CBF81",
    paddingRight: "6px",
  };
  const startBtn = {
    background: "linear-gradient(180deg, #3B5998 0%, #082B76 100%)",
    borderRadius: "10px",
    color: "white",
    border: "none",
    marginTop: "30px",
    padding: "10px 30px",
    fontSize: "20px",
    textAlign: "center",
  };
  const startBtnMob = {
    background: "linear-gradient(180deg, #3B5998 0%, #082B76 100%)",
    borderRadius: "10px",
    color: "white",
    border: "none",
    marginTop: "30px",
    padding: "10px 30px",
    fontSize: "20px",
    textAlign: "center",
    width: "100%",
  };
  const createButton = {
    background: "#3B5998",
    borderRadius: "4px",
    color: "white",
    border: "none",
    fontSize: "18px",
    padding: "10px 30px",
    textAlign: "center",
    width: "100%",
  };
  const signInButton = {
    background: "rgba(196, 196, 196, 0.2)",
    borderRadius: "4px",
    color: " #000000",
    border: "none",
    fontSize: "20px",
    padding: "10px 30px",
    textAlign: "center",
    width: "100%",
    fontFamily: "Public Sans",
    fontWeight: "600",
  };
  const calculatorText = {
    fontFamily: "Manrope",
    fontSize: "38px",
    color: "#000000",
  };
  const accountText = {
    color: "#A7A7A7",
    fontFamily: "Public Sans",
    fontSize: "20px",
    textAlign: "center",
  };
  const leftLine = {
    width: "290px",
    height: "2px",
    background: "#F1F1F1",
    top: "335px",
  };
  const rightLine = {
    width: "300px",
    height: "2px",
    background: "#F1F1F1",
    top: "335px",
  };
  const googleImage = {
    width: "24px",
    height: "24px",
    marginRight: "5px",
  };
  const textColor = {
    color: "#536DA5",
  };
  const signText = {
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  };
  return (
    <React.Fragment>
      {screenWidth > 600 && (
        <div className="container mt-5">
          <div className="m-0 row align-items-center shadow p-3 mb-5 bg-body rounded">
            <div className="col-md-6">
              <img src={frame} alt="" className="img-fluid" />
            </div>
            <div className="p-5 col-md-6">
              <h1 className="heading" style={textClass}>
                Renovation Calculator
              </h1>
              <h4 className={paragraphText}>
                How much should you <span className="fw-bold">Budget</span> for
                your <br />
                renovation?
              </h4>
              <br />
              <h6 className="mb-3 fs-5 mt-4">
                <FontAwesomeIcon style={icon} icon={faCircle} />
                Tell us about the works you want to be done on your home.
              </h6>
              <h6 className="mb-3 fs-5">
                <FontAwesomeIcon style={icon} icon={faCircle} />
                Any Modular Solutions? Tell us what you need.
              </h6>
              <h6 className="mb-3 fs-5">
                <FontAwesomeIcon style={icon} icon={faCircle} />
                Sit back while we give you an instant estimate based on our data
                analytics.
              </h6>
              <h6 className="mb-3 fs-5">
                <FontAwesomeIcon style={iconWatch} icon={faStopwatch} />
                Estimated Time 5 mins
              </h6>
              {/* modal button */}
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                style={startBtn}
              >
                Start Calculator
              </button>
            </div>
            {/* modal start */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content p-3">
                  <div className="modal-header  border-0">
                    <h2 style={calculatorText}>Start your Calculator</h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <h5 className="mb-2">Name</h5>
                        <input
                          placeholder="e.g. Dikshant Negi"
                          type="name"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <h5 className="mb-2">Email ID</h5>
                        <input
                          placeholder="e.g. xyz@xyz.com"
                          type="email"
                          className="form-control"
                          id="recipient-email"
                        />
                      </div>
                      <div className="mb-3">
                        <h5 className="mb-2">City</h5>
                        <input
                          placeholder="e.g. Delhi"
                          type="text"
                          className="form-control"
                          id="recipient-city"
                        />
                      </div>
                      <div className="mb-3">
                        <h5 className="mb-2">Contact No.</h5>
                        <input
                          type="text"
                          placeholder="e.g. 1234567890"
                          className="form-control"
                          id="recipient-contact"
                        />
                      </div>
                      <div className="mb-3">
                        <h5 className="mb-2">Password</h5>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. asfdf5d4f5@#"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                          <span class="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faEye} />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button type="button" style={createButton}>
                          Create New Account
                        </button>
                      </div>
                      <p style={signText}>
                        On signing you agree to our{" "}
                        <u className="fw-bold" style={textColor}>
                          Terms of use
                        </u>{" "}
                        and our{" "}
                        <u className="fw-bold" style={textColor}>
                          Privacy policy
                        </u>
                      </p>
                      <div className="d-flex mt-3 mb-3">
                        <div style={leftLine}></div>
                        <h4
                          style={{
                            color: "#A7A7A7",
                          }}
                        >
                          OR
                        </h4>
                        <div style={rightLine}></div>
                      </div>
                      <div className="mb-4 ">
                        <button style={signInButton}>
                          <img
                            src="https://i.ibb.co/cDwswmW/flat-color-icons-google.png"
                            style={googleImage}
                            alt=""
                          />
                          Sign in with Google
                        </button>
                      </div>
                      <p style={accountText}>
                        Already have an account?{" "}
                        <span className="fw-bold" style={textColor}>
                          Login
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {screenWidth < 600 && (
        <div className="container mt-5">
          <div className="m-0 row align-items-center shadow p-3 mb-5 bg-body rounded">
            <div className="col-md-6">
              <img src={frame} alt="" className="img-fluid" />
            </div>
            <div className="mt-4 col-md-6">
              <h1 className="heading" style={textClass}>
                Renovation Calculator
              </h1>
              <p className={paragraphTextMob}>
                How much should you <span className="fw-bold">Budget</span> for
                your <br />
                renovation?
              </p>
              <br />
              <ul
                class="fa-ul mb-4"
                style={{ fontSize: "1.2em", margin: "auto", width: "90%" }}
              >
                <li className="mb-3">
                  <span class="fa-li">
                    <i
                      class="fa fa-regular fa-circle"
                      style={{ color: "#3B5998" }}
                    ></i>
                  </span>
                  Tell us about the works you want to be done on your home.
                </li>
                <li className="mb-3">
                  <span class="fa-li">
                    <i
                      class="fa fa-regular fa-circle"
                      style={{ color: "#3B5998" }}
                    ></i>
                  </span>
                  Any Modular Solutions? Tell us what you need.
                </li>
                <li className="mb-3">
                  <span class="fa-li">
                    <i
                      class="fa fa-regular fa-circle"
                      style={{ color: "#3B5998" }}
                    ></i>
                  </span>
                  Sit back while we give you an instant estimate based on our
                  data analytics.
                </li>
              </ul>

              <p className="mb-3 fs-5 d-flex align-contents-center justify-content-center">
                <img src={stopWatch} alt="..." style={{ width: "1em" }} />
                <span style={{ fontSize: "0.8em" }}>Estimated Time 5 mins</span>
              </p>
              {/* modal button */}
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                style={startBtnMob}
              >
                Start Calculator
              </button>
            </div>
            {/* modal start */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content p-3">
                  <div className="modal-header  border-0">
                    <h2 style={calculatorText}>Start your Calculator</h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <h5 className="mb-2">Name</h5>
                        <input
                          placeholder="e.g. Dikshant Negi"
                          type="text"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <h5 className="mb-2">Email ID</h5>
                        <input
                          placeholder="e.g. xyz@xyz.com"
                          type="text"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <h5 className="mb-2">City</h5>
                        <input
                          placeholder="e.g. Delhi"
                          type="text"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <h5 className="mb-2">Contact No.</h5>
                        <input
                          type="text"
                          placeholder="e.g. 1234567890"
                          className="form-control"
                          id="recipient-name"
                        />
                      </div>
                      <div className="mb-3">
                        <h5 className="mb-2">Password</h5>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. asfdf5d4f5@#"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                          <span class="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faEye} />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button type="button" style={createButton}>
                          Create New Account
                        </button>
                      </div>
                      <p style={signText}>
                        On signing you agree to our{" "}
                        <u className="fw-bold" style={textColor}>
                          Terms of use
                        </u>{" "}
                        and our{" "}
                        <u className="fw-bold" style={textColor}>
                          Privacy policy
                        </u>
                      </p>
                      <div className="d-flex mt-3 mb-3">
                        <div style={leftLine}></div>
                        <h4
                          style={{
                            color: "#A7A7A7",
                          }}
                        >
                          OR
                        </h4>
                        <div style={rightLine}></div>
                      </div>
                      <div className="mb-4 ">
                        <button style={signInButton}>
                          <img
                            src="https://i.ibb.co/cDwswmW/flat-color-icons-google.png"
                            style={googleImage}
                            alt=""
                          />
                          Sign in with Google
                        </button>
                      </div>
                      <p style={accountText}>
                        Already have an account?{" "}
                        <span className="fw-bold" style={textColor}>
                          Login
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default CalculatorFrame;
