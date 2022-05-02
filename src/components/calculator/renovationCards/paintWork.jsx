import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import extensive from "../Assets/extensive.svg";
import workSelectedContext from "../../../store/workSelected-context";
function getScreenWidth() {
  const { innerWidth: width } = window;
  return width;
}
const PaintWork = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
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
  const navText = {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "15px",
    textAlign: "center",
    color: "#141414",
    marginTop: "19px",
  };
  const navTextMob = {
    width: "100%",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "13px",
    textAlign: "center",
    color: "#141414",
    marginTop: "19px",
  };
  const icon = {
    width: "30px",
    height: "25px",
    marginRight: "10px",
    marginTop: "4px",
  };
  const electricName = {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "24px",
    color: "#2E337F",
  };
  const electricText = {
    fontFamily: "Inter",
    fontWeight: "500",
    fontSize: "16px",
    color: "#3D3C3C",
    marginBottom: "17px",
  };
  const leftText = {
    textAlign: "left",
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: "16px",
    color: "#3D3C3C",
  };
  const paint = [
    {
      name: "Low",
      image: "https://i.ibb.co/VSdkpFw/Group.png",
      text: "Includes basic works like touch up in the rooms, and very minimal base and paint work",
    },
    {
      name: "Standard",
      image: "https://i.ibb.co/3hH4XLZ/Group-1.png",
      text: "Includes regular works like base preparation and full coat of paint",
    },
    {
      name: "Extensive",
      image: `${extensive}`,
      text: "Includes extensive works likeI base preparation, full coat of paint and also some wall textures and color blocking",
    },
  ];
  return (
    <React.Fragment>
      {screenWidth > 600 && (
        <div className="container mt-5">
          <h1 style={textClass}>Renovation Calculator</h1>
          <div className="row mt-3">
            <div className="col-md-9 shadow rounded">
              <div className="d-flex">
                {workSelectedCtx.selectedWorks.includes("Electrical") && (
                  <Link to="/electrical" style={{ margin: "0 4%" }}>
                    <p style={navText}>Electrical</p>
                  </Link>
                )}
                {workSelectedCtx.selectedWorks.includes("False Ceiling") && (
                  <Link to="/ceiling" style={{ margin: "0 4%" }}>
                    <p style={navText}>False Ceiling</p>
                  </Link>
                )}
                {workSelectedCtx.selectedWorks.includes("Paint Work") && (
                  <Link to="/paintwork" style={{ margin: "0 4%" }}>
                    <p className="title">Paint Work</p>
                  </Link>
                )}
                {workSelectedCtx.selectedWorks.includes(
                  "Tiling and Civil work"
                ) && (
                  <Link to="/civilWork" style={{ margin: "0 4%" }}>
                    <p style={navText}>Tiling and Civil Work</p>
                  </Link>
                )}
                {workSelectedCtx.selectedWorks.includes(
                  "Partition & Panelling"
                ) && (
                  <Link to="/paneling" style={{ margin: "0 4%" }}>
                    <p style={navText}>Partition and Panelling</p>
                  </Link>
                )}
              </div>
              <hr />
              <div className="row">
                {/* electric start */}
                <div className="col-md-5 d-flex justify-content-evenly ps-5">
                  <img
                    src="https://i.ibb.co/8dXHgWp/bxs-paint-roll.png"
                    alt=""
                    style={icon}
                  />
                  <p style={leftText}>
                    Typically, consists of color selection, base preparation
                    with putty and application of 2 coats of paints
                  </p>
                </div>
                <div className="col-md-7 ">
                  {paint.map((data) => (
                    <div
                      className="shadow p-3 mb-3 bg-body rounded d-flex justify-content-evenly"
                      key={data.name}
                      onClick={() =>
                        localStorage.setItem(
                          "paintWorkPlanSelected",
                          `${data.name}`
                        )
                      }
                    >
                      <img src={data.image} style={icon} alt="" />
                      <div>
                        <h3 style={electricName}>{data.name}</h3>
                        <p style={electricText}>{data.text}</p>
                      </div>
                      <div className="form-check text-center">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* electric end */}
              <div className="d-flex justify-content-between mb-3 ps-5 pe-5">
                <Link to="/renovationTypes">
                  <button type="button" style={backBtn}>
                    Back
                  </button>
                </Link>
                <Link to="/paintWorkDetail">
                  <button type="button" style={startBtn}>
                    Next
                  </button>
                </Link>
              </div>
            </div>
            {/* progress bar */}
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
            <div className="col-md-9 shadow rounded">
              <div className="d-flex justify-content-between">
                {workSelectedCtx.selectedWorks.includes("Electrical") && (
                  <Link to="/electrical">
                    <p style={navTextMob}>Electrical</p>
                  </Link>
                )}
                {workSelectedCtx.selectedWorks.includes("False Ceiling") && (
                  <Link to="/ceiling">
                    <p style={navTextMob}>False Ceiling</p>
                  </Link>
                )}
                {workSelectedCtx.selectedWorks.includes("Paint Work") && (
                  <Link to="/paintwork">
                    <p className="titleMob">Paint Work</p>
                  </Link>
                )}
                {workSelectedCtx.selectedWorks.includes(
                  "Tiling and Civil work"
                ) && (
                  <Link to="/civilWork">
                    <p style={navTextMob}>Tiling and Civil Work</p>
                  </Link>
                )}
                {workSelectedCtx.selectedWorks.includes(
                  "Partition & Panelling"
                ) && (
                  <Link to="/paneling">
                    <p style={navTextMob}>Partition and Panelling</p>
                  </Link>
                )}
              </div>
              <hr style={{ position: "relative", bottom: "16px" }} />
              <div className="row">
                {/* electric start */}
                <div className="col-md-5 d-flex justify-content-evenly">
                  <img
                    src="https://i.ibb.co/8dXHgWp/bxs-paint-roll.png"
                    alt=""
                    style={icon}
                  />
                  <p className="mb-4" style={leftText}>
                    Typically, consists of color selection, base preparation
                    with putty and application of 2 coats of paints
                  </p>
                </div>
                <div className="col-md-7 ">
                  {paint.map((data) => (
                    <div
                      className="shadow p-3 mb-3 bg-body rounded d-flex justify-content-evenly"
                      key={data.name}
                      onClick={() =>
                        localStorage.setItem(
                          "paintWorkPlanSelected",
                          `${data.name}`
                        )
                      }
                    >
                      <img src={data.image} style={icon} alt="" />
                      <div>
                        <h3 style={electricName}>{data.name}</h3>
                        <p style={electricText}>{data.text}</p>
                      </div>
                      <div className="form-check text-center">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* electric end */}
              <div className="d-flex justify-content-between mb-3 ps-5 pe-5">
                <Link to="/renovationTypes">
                  <button type="button" style={backBtn}>
                    Back
                  </button>
                </Link>
                <Link to="/paintWorkDetail">
                  <button type="button" style={startBtn}>
                    Next
                  </button>
                </Link>
              </div>
            </div>
            {/* progress bar */}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PaintWork;
