import axios from "axios";
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
  const [nextDisabled, setNextDisabled] = useState(true);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(getScreenWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const appartemnt = 
  const save = async()=>{
    

    const bedroom= localStorage.getItem("bedroom")
    const bathroom=localStorage.getItem("bathroom")
    const kitchen=localStorage.getItem("kitchen")
    const living=localStorage.getItem("dining")
    const carpetArea=localStorage.getItem("carpetArea")
    const bungalow=(localStorage.getItem("propertyType")!=null  && localStorage.getItem("propertyType")=="bungalow" )?true:false
    const apartment=(localStorage.getItem("propertyType")!=null  && localStorage.getItem("propertyType")=="apartment" )?true:false
  
    const modularKitchen=localStorage.getItem("modularKitchenNeeded")
    const bedRoomWardrobes=localStorage.getItem("wardrobes")
    const tvUnits=localStorage.getItem("tvUnits")

    const electricalWork = (localStorage.getItem("electricalWork")!=null && localStorage.getItem("electricalWork")==true)?true : false 
    const falseCeilingWork = (localStorage.getItem("falseCeiling")!=null && localStorage.getItem("falseCeiling")==true)?true : false 
    const paintWork = (localStorage.getItem("paintWork")!=null && localStorage.getItem("paintWork")==true)?true : false 
    const tilingAndCivilWork = (localStorage.getItem("tilingAndCivilWork")!=null && localStorage.getItem("tilingAndCivilWork")==true)?true : false 
    const patritionAndpanellingWork = (localStorage.getItem("patritionAndpanellingWork")!=null && localStorage.getItem("patritionAndpanellingWork")==true)?true : false 

    const electricalLow=   (localStorage.getItem("electricalWorkPlanSelected")!=null  && localStorage.getItem("electricalWorkPlanSelected")=="Low" )?true:false
    const electricalStandard= (localStorage.getItem("electricalWorkPlanSelected")!=null  && localStorage.getItem("electricalWorkPlanSelected")=="Standard")?true:false
    const electricalExtensive= (localStorage.getItem("electricalWorkPlanSelected")!=null  && localStorage.getItem("electricalWorkPlanSelected")=="Extensive" )?true:false
    

    const FalseCeilingLow= (localStorage.getItem("falseCeilingWorkSelected")!=null  && localStorage.getItem("falseCeilingWorkSelected")=="Low" )?true:false
    const FalseCeilingStandard= (localStorage.getItem("falseCeilingWorkSelected")!=null  && localStorage.getItem("falseCeilingWorkSelected")=="Standard" )?true:false
    const FalseCeilingExtensive= (localStorage.getItem("falseCeilingWorkSelected")!=null  && localStorage.getItem("falseCeilingWorkSelected")=="Extensive" )?true:false

    const PaintWorkLow= (localStorage.getItem("paintWorkSelected")!=null  && localStorage.getItem("paintWorkSelected")=="Low" )?true:false
    const PaintWorkStandard= (localStorage.getItem("paintWorkSelected")!=null  && localStorage.getItem("paintWorkSelected")=="Standard" )?true:false
    const PaintWorkExtensive= (localStorage.getItem("paintWorkSelected")!=null  && localStorage.getItem("paintWorkSelected")=="Extensive" )?true:false

    const TilingAndCivilLow= (localStorage.getItem("tilingAndCivilWorkSelected")!=null  && localStorage.getItem("tilingAndCivilWorkSelected")=="Low" )?true:false
    const TilingAndCivilStandard= (localStorage.getItem("tilingAndCivilWorkSelected")!=null  && localStorage.getItem("tilingAndCivilWorkSelected")=="Standard")?true:false
    const TilingAndCivilExtensive= (localStorage.getItem("tilingAndCivilWorkSelected")!=null  && localStorage.getItem("tilingAndCivilWorkSelected")=="Extensive" )?true:false

    const PatritionAndpanellingLow= (localStorage.getItem("patritionAndpanellingWorkSelected")!=null  && localStorage.getItem("patritionAndpanellingWorkSelected")=="Low")?true:false
    const PatritionAndpanellingStandard= (localStorage.getItem("patritionAndpanellingWorkSelected")!=null  && localStorage.getItem("patritionAndpanellingWorkSelected")=="Standard" )?true:false
    const PatritionAndpanellingExtensive= (localStorage.getItem("patritionAndpanellingWorkSelected")!=null  && localStorage.getItem("patritionAndpanellingWorkSelected")=="Extensive" )?true:false



    try {
      const response = await axios.post("https://reno-api.idesign.market/api/savecalculation",{
        "PropertyType":{
            "isApartment": apartment,
            "isBungalow": bungalow
    
        },
        "CarpetArea": carpetArea,
        "Areas_Renovate": {
            "Bedroom": bedroom,
            "Bathroom": bathroom,
            "Kitchen": kitchen,
            "Living": living
    
        },
        "WorksWeWant": {
            
            "Electrical": electricalWork,
            "FalseCeiling" : falseCeilingWork,
            "PaintWork": paintWork,
            "TilingAndCivil":tilingAndCivilWork,
            "PatritionAndpanelling": patritionAndpanellingWork
        },
        "Budget":{
            "Electrical": {
                "low": electricalLow,
                "Standard": electricalStandard,
                "Extensive": electricalExtensive
            },
            "FalseCeiling": {
              "low": FalseCeilingLow,
              "Standard": FalseCeilingStandard,
              "Extensive": FalseCeilingExtensive
          },
          "PaintWork": {
            "low":  PaintWorkLow,
            "Standard":  PaintWorkStandard,
            "Extensive":  PaintWorkExtensive
        },
        "TilingAndCivil": {
          "low": TilingAndCivilLow,
          "Standard": TilingAndCivilStandard,
          "Extensive": TilingAndCivilExtensive
      },
            "PatritionAndpanelling":{
              "low": PatritionAndpanellingLow,
              "Standard": PatritionAndpanellingStandard,
              "Extensive": PatritionAndpanellingExtensive
            }
        },
            "ModularSolution":{
                "ModularKitchen" : modularKitchen,
                "BedroomWardrobes": bedRoomWardrobes ,
                "TvUnits": tvUnits
            }
        }) 
        if(response)
        console.log(  'res'+response)
    } catch (error) {
      console.log(error)
    }


  }

  const saveInputsToLocalStorageHandler = () => {
    localStorage.setItem("wardrobes", wardrobesRef.current.value);
    localStorage.setItem("tvUnits", tvUnitsRef.current.value);
   save();
  };

  // const data = {

  // }

  

  const nextButtonDisableHandler = () => {
    if (
      tvUnitsRef.current.value.trim() !== "" &&
      wardrobesRef.current.value.trim() !== "" &&
      localStorage.getItem("modularKitchenNeeded")
    )
      setNextDisabled(false);
    else {
      setNextDisabled(true);
    }
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
  const startBtnDisabled = {
    background:
      "linear-gradient(180deg, rgba(59, 89, 152, 0.5) 0%, rgba(8, 43, 118, 0.4) 100%)",
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
  // console.log(localStorage.getItem('bedroom'));
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
                          nextButtonDisableHandler();
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
                          nextButtonDisableHandler();
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
                      onChange={nextButtonDisableHandler}
                    />
                  </div>
                  <p style={formText}>How many TV Units do you require ?</p>
                  <div style={box}>
                    <input style={areasInput} disabled placeholder="TV Units" />
                    <input type="number" style={areasButton} ref={tvUnitsRef} onChange={nextButtonDisableHandler}/>
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
                          nextButtonDisableHandler();
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
                          nextButtonDisableHandler();
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
                      onChange={nextButtonDisableHandler}
                    />
                  </div>
                  <p style={formText}>How many TV Units do you require ?</p>
                  <div style={box}>
                    <input
                      style={areasInputMob}
                      disabled
                      placeholder="TV Units "
                    />
                    <input type="number" style={areasButton} ref={tvUnitsRef} onChange={nextButtonDisableHandler}/>
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
