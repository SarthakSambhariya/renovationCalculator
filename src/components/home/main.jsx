import React, { useEffect, useState } from "react";
import browsedesign from "./images/browsedesign.png";
import findinterior from "./images/findinterior.png";
import getstarted from "./images/getstarted.png";
import gstarted from "./images/gstarted.png";
import hidden from "./images/hidden.png";
import vetted from "./images/vetted.png";
import personalized from "./images/personalized.png";
import cities from "./images/cities.png";
import rectangle_4035 from "./images/rectangle_4035.png";
import mumbai from "./images/mumbai.png";
import hyderabad from "./images/hyderabad.png";
import delhi_selected from "./images/delhi_selected.png";
import bengalore from "./images/bengalore.png";
import ahemdabad_unselected from "./images/ahemdabad_unselected.png";
import chennai from "./images/chennai.png";
import pune from "./images/pune.png";
import kolkata from "./images/kolkata.png";
import compare from "./images/compare.png";
import finalbill from "./images/finalbill.png";
import google from "./images/google.png";
import fb from "./images/fb.png";
import Change1 from "./images/Group 1687.svg";
import Change2 from "./images/Group 1688.svg";
import Change3 from "./images/Group 1686.svg";
import kitch from "./images/kitch.jpg";
import space from "./images/space.jpg";
import theme from "./images/theme.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAngleRight,
  faAngleLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import tst from "../../components/home/images/thumbsup.svg";
