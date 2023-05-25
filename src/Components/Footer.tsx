import styles from "@/styles/Footer.module.scss";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import Image from 'next/image'
import logoimg from "../assets/home/artxpro-whitee.png";
// import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaMailBulk,
  FaPhoneAlt,
  FaUserAlt,
  FaRegEnvelope,
  FaPhone,
  FaUserShield,
  FaPortrait,
  FaBuilding,
  FaDollarSign,
  FaPaperPlane,
  FaCalendarAlt,
} from "react-icons/fa";




function Footer() {
  const [act, setAct] = useState('contact')

  const [contact, setContact] = useState(true);
  const [project, setProject] = useState(false);
  const [job, setJob] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1080);

  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, [])

  // ----------------------------------------
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ shouldUseNativeValidation: true });
  const [cv, setCV] = useState();

  let initialVailue = {
    fullName1: "",
    fullName2: "",
    fullName3: "",
    email1: "",
    email2: "",
    email3: "",
    contact1: "",
    contact2: "",
    contact3: "",
    company1: "",
    company2: "",
    questions1: "",
    questions2: "",
    budget: "",
    date: "",
    appliedfor: "",
    fileupload: cv,
    portfolio: "",
  };
  // ---------------hutaib form +------------

  const [applicationform, setApplicationform] = useState(initialVailue);

  const getData = (e: any) => {
    e.preventDefault();
    setApplicationform({ ...applicationform, [e.target.name]: e.target.value });
    console.log("applicationform", applicationform);
    console.log(e.target.name, e.target.value);
  };
  const getDataFile = (e: any) => {
    setCV(e.target.files[0]);
  };
  const contacturl = "https://artxpro.com/api/form/contact";
  const careerurl = "https://artxpro.com/api/form/career";
  const quoteurl = "https://artxpro.com/api/form/quote";

  // https://artxpro.com/api/form/career
  const onSubmit = (data: any) => {
    // e.preventDefault();
    console.log(data)
  };



  return (
    <>
      <p className={styles.hed1} id='contact'>
        Get in Touch
        <br />
        We’ll get back to you
      </p>
      <div className={styles.Contactform}>
        <div className={styles.mapsec}>
          <div className={styles.mapright}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6679659587858!2d67.04869251498526!3d24.87518745079333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fb3bda6b35f%3A0xe9b296c9ba421d54!2sArtXPro%20Digital%20Marketing%20Agency%20%7C%20Social%20Media%20Marketing%20%7C%20Web%20Design%20%26%20Development%20Agency%20Karachi%20Pakistan!5e0!3m2!1sen!2s!4v1650281879217!5m2!1sen!2s"
              width="100%"
              height="400"
              className={styles.map}
              aria-hidden="false"
            ></iframe>
          </div>
          <div className={styles.mapleft}>
            <p className={styles.mappara}>
              Got a project in mind? We’d love to hear about it.
            </p>
            <div className={styles.mapinfo}>
              <div className={styles.faicon}>

                <FaMapMarkerAlt />
              </div>
              <div className={styles.para}>
                <p>
                  <span> Visit Us:</span> <br />
                  <a href="https://g.page/artxdigital?share" target='_blank' rel="noreferrer">
                    66 L, P.E.C.H.S Block 2 Karachi,{screenWidth > 600 ? <br /> : null} Sindh 75400
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.mapinfo}>
              <div className={styles.faicon}>
                <FaMailBulk />
              </div>
              <div className={styles.para}>
                <p>
                  <span>Mail Us: </span>
                  <br />
                  <a href="mailto:contact@artxpro.com">contact@artxpro.com</a>
                </p>
              </div>
            </div>
            <div className={styles.mapinfo}>
              <div className={styles.faicon}>
                <FaPhoneAlt />
              </div>
              <div className={styles.para}>
                <p>
                  <span>Phone Us: </span> <br />
                  <a href="tel:+92314-2165733">+92314-2165733</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------- */}
        {/* --------form--------------- */}
        <div style={{ display: 'grid', justifyContent: 'center' }}>
          <div className={styles.formsec}>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className={styles.contactform}>
                <ul className={contact ? styles.show : styles.hide}>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your FullName"
                      {...register("fullName1", {
                        required: "name is Required",
                        pattern: {
                          value:
                            /^(?!\s)([a-z]{2,}\s?[a-zA-Z]{1,})$/i,
                          message: "Invalid Name", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />
                    <FaUserAlt className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your Email Address"
                      {...register("email1", {
                        required: "email is Required",
                        // maxLength: 20,
                      })}
                    />
                    <FaRegEnvelope className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your Contact No."
                      {...register("contact1", {
                        required: "contact is Required",
                        maxLength: 20,
                        pattern: {
                          value:
                            /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
                          message: "error message", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />
                    <FaPhone className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      name="company"
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your Company Name"
                    />
                    <FaUserAlt className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <textarea
                      onKeyUp={getData}
                      required
                      className={styles.textarea}
                      placeholder="Ask Us Any Questions"
                      {...register("questions1", {
                        required: "questions",
                        // maxLength: 20,
                      })}
                    />
                    <FaUserAlt className={styles.icon1} />
                  </li>
                  <li className={styles.list1}>
                    <button onClick={onSubmit} className={styles.button}>
                      Submit Form
                    </button>
                  </li>
                </ul>
              </div>
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.postproject}>
                <ul className={project ? styles.show : styles.hide}>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your FullName"
                      {...register("fullName2", {
                        required: "name is Required",
                        pattern: {
                          value:
                            /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/i,
                          message: "Invalid Name", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />
                    <FaUserAlt className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your Email Address"
                      {...register("email2", {
                        required: "email is Required",
                        // maxLength: 20,
                      })}
                    />
                    <FaRegEnvelope className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your Contact No."
                      {...register("contact2", {
                        required: "contact is Required",
                        maxLength: 20,
                        pattern: {
                          value:
                            /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
                          message: "error message", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />
                    <FaPhone className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your Company Name"
                      {...register("company2", {
                        required: "company is Required",
                        pattern: {
                          value:
                            /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/i,
                          message: "Invalid Name", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />
                    <FaBuilding className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      type="number"
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Project Budget in US Dollar"
                      {...register("budget", {
                        required: "budget is Required",
                      })}
                    />
                    <FaDollarSign className={styles.icon1} />
                  </li>

                  <li className={styles.list}>
                    <textarea
                      onKeyUp={getData}
                      required
                      className={styles.textarea}
                      placeholder="Ask Us Any Questions"
                      {...register("questions2", {
                        required: "questions",
                        // maxLength: 20,
                      })}
                    />
                    <FaPaperPlane className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      type="date"
                      className={styles.inp}
                      placeholder="dae"
                      {...register("date", {
                        required: "date",
                        // maxLength: 20,
                      })}
                    />
                    <FaCalendarAlt className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <button onClick={onSubmit} className={styles.button}>
                      Submit Form
                    </button>
                  </li>
                </ul>
              </div>
            </form>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.applyforjob}>
                <ul className={job ? styles.show : styles.hide}>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your FullName"
                      {...register("fullName3", {
                        required: "name is Required",
                        pattern: {
                          value:
                            /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/i,
                          message: "Invalid Name", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />
                    <FaUserAlt className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your Email Address"
                      {...register("email3", {
                        required: "email is Required",
                        // maxLength: 20,
                      })}
                    />
                    <FaRegEnvelope className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your Contact No."
                      {...register("contact3", {
                        required: "contact is Required",
                        maxLength: 20,
                        pattern: {
                          value:
                            /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
                          message: "error message", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />
                    <FaPhone className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your appliedfor"
                      {...register("appliedfor", {
                        required: "appliedfor is Required",
                        pattern: {
                          value:
                            /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/i,
                          message: "Invalid Name", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />

                    <FaUserShield className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      onKeyUp={getData}
                      required
                      className={styles.inp}
                      placeholder="Enter Your portfolio"
                      {...register("portfolio", {
                        required: "portfolio is Required",
                        pattern: {
                          value:
                            /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/i,
                          message: "Invalid Name", // JS only: <p>error message</p> TS only support string
                        },
                      })}
                    />

                    <FaPortrait className={styles.icon1} />
                  </li>
                  <li className={styles.list}>
                    <input
                      name="fileupload"
                      onKeyUp={getDataFile}
                      required
                      type="file"
                      className={styles.docs}
                      placeholder="+ Upload Your Documents"
                    />
                  </li>
                  <li className={styles.list}>
                    <button onClick={onSubmit} className={styles.button}>
                      Submit Form
                    </button>
                  </li>
                </ul>
              </div>
            </form>
          </div>

        </div>

        {/* -------------- */}
      </div>










      <footer className="footer2 agency p-b-0">

        <div className={styles.wave_bottom}>
          <div className={styles.footersec}>
            <div className={styles.fstcol}>
              <Image src={'/assets/logo/thumb_web2logo.png'} className={styles.flogo} width={150} height={150} alt='logo' />
              {/* <p className={styles.fstpara}>
                An award winning digital marketing agency ready to provide you
                effective solutions to help you succeed in the era of digital
                channels, digital screens, and digital trends.
              </p> */}
              <div className={styles.scion}>
                <a target='_blank' href="https://www.facebook.com/Artxpro/" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a target='_blank' href="https://pk.linkedin.com/company/artx-pro" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
                <a target='_blank' href="https://mobile.twitter.com/artx_pro" rel="noreferrer">
                  <FaTwitter />
                </a>
                <a target='_blank' href="https://www.youtube.com/user/1artxpro" rel="noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className={styles.footdata}>
              <h5>Contact Us</h5>
              <p>
                <strong>Address:</strong> <a href="https://g.page/artxdigital?share" target='_blank' rel="noreferrer"> 66 L, P.E.C.H.S Block 2 Karachi, 75400,
                  Pakistan</a>
              </p>
              <p>
                <strong>Email : </strong>
                <a href="mailto:contact@artxpro.com"> contact@artxpro.com</a>
              </p>
              <p>
                <strong>Phone : </strong>
                <a href="tel:0314-2165733"> 03142165733</a>
              </p>
              <a href={"/events-updates"}>
                <p>
                  <strong>Events & Updates</strong>
                </p>
              </a>
            </div>
            <div className={styles.footernavlinks}>
              <h5>Smart Marketing Services</h5>
              <a href={"/aedin-marketing"}>
                <p>LinkedIn Marketing Services</p>
              </a>
              <a href={"/twitter-marketing-service"}>
                {" "}
                <p>Twitter Marketing</p>{" "}
              </a>
              <a href={"/facebook-marketing"}>
                {" "}
                <p>Facebook Marketing</p>{" "}
              </a>
              <a href={"/google-marketing"}>
                {" "}
                <p>Google Marketing</p>{" "}
              </a>
            </div>
            <div className={styles.footernavlinks}>
              <h5>Technological Services</h5>
              <a href={"/ecommerce-website-development"}>
                <p>Ecommerce Website</p>
              </a>
              <a href={"/android-app-development"}>
                <p>Android App Development</p>
              </a>
              <h5>Creative Content Services</h5>
              <a href={"/corporate-video-services"}>
                <p>Corporate Video</p>
              </a>
              <a href={"/documentary-video-service"}>
                <p>Documentary Video</p>
              </a>
            </div>
          </div>
          <p className={styles.footPara}>
            Copyright © 2023 artxpro. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
