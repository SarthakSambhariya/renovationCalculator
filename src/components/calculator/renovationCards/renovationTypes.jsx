import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import electrical from "../../../images/electrical unselect.png";
import ceiling from "../../../images/False celing unselect.png";
import paint from "../../../images/Paint Work unselect.png";
import civil from "../../../images/Civil work unselect.png";
import paneling from "../../../images/Panelling unselect.png";
import electricalSelected from "../../../images/electrical selected.png";
import ceilingSelected from "../../../images/False celing selected.png";
import paintSelected from "../../../images/Paint Work selected.png";
import civilSelected from "../../../images/Civil work selected.png";
import panelingSelected from "../../../images/Panelling selected.png";
import workSelectedContext from "../../../store/workSelected-context";
function getScreenWidth() {
  const { innerWidth: width } = window;
  return width;
}

const RenovationTypes = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  const [paintWorkSelected, setPaintWorkSelected] = useState(false);
  const [electricalWorkSelected, setElectricalWorkSelected] = useState(false);
  const [ceilingWorkSelected, setCeilingWorkSelected] = useState(false);
  const [panelWorkSelected, setPanelWorkSelected] = useState(false);
  const [civilWorkSelected, setCivilWorkSelected] = useState(false);
  const workSelectedCtx = useContext(workSelectedContext);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(getScreenWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
  const stepOne = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "24px",
    marginTop: "95px",
  };
  const stepOneMob = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "16px",
    marginTop: "0px",
  };
  const stepTwo = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "24px",
    marginTop: "80px",
  };
  const stepTwoMob = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "16px",
    marginRight: "0px",
  };
  const stepThree = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "24px",
    marginTop: "80px",
  };
  const stepThreeMob = {
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "16px",
    marginTop: "0px",
  };
  const stepText = {
    color: "#2E337F",
    fontFamily: "Inter",
    fontSize: "22px",
  };
  const stepTextMob = {
    color: "#2E337F",
    fontFamily: "Inter",
    fontSize: "14px",
  };
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
  const headingText = {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "12px",
    marginBottom: "32px",
    fontSize: "2em",
  };
  const services = {
    textAlign: "center",
    marginTop: "-59px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "20.4614px",
    color: "black",
  };
  const servicesSelected = {
    textAlign: "center",
    marginTop: "-59px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "20.4614px",
    color: "white",
  };
  const servicesMob = {
    textAlign: "center",
    marginTop: "-27%",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "100%",
    color: "black",
  };
  const servicesSelectedMob = {
    textAlign: "center",
    marginTop: "-27%",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "100%",
    color: "white",
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
  // const { pathname } = useLocation();
  return (
    <React.Fragment>
      {screenWidth > 600 && (
        <div className="container mt-3 ">
          <h1 style={textClass}>Renovation Calculator</h1>
          <div
            className="row mt-4  direction"
            style={{ margin: "auto", width: "auto" }}
          >
            <div
              className="col-md-9 margin shadow rounded mb-5"
              style={{ width: "75%" }}
            >
              <p style={headingText}>
                What all works do you want to get done ?
              </p>
              <div className="row">
                <div className="col-md-4">
                  {workSelectedCtx.selectedWorks.includes("Electrical") ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setElectricalWorkSelected(true);
                        workSelectedCtx.removeWork("Electrical");
                        localStorage.setItem("electricalWork", false);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={electricalSelected}
                        alt=""
                      />
                      <h5 style={servicesSelected}>Electrical</h5>
                    </div>
                  ) : (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setElectricalWorkSelected(true);
                        workSelectedCtx.addWork("Electrical");
                        localStorage.setItem("electricalWork", true);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={electrical}
                        alt=""
                      />
                      <h5 style={services}>Electrical</h5>
                    </div>
                  )}
                </div>

                <div className="col-md-4 margin">
                  {workSelectedCtx.selectedWorks.includes("False Ceiling") ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCeilingWorkSelected(true);
                        workSelectedCtx.removeWork("False Ceiling");
                        localStorage.setItem("falseCeiling", false);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={ceilingSelected}
                        alt=""
                      />
                      <h5 style={servicesSelected}>False Ceiling</h5>
                    </div>
                  ) : (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCeilingWorkSelected(true);
                        workSelectedCtx.addWork("False Ceiling");
                        localStorage.setItem("falseCeiling", true);
                      }}
                    >
                      <img className="mx-auto d-block" src={ceiling} alt="" />
                      <h5 style={services}>False Ceiling</h5>
                    </div>
                  )}
                  {/* <Link to="/ceiling">
                    <div>
                      <img className="mx-auto d-block" src={ceiling} alt="" />
                      <h5 style={services}>False Ceiling</h5>
                    </div>
                  </Link> */}
                </div>
                <div className="col-md-4 margin">
                  {workSelectedCtx.selectedWorks.includes("Paint Work") ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setPaintWorkSelected(true);
                        workSelectedCtx.removeWork("Paint Work");
                        localStorage.setItem("paintWork", false);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={paintSelected}
                        alt=""
                      />
                      <h5 style={servicesSelected}>Paint Work</h5>
                    </div>
                  ) : (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setPaintWorkSelected(true);
                        workSelectedCtx.addWork("Paint Work");
                        localStorage.setItem("paintWork", true);
                      }}
                    >
                      <img className="mx-auto d-block" src={paint} alt="" />
                      <h5 style={services}>Paint Work</h5>
                    </div>
                  )}
                  {/* <Link to="/paintWork"> */}
                  {/* </Link> */}
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4">
                  {workSelectedCtx.selectedWorks.includes(
                    "Tiling and Civil work"
                  ) ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCivilWorkSelected(true);
                        workSelectedCtx.removeWork("Tiling and Civil work");
                        localStorage.setItem("tilingAndCivilWork", false);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={civilSelected}
                        alt=""
                      />
                      <h5 style={servicesSelected}>Tiling and Civil work</h5>
                    </div>
                  ) : (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCivilWorkSelected(true);
                        workSelectedCtx.addWork("Tiling and Civil work");
                        localStorage.setItem("tilingAndCivilWork", true);
                      }}
                    >
                      <img className="mx-auto d-block" src={civil} alt="" />
                      <h5 style={services}>Tiling and Civil work</h5>
                    </div>
                  )}
                  {/* <Link to="/civilWork">
                    <div>
                      <img className="mx-auto d-block" src={civil} alt="" />
                      <h5 style={services}>Tiling and Civil work</h5>
                    </div>
                  </Link> */}
                </div>
                <div className="col-md-4 margin">
                  {workSelectedCtx.selectedWorks.includes(
                    "Partition & Panelling"
                  ) ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setPanelWorkSelected(true);
                        workSelectedCtx.removeWork("Partition & Panelling");
                        localStorage.setItem("partitionAndPanelling", false);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={panelingSelected}
                        alt=""
                      />
                      <h5 style={servicesSelected}>Partition & Panelling</h5>
                    </div>
                  ) : (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setPanelWorkSelected(true);
                        workSelectedCtx.addWork("Partition & Panelling");
                        localStorage.setItem("partitionAndPanelling", true);
                      }}
                    >
                      <img className="mx-auto d-block" src={paneling} alt="" />
                      <h5 style={services}>Partition & Panelling</h5>
                    </div>
                  )}
                  {/* <Link to="/paneling">
                    <div>
                      <img className="mx-auto d-block" src={paneling} alt="" />
                      <h5 style={services}>Patrition & Panelling</h5>
                    </div>
                  </Link> */}
                </div>
                <div className="d-flex justify-content-between mt-4 mb-3 ps-5 pe-5">
                  <Link to="/renovationCalculator">
                    <button type="button" style={backBtn}>
                      Back
                    </button>
                  </Link>
                  <Link to="/electrical">
                    <button type="button" style={startBtn}>
                      Next
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="d-flex justify-content-evenly ">
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
        <div className="container mt-3">
          <h1 style={textClassMob}>Renovation Calculator</h1>
          <div className="row mt-3  direction">
            <div className="col-md-8 margin shadow rounded">
              <p style={headingText}>
                What all works do you want to get done ?
              </p>
              <div className="row">
                <div className="col-md-4 d-flex">
                  {workSelectedCtx.selectedWorks.includes("Electrical") ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setElectricalWorkSelected(true);
                        workSelectedCtx.removeWork("Electrical");
                        localStorage.setItem("electricalWork", false);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={electricalSelected}
                        alt=""
                      />
                      <h5 style={servicesSelectedMob}>Electrical</h5>
                    </div>
                  ) : (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setElectricalWorkSelected(true);
                        workSelectedCtx.addWork("Electrical");
                        localStorage.setItem("electricalWork", true);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={electrical}
                        alt=""
                      />
                      <h5 style={servicesMob}>Electrical</h5>
                    </div>
                  )}
                  {/* <Link to="/electrical">
                    <div className="">
                      <img
                        className="mx-auto d-block"
                        src={electrical}
                        alt=""
                      />
                      <h5 style={servicesMob}>Electrical</h5>
                    </div>
                  </Link> */}
                  {workSelectedCtx.selectedWorks.includes("False Ceiling") ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCeilingWorkSelected(true);
                        workSelectedCtx.removeWork("False Ceiling");
                        localStorage.setItem("falseCeiling", false);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={ceilingSelected}
                        alt=""
                      />
                      <h5 style={servicesSelectedMob}>False Ceiling</h5>
                    </div>
                  ) : (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCeilingWorkSelected(true);
                        workSelectedCtx.addWork("False Ceiling");
                        localStorage.setItem("falseCeiling", true);
                      }}
                    >
                      <img className="mx-auto d-block" src={ceiling} alt="" />
                      <h5 style={servicesMob}>False Ceiling</h5>
                    </div>
                  )}
                  {/* <Link to="/ceiling">
                    <div>
                      <img className="mx-auto d-block" src={ceiling} alt="" />
                      <h5 style={servicesMob}>False Ceiling</h5>
                    </div>
                  </Link> */}
                </div>
                <div className="col-md-6 d-flex" style={{ marginTop: "9%" }}>
                  {workSelectedCtx.selectedWorks.includes(
                    "Tiling and Civil work"
                  ) ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCivilWorkSelected(true);
                        workSelectedCtx.removeWork("Tiling and Civil work");
                        localStorage.setItem("tilingAndCivilWork", false);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={civilSelected}
                        alt=""
                      />
                      <h5 style={servicesSelectedMob}>Tiling and Civil work</h5>
                    </div>
                  ) : (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCivilWorkSelected(true);
                        workSelectedCtx.addWork("Tiling and Civil work");
                        localStorage.setItem("tilingAndCivilWork", true);
                      }}
                    >
                      <img className="mx-auto d-block" src={civil} alt="" />
                      <h5 style={servicesMob}>Tiling and Civil work</h5>
                    </div>
                  )}
                  {/* <Link to="/civilWork">
                    <div>
                      <img className="mx-auto d-block" src={civil} alt="" />
                      <h5 style={servicesMob}>
                        Tiling and Civil
                        <br /> work
                      </h5>
                    </div>
                  </Link> */}
                  {workSelectedCtx.selectedWorks.includes(
                    "Partition & Panelling"
                  ) ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setPanelWorkSelected(true);
                        workSelectedCtx.removeWork("Partition & Panelling");
                        localStorage.setItem("partitionAndPanelling", false);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={panelingSelected}
                        alt=""
                      />
                      <h5 style={servicesSelectedMob}>Patrition & Panelling</h5>
                    </div>
                  ) : (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setPanelWorkSelected(true);
                        workSelectedCtx.addWork("Partition & Panelling");
                        localStorage.setItem("partitionAndPanelling", true);
                      }}
                    >
                      <img className="mx-auto d-block" src={paneling} alt="" />
                      <h5 style={servicesMob}>Patrition & Panelling</h5>
                    </div>
                  )}
                  {/* <Link to="/paneling">
                    <div>
                      <img className="mx-auto d-block" src={paneling} alt="" />
                      <h5 style={servicesMob}>
                        Patrition &<br /> Panelling
                      </h5>
                    </div>
                  </Link> */}
                </div>
                <div
                  className="col-md-6 d-flex"
                  style={{ width: "53%", marginTop: "9%" }}
                >
                  {workSelectedCtx.selectedWorks.includes("Paint Work") ? (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setPaintWorkSelected(true);
                        workSelectedCtx.removeWork("Paint Work");
                        localStorage.setItem("paintWork", false);
                      }}
                    >
                      <img
                        className="mx-auto d-block"
                        src={paintSelected}
                        alt=""
                      />
                      <h5 style={servicesSelectedMob}>Paint Work</h5>
                    </div>
                  ) : (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setPaintWorkSelected(true);
                        workSelectedCtx.addWork("Paint Work");
                        localStorage.setItem("paintWork", true);
                      }}
                    >
                      <img className="mx-auto d-block" src={paint} alt="" />
                      <h5 style={servicesMob}>Paint Work</h5>
                    </div>
                  )}
                  {/* <Link to="/paintWork">
                    <div>
                      <img className="mx-auto d-block" src={paint} alt="" />
                      <h5 style={servicesMob}>Paint Work</h5>
                    </div>
                  </Link> */}
                </div>

                <div className="d-flex justify-content-between mt-5 mb-3 ps-5 pe-5">
                  <Link to="/renovationCalculator">
                    <button type="button" style={backBtn}>
                      Back
                    </button>
                  </Link>
                  <Link to="/electrical">
                    <button type="button" style={startBtn}>
                      Next
                    </button>
                  </Link>
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

export default RenovationTypes;