import kitchen from "./images/kitchen.png";
import location_searching from "./images/location_searching.png";
import fdesigner from "./images/fdesigner.png";
import DesignerSlider from "./designerslider";
import DesignerModal from "./designermodal";
import DesignerListing from "../../components/findprofessional/designerlisting";
import constants from "../../services/constants";
import { Link } from "react-router-dom";
import Testimonal from "../testimonal/testimonal";
import { Spinner } from "react-bootstrap";
import magazineservice from "../../services/magazineservice";
import authService from "../../services/authService";
import main from "../../mobile/css/main.css";
import b2bservice from "../../services/b2bservice";
// import { requestCall } from "../../services/requestcall";
const Main = ({ mobileView }) => {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState(false);
  const [magazine, setMagazine] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState(''); 
  const getInit = async () => {
    const projectsJson = await b2bservice.getlistProjects();
    const magResponse = await magazineservice.getBlogsLimit();
    setMagazine(magResponse);
    setProjects(projectsJson);
  };
  useEffect(() => {
    getInit();
    const token = authService.getToken();
    token ? setUser(true) : setUser(false);
  }, []);
  const submitData= (e) =>{
    e.preventDefault()
    const  data = {
      name: name,
      phone: phone,
      email: email,
      city: city,
      title: title,
      message: message
    }
    // requestCall(data)
  }
  return (
    <>
      <section className="renov">
        <div className="row">
          <div className="col-md-8 col-sm-12 renovate">
            <div className="container">
            <div className="row justify-content-center">
              <div className="col-9 home-renovate">
                <h2 className="dm-serif change">Looking to renovate your home?</h2>
                <p className="mt-5 fs-6 inter">
                  Find reliable design professionals near you. <br />{" "}
                  <b>Compare design fees</b> & browse projects
                </p>
                <Link className="pe-auto getstarted" to="">
                  <img
                    src={gstarted}
                    alt=""
                    className="mt-5 fs-4 getstarted"
                    data-bs-toggle="modal"
                    data-bs-target={user ? "#successmodal" : "#getstartedmodal"}
                  />
                </Link>
                <DesignerModal />
              </div>
            </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 design-professional">
            <div className="row justify-content-center">
              <div className="col-9 desiprof text-light">
                <h2 className="text-light dp-size change">
                  Are you a Design Professional ?
                </h2>
                <p className="mt-4 mb-3 fs-6 inter">
                  Join iDesign Pro to get access to Business Tools, CRM and much
                  more.
                </p>
                <a
                  href="https://pro.idesign.market/products"
                  className="text-light fs-6"
                >
                  <b className="learn_more ">Learn more</b>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
                <div className="input-group mb-3 mt-5">
                  {/* <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon2"
                  /> 
                  <span
                    className="input-group-text green text-light"
                    id="basic-addon2"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                    (window.location.href =
                      "https://pro.idesign.market/login")
                    }
                  >
                    &#x22D9;
                  </span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="works mt-3">
        <div className="container mt-5">
          <h1 className="text-center fw-bolder how_chnge lighter">How it works?</h1>
          <div className="row justify-content-center text-center mt-4">
            <div className="col-md-10 col-sm-12 displayn">
              <div className="row">
                <div className="col-md-4 col-sm-12 align-self-end">
                  <div className="card align-self-end cards__chnge_how">
                    <img
                      src={findinterior}
                      className=" edit_img_how "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b> Find Interior Designers</b>
                        </p>
                        <p className="inter">
                        Explore Design professionals in your city.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 align-self-end">
                  <div className="card align-self-end cards__chnge_how ">
                    <img
                     src={browsedesign} 
                      className=" edit_img_how "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b>Browse Design Projects</b>
                        </p>
                        <p className="inter">
                        Find projects to your liking and wishlist.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 align-self-end">
                  <div className="card align-self-end cards__chnge_how ">
                    <img
                      src={getstarted}
                      className=" edit_img_how "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b>Get Started with Interiors</b>
                        </p>
                        <p className="inter">
                        Immediately connect and get started.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="">
                      <p className="fs-6 inter mt-5">
                        <b>Compare</b> Quotes
                      </p>
                      <p className="mt-3 inter">
                        Not sure which Quotation is best ? ask us
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="">
                      <p className="fs-6 inter mt-5">
                        <b>Final Billing</b>
                      </p>
                      <p className="mt-3 inter">
                        Just got a long bill from the Contractor ? We can check
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="">
                      <p className="fs-6  inter mt-5">
                        Nothing is <b>Hidden</b>
                      </p>
                      <p className="mt-3 inter">
                        Find designers based on design fees
                      </p>
                    </div>
                </div> */}

              {/* <button
                type="button"
                className="btn green text-light ps-4 pe-4 m-lg-5 interfont"
                onClick={() => (window.location.href = "/idesignexclusive")}
                style={{ cursor: "pointer" }}
              >
                Learn more
              </button> */}
            </div>
{/* mobile view---------------------------------------------------------------------- */}
            <div className="col-md-9 col-sm-12 displaydn">
              <div className="row mb-5">
                <div className="col-md-4 col-sm-12 align-self-end">
                  <div className="card align-self-end cards__chnge_how">
                    <img
                      src={findinterior}
                      className=" edit_img_how "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b>Find Interior Designers  </b>
                        </p>
                        <p className="inter explore_spell">
                        Explore Design professionals in your city.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 align-self-end mt-3">
                  <div className="card align-self-end cards__chnge_how ">
                    <img
                      src={browsedesign} 
                      className=" edit_img_how "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b>Browse Design Projects</b>
                        </p>
                        <p className="inter explore_spell">
                        Find projects to your liking and wishlist.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 align-self-end mt-3">
                  <div className="card align-self-end cards__chnge_how ">
                    <img
                      src={getstarted}
                      className=" edit_img_how "
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b>Get Started with Interiors</b>
                        </p>
                        <p className="inter explore_spell">
                        Immediately connect and get started.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>




          {/* <div className="scrollmenu displaydn p-2">
            <div className="p-1 m-1 mob-shadow d-inline-block w-50 MobBox">
              <div className="ws text-center">
                <img src={findinterior} alt="" width="100" />
                <div className="card-body card-body-main">
                  <span className="card-text">
                    <p>
                      <b>Find Interior Designers</b>
                    </p>
                    Lorem Ipsum is simply dummy text.
                  </span>
                </div>
              </div>
            </div>
            <div className="p-1 m-1 mob-shadow d-inline-block w-50 MobBox">
              <div className="ws text-center">
                <img src={browsedesign} alt="" width="100" />
                <div className="card-body card-body-main">
                  <span className="card-text">
                    <p>
                      <b>Get Started with Interiors</b>
                    </p>
                    Lorem Ipsum is simply dummy text.
                  </span>
                </div>
              </div>
            </div>
            <div className="p-1 m-1 mob-shadow d-inline-block w-50 MobBox">
              <div className="ws text-center">
                <img src={getstarted} alt="" width="100" />
                <div className="card-body card-body-main">
                  <span className="card-text">
                    <p>
                      <b>
                        Make <br /> Payment
                      </b>
                    </p>
                    Lorem Ipsum is simply dummy text.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center displayn">
            <div className="col-md-4 col-sm-12 text-center row-col-mobile">
              <div className="main-shadow">
                <img src={findinterior} alt="" className="w50" />
                <div className="mt-lg-3 work">
                  <h5 className="inter h5_fnd">Find Interior Designers</h5>
                  <p className="mt-3  inter">
                  Explore Design professionals in your city.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center row-col-mobile">
              <div className="main-shadow">
                <img src={browsedesign} alt="" className="w50" />
                <div className="mt-lg-3 work">
                  <h5 className="inter h5_fnd">Browse Design Projects</h5>
                  <p className="mt-3  inter">
                  Find projects to your liking and wishlist.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center row-col-mobile">
              <div className="main-shadow">
                <img src={getstarted} alt="" className="w50" />
                <div className="mt-lg-3 work">
                  <h5 className="inter h5_fnd">Get Started with Interiors</h5>
                  <p className="mt-3  inter">
                  Immediately connect and get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div> */}
        </div>
      </section>

      <section className="professional martop">
        <div className="container location-img">
          <h1 className="text-center fw-bolder">Find professionals</h1>
          <p className="mt-3  text-muted text-center fs-4 inter">
            Contact thousands of experts from one single directory <br></br>{" "}
            <br></br>
          </p>
          <p
            onClick={() => (window.location.href = "/findprofessionals")}
            style={{ cursor: "pointer" }}
            className="chngeviewall inter text-end"
          >
            <b className="view_chnge d-flex justify-content-end" style={{ color: "#a7a7a7"}}>
              View All
            </b>
            {/* float-end fs-4 pt-3 blue-text */}
          </p> <br />
          <div className="">
            {/* {mobileView ? (
              <DesignerSlider />
            ) : (
              
            ) : ( */}
              <div className="row">
                <div className="col-sm-4 mb-3">
                  <div className="professional-card">
                    <img src={space} alt="" width="100" />
                    <div className="findbox">
                      <h6 className="w-75 inter p-2 hchnge">
                        <b>Interior Designers & <br /> Architects</b>
                      </h6>
                      <span
                        onClick={() =>
                          (window.location.href = "/findprofessionals")
                        }
                        style={{ cursor: "pointer" }}
                        className="blue p-1 w-25 fs-4 m-1 text-light text-center rounded"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="professional-card">
                    <img src={theme} alt="" width="100" />
                    <div className="findbox">
                      <h6 className="w-75 inter p-2 hchnge">
                        <b>Contractors</b>
                      </h6>
                      <span
                        onClick={() =>
                          (window.location.href = "/findprofessionals/contractor")
                        }
                        style={{ cursor: "pointer" }}
                        className="blue p-1 w-25 fs-4 m-1 text-light text-center rounded"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 mb-3">
                  <div className="professional-card">
                    <img src={kitch} alt="" width="100" />
                    <div className="findbox">
                      <h6 className="w-75 inter p-2 hchnge">
                        <b>
                          Kitchen Wardrobe <br /> Factories
                        </b>
                      </h6>
                      <span
                        onClick={() =>
                          (window.location.href = "/findprofessionals")
                        }
                        style={{ cursor: "pointer" }}
                        className="blue p-1 w-25 fs-4 m-1 text-light text-center rounded"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
          

            {/* )} */}
          </div>
        </div>
      </section>
      <section className="exproject martop">
        <div className="container text-center">
          <h1 className="fw-bolder">Explore Projects</h1>
          <div className="container ">
            <div className="row justify-content-center mt-5">
              {projects.length > 0 &&
                projects.map((p) => (
                  <div
                    className="col-lg-4 col-xs-6 p-1 removediv"
                    style={{ cursor: "pointer" }}
                    onClick={() => (window.location.href = "/exploreprojects")}
                  >
                    <img
                      src={
                        p.data.length > 0 ? p.data[0] !== null && p.data[0]["images"].length !== null
                          ? p.data[0]["images"][0] !== null && p.data[0]["images"][0]["original"]
                          : "" : ""
                      }
                      alt=""
                      className="imgexplore"
                    />
                  </div>
                ))}
              <div
                className="col-lg-4 col-xs-12 p-1"
                onClick={() => (window.location.href = "/exploreprojects")}
                style={{ cursor: "pointer" }}
              >
                <div className="blue  explore-box">
                  <p className="text-light pt-lg-4 pb-lg-4 inter">
                    <b>13</b> <span className="cities_color">Cities, </span>{" "}
                    <br />
                    <b>30,000+ </b>
                    <span className="cities_color"> Professionals,</span> <br />
                    <b>100,000+</b>
                    <span className="cities_color"> Projects. </span>
                  </p>
                  <p className="text-light pt-lg-4 pb-lg-4 fs-4 rounded inter explore6">
                    Explore Project <FontAwesomeIcon icon={faArrowRight} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="imphome martop">
        <div className="container pt-5 text-center">
          <h1 className="fw-bolder textwhite textblack">
            We understand how important a Home is, <br /> so we go beyond the
            obvious.
          </h1>
          <p className="p-4 inter textwhite textblack">
            iDesign gets you exclusive benefits, giving you more control and
            helping you better manage your interior
          </p>
          <div className="row justify-content-center text-center mt-4">
            <div className="col-md-10 col-sm-12 displayn">
              <div className="row">
                <div className="col-md-4 col-sm-12 align-self-end">
                  <div className="card align-self-end cards__chnge">
                    <img
                      src={Change1}
                      className="card-img-top edit_img"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b> Compare Quotes </b>
                        </p>
                        <p className="inter">
                          Getting too many quotes ? We can help you decide which
                          works best
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 align-self-end">
                  <div className="card align-self-end cards__chnge ">
                    <img
                      src={Change2}
                      className="card-img-top edit_img"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b>Final Billing</b>
                        </p>
                        <p className="inter">
                          Just got a long bill from the Contractor? We can check
                          on it
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 align-self-end">
                  <div className="card align-self-end cards__chnge ">
                    <img
                      src={Change3}
                      className="card-img-top edit_img"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b>Nothing is Hidden</b>
                        </p>
                        <p className="inter">
                          Find professionals based on their design fees and
                          experience
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="">
                      <p className="fs-6 inter mt-5">
                        <b>Compare</b> Quotes
                      </p>
                      <p className="mt-3 inter">
                        Not sure which Quotation is best ? ask us
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="">
                      <p className="fs-6 inter mt-5">
                        <b>Final Billing</b>
                      </p>
                      <p className="mt-3 inter">
                        Just got a long bill from the Contractor ? We can check
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="">
                      <p className="fs-6  inter mt-5">
                        Nothing is <b>Hidden</b>
                      </p>
                      <p className="mt-3 inter">
                        Find designers based on design fees
                      </p>
                    </div>
                  </div>
                </div> */}
              <button
                type="button"
                className="btn green text-light ps-4 pe-4 m-lg-5 interfont"
               // onClick={() => (window.location.href = "/idesignexclusive")}
                style={{ cursor: "pointer" }}
              >
                Learn more  
              </button>
            </div>
            <div className="col-md-9 col-sm-12 displaydn">
              <div className="row mb-5">
                <div className="col-md-4 col-sm-12 align-self-end">
                  <div className="card align-self-end cards__chnge">
                    <img
                      src={Change1}
                      className="card-img-top edit_img"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b> Compare Quotes </b>
                        </p>
                        <p className="inter">
                          Getting too many quotes ? We can help you decide which
                          works best
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 align-self-end mt-3">
                  <div className="card align-self-end cards__chnge ">
                    <img
                      src={Change2}
                      className="card-img-top edit_img"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b>Final Billing</b>
                        </p>
                        <p className="inter">
                          Just got a long bill from the Contractor? We can check
                          on it
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 align-self-end mt-3">
                  <div className="card align-self-end cards__chnge ">
                    <img
                      src={Change3}
                      className="card-img-top edit_img"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <p className="change_cont inter">
                          <b>Nothing is Hidden</b>
                        </p>
                        <p className="inter">
                          Find professionals based on their design fees and
                          experience
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn green text-light ps-4 pe-4 interfont"
               //onClick={() => (window.location.href = "/idesignexclusive")}
                style={{ cursor: "pointer" }}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* magazine */}
      {magazine.length > 4 && (
        <section className="magazine">
          <div className="container text-center">
            <h1 className="fw-bolder">Magazine</h1>
            <div className="row justify-content-center mt-5">
              <div className="col-md-5">
                <div className="box1">
                  <div className="w2-card-2">
                    <img
                      src={constants.apiurl + magazine[0]["image"]}
                      className="rounded-top"
                    />
                    <div className="w2-container text-light blue p-3 rounded-bottom">
                      <p className="interfont">iDesign Top 20</p>
                      <h5 className="play">
                        <i>{magazine[0]["title"]}</i>
                      </h5>
                      <p className="interfont">Read More</p>
                    </div>
                  </div>
                </div>
                <div className="box2 text-light mt-2 rounded" id="webmag">
                  <Link to="/magazines">
                    <h4 className="text-light">
                      <i> Explore Magazine</i>
                    </h4>
                  </Link>
                </div>
              </div>
              <div className="col-md-5">
                <div className="row box3">
                  <div className="col-md-6 col-xs-6">
                    <img
                      src={constants.apiurl + magazine[1]["image"]}
                      className="rounded-top"
                    />
                    <div className="w3-container text-light p-2 rounded-bottom">
                      <p className="interfont">iDesign Top 20</p>
                      <p className="play">
                        <i>{magazine[1]["title"]}</i>
                      </p>
                      <p className="interfont">Read More</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-6">
                    <img
                      src={constants.apiurl + magazine[2]["image"]}
                      className="rounded-top"
                    />
                    <div className="w3-container text-light p-2 rounded-bottom">
                      <p className="interfont">iDesign Top 20</p>
                      <p className="play">
                        <i>{magazine[2]["title"]}</i>
                      </p>
                      <p className="interfont">Read More</p>
                    </div>
                  </div>
                </div>
                <div className="box1 mt-2">
                  <div className="w2-card-2">
                    <img src={constants.apiurl + magazine[3]["image"]} />
                    <div className="w2-container text-light blue p-3 rounded-bottom">
                      <p className="interfont">iDesign Top 20</p>
                      <h5 className="play">
                        <i>{magazine[3]["title"]}</i>
                      </h5>
                      <p className="interfont">Read More</p>
                    </div>
                  </div>
                </div>
                {/* <div className="box2 text-light mt-2 rounded" id="mobilemag">
                  <Link to="/magazines">
                    <h4 className="text-light">
                      <i> Explore Magazine</i>
                    </h4>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      )}
      <Testimonal />
      <section className="question blue">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-4 py-4 py-md-5 aside-stretch text-center text-light">
              <h1 style={{ fontWeight: "600" }}>Got any questions ?</h1>
            </div>
            <div className="col-md-4 py-4 py-md-5 mt-2 text-end">
              <button
                type="button"
                className="btn btn-sm btn-light"
                data-bs-toggle="modal"
                data-bs-target="#requestCall" id="you"
                style={{ cursor: "pointer" }}
              >
                <p className="fs-6 inter">Request a Call back</p>
              </button>
              <div
                className="modal fade"
                id="requestCall"
                tabIndex="-1"
                aria-labelledby="requestCall"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    {/* <div className="modal-header border-0">
                      <h5 className="modal-title" id="requestCall">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close text-dark"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div> */}
                    <div className="modal-body">
                      <div className="modal-body">
                      <button
                        type="button"
                        className="btn-close text-dark float-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                        <h3 className="text-center">
                          <b>Request a Call Back</b>
                        </h3>
                       
                        <div className="row">
                          <div className="col-sm-12 mb-3 mt-3">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="colFormLabelLg"
                              placeholder="Enter Name"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="input-group input-group-lg mb-3">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-lg"
                            >
                              +91
                            </span>
                            <input
                             type="number"
                              className="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-lg"
                              placeholder="Enter Phone Number"
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                          <div className="col-sm-12 mb-3">
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              id="colFormLabelLg"
                              placeholder="Email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="col-sm-12 mb-3">
                          <input
                              type="name"
                              className="form-control form-control-lg"
                              id="colFormLabelLg"
                              placeholder="City"
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                          <div className="col-sm-12 mb-3">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              id="colFormLabelLg"
                              placeholder="Enter a Title"
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </div>
                          <div className="col-sm-12 mb-3">
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              placeholder="Type in your message..."
                              onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 text-center">
                      <button
                        type="button"
                        className="btn blue text-light ps-3  pe-3 sub_cheat"
                        data-bs-dismiss="modal"
                        onClick={submitData}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="btn-fixed displaydn">
        <button
          className="btn grey w-50 rounded-0 bright"
          type="button"
          onClick={() => (window.location.href = "/findprofessionals")}
        >
          Find Designers
        </button>
        <button
          className="btn grey w-50 rounded-0"
          type="button"
          onClick={() => (window.location.href = "https://pro.idesign.market")}
        >
          Join as Pro
        </button>
      </div>
    </>
  );
};
export default Main;