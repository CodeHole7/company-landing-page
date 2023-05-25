import React, { useEffect, useState } from "react";
import styles from "@/styles/Services.module.scss";
import dmimg from "../assets/home/Main-Page-1.png";
import smimg from "../assets/home/Main-Page-2.png";
import videoanimation from "../assets/home/Main-Page-3-1.png";
import webappli from "../assets/home/Main-Page-4.png";
import creativedesign from "../assets/home/Main-Page-5.png";
import Worklist from "./Worklist";

import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";

import fb from "../assets/home/fb.png";
import infl from "../assets/home/infl.png";
import yt from "../assets/home/youtube.png";

import corporate from "../assets/home/corporate.png";
import documentry from "../assets/home/03.png";
import digital from "../assets/home/02.png";
import explainer from "../assets/home/05.png";
import product from "../assets/home/06.png";
import animation from "../assets/home/04.png";

import business from "../assets/home/bw.png";
import ecommerce from "../assets/home/01.png";
import ui from "../assets/home/websi.png";
import android from "../assets/home/03-1.png";
import ios from "../assets/home/04-1.png";
import hybrid from "../assets/home/05-1.png";

import coop from "../assets/home/02-2.png";
import logod from "../assets/home/03-2.png";
import printmed from "../assets/home/05-2.png";
import advertise from "../assets/home/01-1.png";
import campaign from "../assets/home/04-2.png";
import socialp from "../assets/home/06-2.png";

import { FaArrowRight } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import Image from 'next/image'

function Services() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [vanima, setVanima] = useState(true);
  const [smflag, setSmflag] = useState(true);
  const [smflaga, setSmflaga] = useState(true);
  const [vaflag, setVaflag] = useState(true);
  const [txt, showTxt] = useState(false);
  const [ac, setAc] = useState(true)
  return (
    <>
      <section className="agency format" id="services" style={{ paddingBottom: 20 }}>
        <div className="offset-md-3 col-md-6">
          <div className="title">
            <div className="main-title">
              <h2 className="text-capitalize text-center">Our expertise includes</h2>
            </div>
            {/* <div className="sub-title">
                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been</p>
              </div> */}
          </div>
        </div>
      </section>
      <div className={styles.HomeStaticData}>

        <div className={styles.digimark}>
          <div className={styles.left}>
            <h1 className={styles.hed1}>Digital Marketing Services</h1>
            {txt ? (
              <p>
                We are an eminent digital marketing agency that helps you improve
                your brand’s visibility on search engines. We run a top-notch
                digital marketing company with expertise and offer the best
                creative design and marketing services in Karachi Pakistan. With
                our first-rate digital strategies, you can reach the right
                audience and streamline your business. Showcase your brand in
                evolving digital era with our innovative approaches and meet your
                goals.
                <br className={styles.br} />
                We put utmost dedication to ignite the digital presence of our
                clients with an improved ROI. Connect with us to attain a top
                position at SERPs through our SEO services and be on the verge of
                distinction through our unsurpassed marketing services.

              </p>
            ) : (
              <p>
                We are an eminent digital marketing agency that helps you improve
                your brand’s visibility on search engines. We run a top-notch
                digital marketing company with expertise and offer the best
                creative design and marketing services in Karachi Pakistan. With
                our first-rate digital strategies, you can reach the right
                audience and streamline your business. Showcase your brand in
                evolving digital era with our innovative approaches and meet your
                goals.
              </p>
            )}

            <button
              className="btn btn-default btn-gradient text-white active"
              onClick={() => {
                showTxt(!txt);
              }}
            >
              Read more
            </button>
          </div>
          <div className={`${styles.right} ${styles.bigimg}`} data-aos="fade-left">
            {/* <Image
              src={dmimg}
              title="Digital Marketing Agency Karachi"
              alt="Digital Marketing Agency Karachi"
            /> */}
            <Image
              src={smimg}
              title="Social Media Marketing"
              alt="Social Media Marketing"
            />
          </div>
        </div>
        {/* -------------------Social media Marketing---------------------- */}

        <div className={styles.socialmark}>
          <div className={styles.left}>
            <h3>Lead Generation</h3>
            <p>
              Our expertise includes
            </p>

            {/* <div className={styles.btns}>
              <button
                className={smflaga ? styles.inactive : styles.active}
                onClick={() => {
                  setSmflaga(true);
                }}
              >
                Social Media Marketing
              </button>
              <button
                className={smflaga ? styles.active : styles.inactive}
                onClick={() => {
                  setSmflaga(false);
                }}
              >
                Digital Media Marketing
              </button>
            </div> */}
            {/* {smflaga ? ( */}
            <div className={styles.socialarea}>
              <div className={styles.socialrep} data-aos="fade-right">
                <div className={styles.fbmark}>
                  <Image
                    src={fb}
                    alt="Facebook Marketing"
                    title="Facebook Marketing"
                  />
                </div>
                <div className={styles.desc}>
                  <h3>Web research</h3>
                  <p>
                    Searching b2b prospects, general research, most updated information about any relavant topic
                  </p>
                  {/* <div className={styles.arrow}>
                      <span>
                        <a href={"/facebook-marketing"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div> */}
                </div>
              </div>

              <div className={styles.socialrep} data-aos="fade-right">
                <div className={styles.fbmark}>
                  <Image
                    src={yt}
                    alt="Youtube Marketing"
                    title="Youtube Marketing"
                  />
                </div>
                <div className={styles.desc}>
                  <h3>Data entry</h3>
                  <p>
                    Entering data into the google sheet, website, directories, product uploading etc
                  </p>
                  {/* <div className={styles.arrow}>
                      <span>
                        <a href={"/youtube-marketing"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div> */}
                </div>
              </div>

              <div className={styles.socialrep} data-aos="fade-right">
                <div className={styles.fbmark}>
                  <Image
                    src={infl}
                    alt="Influencer Marketing"
                    title="Influencer Marketing"
                  />
                </div>
                <div className={styles.desc}>
                  <h3>Linkedin Lead Generation</h3>
                  <p>
                    Generating leads through LinkedIn, finding emails, their contact information, their job title, etc
                  </p>
                  {/* <div className={styles.arrow}>
                      <span>
                        <a href={"/influencer-marketing"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div> */}
                </div>
              </div>
              <div className={styles.socialrep} data-aos="fade-right">
                <div className={styles.fbmark}>
                  <Image
                    src={fb}
                    alt="Search Engine Optimization"
                    title="Search Engine Optimization"
                  />
                </div>
                <div className="desc">
                  <h3>Paraphrasing</h3>
                  <p>
                    Rewriting blogs, articles, paragraphs, and any piece of content.
                  </p>
                  {/* <div className={styles.arrow}>
                    <span>
                      <a href={"/seo-service"}>
                        <FaArrowRight />
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>

              <div className={styles.socialrep} data-aos="fade-right">
                <div className={styles.fbmark}>
                  <Image
                    src={fb}
                    alt="Amazon Marketing"
                    title="Amazon Marketing"
                  />
                </div>
                <div className={styles.desc}>
                  <h3>Linkedin List building</h3>
                  <p>
                    Collecting b2b and b2c data from LinkedIn and making a list of prospects out of it.
                  </p>
                  {/* <div className={styles.arrow}>
                    <span>
                      <a href={"/"}>
                        <FaArrowRight />
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>

              <div className={styles.socialrep} data-aos="fade-right">
                <div className={styles.fbmark}>
                  <Image
                    src={fb}
                    title="Google Marketing"
                    alt="Google Marketing"
                  />
                </div>
                <div className={styles.desc}>
                  <h3>Data mining</h3>
                  <p>
                    Sourcing websites, directories, and online open-source data to convert them into useful information.
                  </p>
                  {/* <div className={styles.arrow}>
                    <span>
                      <a href={"/google-marketing"}>
                        <FaArrowRight />
                      </a>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.right} ${styles.bigimg}`}>
            <Image
              src={dmimg}
              title="Digital Marketing Agency Karachi"
              alt="Digital Marketing Agency Karachi"
            />
          </div>
        </div>

        {/* -------------------Video & Animation---------------------- */}
        <div className={styles.video}>
          <div className={`${styles.socialmark} ${styles.video}`}>
            <div className={`${styles.right} ${styles.bigimg}`}>
              <Image
                src={videoanimation}
                title="Video & Animation"
                alt="Video & Animation"
              />
            </div>
            <div className={styles.left}>
              <h4>Cold Calling</h4>
              <p>
                Patricia Fripp once said; ìYou donít close a sale; you open a relationship if you want to build a long-term, successful enterprise.î We have always used this quote as our Sales Mantra, and as such, built relationships with leads, turning them into prospects, clients, and then friends.
              </p>


              <div className={styles.socialarea} data-aos="fade-left">
                <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={corporate}
                      title="Corporate Video"
                      alt="Corporate Video"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>Our skill sets include</h4>
                    <p>
                      Business to Business sales (B2B). <br />
                      Business-to-Customer sales (B2C). <br />
                      Appointment setting/ Cold calling. <br />
                      Key Account Management. <br />
                      Inside and Outside Sales. <br />
                      Sales and Product support. <br />
                      Inbound and Outbound calls
                    </p>
                    {/* <div className={styles.arrow}>
                      <span>
                        <a href={"/corporate-video-services"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div> */}
                  </div>
                </div>

                {/* <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={documentry}
                      title="Documentary Video"
                      alt="Documentary Video"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>Documentary Video</h4>
                    <p>
                      Get a business documentary with all the amazing and
                      memorable moments, success stories, and achievements of
                      your enterprise. Get yourself our distinguished
                      Documentary Video service.{" "}
                    </p>
                    <div className={styles.arrow}>
                      <span>
                        <a href={"/documentary-video-service"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={digital}
                      title="Digital Video Commercial"
                      alt="Digital Video Commercial"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>Digital Video Commercial</h4>
                    <p>
                      Spark excitement and engagement in your product with an
                      exciting digital video commercial. We offer impeccable
                      Digital Video Commercial service to help businesses
                      thrive.{" "}
                    </p>
                    <div className={styles.arrow}>
                      <span>
                        <a href={"/documentary-video-service"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.socialarea} data-aos="fade-left">
                <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={explainer}
                      title="Explainer Video"
                      alt="Explainer Video"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>Explainer Video</h4>
                    <p>
                      We offer top-notch Explainer Video Service through which
                      you can nail your business identity. Our electrifying
                      animated videos are ready to inspire and cheer your
                      audience.{" "}
                    </p>
                    <div className={styles.arrow}>
                      <span>
                        <a href={"/explainer-video-services"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={product}
                      title="Product Demo Video"
                      alt="Product Demo Video"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>Product Demo Video</h4>
                    <p>
                      Spark the interest of your audience in your product by
                      highlighting all the features in a captivating video with
                      our Product Demo Video Service.{" "}
                    </p>
                    <div className={styles.arrow}>
                      <span>
                        <a href={"/product-demo-video"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={animation}
                      title="2D & 3D Animation"
                      alt="2D & 3D Animation"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>2D & 3D Animation</h4>
                    <p>
                      Our 2d & 3D Animation Service is highly-accurate,
                      interactive, and inspiring. We create outstanding
                      animations with up-to-date tools to comply with your
                      business’s requirements.{" "}
                    </p>
                    <div className={styles.arrow}>
                      <span>
                        <a href={"/2d-3d-animation-service"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* -------------------Website & Application Development---------------------- */}

        <div className={styles.socialmark}>
          <div className={styles.left}>
            <h4>Virtual Business and Personal Support: </h4>
            <p>
              With a long-term commitment, we can provide your business with the following services at the most affordable hourly rates starting from 6 USD an hour.
            </p>

            {/* <div className={styles.btns}>
              <button
                className={smflag ? styles.inactive : styles.active}
                onClick={() => {
                  setSmflag(true);
                }}
              >
                Web Development
              </button>
              <button
                className={smflag ? styles.active : styles.inactive}
                onClick={() => {
                  setSmflag(false);
                }}
              >
                Application Development
              </button>
            </div> */}
            {smflag ? (
              <div className={styles.socialarea} data-aos="fade-right">
                {/* <div className="socialrep">
                  <div className={styles.fbmark}>
                    <Image
                      src={business}
                      title="Business Website"
                      alt="Business Website"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>Business Website</h4>
                    <p>
                      Take advantage of our Business Website Development service
                      and leave a lasting first impression on your potential
                      clients. Let us create a professional-looking website for
                      you.{" "}
                    </p>
                    <div className={styles.arrow}>
                      <span>
                        <a href={"/business-websites"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={ecommerce}
                      title="Ecommerce Website"
                      alt="Ecommerce Website"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>Ecommerce Website</h4>
                    <p>
                      We offer a technically outstanding Ecommerce Website
                      Development service. We create a better e-shopping
                      experience for your customers by using Magento, Drupal, and
                      HTML5.
                    </p>
                    <div className={styles.arrow}>
                      <span>
                        <a href={"/ecommerce-website-development"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div>
                  </div>
                </div> */}

                <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={ui}
                      title="UX/UI Design & Development"
                      alt="UX/UI Design & Development"
                    />
                  </div>
                  <div className={styles.desc}>
                    {/* <h4>UX/UI Design & Development</h4> */}
                    <p>
                      Web Research <br />
                      Social media handling <br />
                      Administrative Support <br />
                      Data Entry (Google Sheets, Microsoft Excel) <br />
                      Graphic Design (Logos, Posters, Bookmarks, Banner Etc.) <br />
                      Adobe Lightroom (Photo Editing) <br />
                      Calendar Management <br />
                      Call and Email Handling <br />
                      Social Media Marketing (Facebook, Twitter, Instagram) <br />
                      Transcription <br />
                      Video Conversion <br />
                      Appointment Setting <br />
                      Calendar Management <br />
                      Project Management <br />
                      Technical Support <br />
                      Product Uploading into the website <br />
                      Light Bookkeeping <br />

                      In short, any kind of support can be done virtually.

                    </p>
                    {/* <div className={styles.arrow}>
                      <span>
                        <a href={"/ui-ux-design-service"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.socialarea} data-aos="fade-right">
                <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={android}
                      title="Android Application"
                      alt="Android Application"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>Android Application</h4>
                    <p>
                      Our Android Application Development Service will give you
                      robust and trending android applications based on your
                      requirements and limitations. We only use advanced web
                      technologies.{" "}
                    </p>
                    <div className={styles.arrow}>
                      <span>
                        <a href={"/android-app-development"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={ios}
                      title="iOS Application"
                      alt="iOS Application"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>iOS Application</h4>
                    <p>
                      Our IOS Application Development Service is creative; we
                      develop high-performance and user-friendly iPad/iPhone apps
                      through automation.
                    </p>
                    <div className={styles.arrow}>
                      <span>
                        <a href={"/ios-app-development "}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.socialrep}>
                  <div className={styles.fbmark}>
                    <Image
                      src={hybrid}
                      title="Hybrid Application Development"
                      alt="Hybrid Application Development"
                    />
                  </div>
                  <div className={styles.desc}>
                    <h4>Hybrid Application Development</h4>
                    <p>
                      Our skilled developers combine the power of native and web
                      applications to create a feature¬-packed hybrid app. Connect
                      with us for top-rated Hybrid Application Development
                      Service.
                    </p>
                    <div className={styles.arrow}>
                      <span>
                        <a href={"/hybrid-app-development"}>
                          <FaArrowRight />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={`${styles.right} ${styles.bigimg}`}>
            <Image
              src={webappli}
              alt="Digital Marketing Agency in Pakistan"
              title="Digital Marketing Agency in Pakistan"
            />
          </div>
        </div>
        {/* -------------------Creative Design & Branding---------------------- */}
        <div className={styles.video}>
          <div className={`${styles.socialmark} ${styles.video}`}>
            <div className={`${styles.right} ${styles.bigimg}`}>
              <Image
                src={creativedesign}
                alt="Creative Design & Branding"
                title="Creative Design & Branding"
              />
            </div>
            <div className={styles.left}>
              <h4>Google reviews</h4>
              <p>
                Are you worried because one of your customers has posted a negative review of your service on Google? Have you observed a decrease in sales and believe that negative reviews are severely damaging your company&apos;s credibility?
                <br />
                Do not worry we are here to improve and manage your business credibility with your new customers on google and help you manage the feedback from your customers.
                <br />
                <br />
                Higher education is an essential investment in one&apos;s future, but it can also be a significant financial burden. The cost of tuition fees can be a major deterrent for many students, especially in today&apos;s challenging economic climate. However, students should know that there are ways to make higher education more affordable, such as getting a discount on university tuition fees.
                Many universities offer various discounts and financial aid options to help students cover the cost of tuition. A 40% discount on university tuition fees is a substantial amount of savings, and it can make a significant difference in the overall cost of education.
                With some trusted partners all over the world, we help students get a discount of 40% on their tuition fees.
              </p>

              {/* <div className={styles.btns}>
                <button
                  className={vaflag ? styles.active : styles.inactive}
                  onClick={() => {
                    setVaflag(false);
                  }}
                >
                  Creative Design
                </button>
                <button
                  className={vaflag ? styles.inactive : styles.active}
                  onClick={() => {
                    setVaflag(true);

                  }}
                >
                  Branding
                </button>
              </div> */}
              {/* {vaflag ? (
                <div className={styles.socialarea} data-aos="fade-left">
                  <div className={styles.socialrep}>
                    <div className={styles.fbmark}>
                      <Image
                        src={coop}
                        title="Corporate Identity"
                        alt="Corporate Identity"
                      />
                    </div>
                    <div className={styles.desc}>
                      <h4>Corporate Identity</h4>
                      <p>
                        Build your brand recognition with our Corporate Identity
                        service. We employ attractive visual elements to create
                        your unique and influential brand image for your audience.
                      </p>
                      <div className={styles.arrow}>
                        <span>
                          <a href={"/corporate-video-services"}>
                            <FaArrowRight />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.socialrep}>
                    <div className={styles.fbmark}>
                      <Image src={logod} title="Logo Design" alt="Logo Design" />
                    </div>
                    <div className={styles.desc}>
                      <h4>Logo Design</h4>
                      <p className={styles.socialpara}>
                        We offer professional logo design service in which our
                        innovative designers create a striking business logo that
                        will stand out in the crowd.
                      </p>
                      <div className={styles.arrow}>
                        <span>
                          <a href={"/logo-design-service"}>
                            <FaArrowRight />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.socialrep}>
                    <div className={styles.fbmark}>
                      <Image
                        src={printmed}
                        title="Print Media Design"
                        alt="Print Media Design"
                      />
                    </div>
                    <div className={styles.desc}>
                      <h4>Print Media Design</h4>
                      <p>
                        Communicate visually with your audience and spread your
                        message with our Print Media design service, which
                        involves flyers, brochures, business cards, and much more.
                      </p>
                      <div className={styles.arrow}>
                        <span>
                          <a href={"/print-media-design-service"}>
                            <FaArrowRight />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={styles.socialarea} data-aos="fade-left">
                  <div className={styles.socialrep}>
                    <div className={styles.fbmark}>
                      <Image
                        src={advertise}
                        title="Best Advertising Services"
                        alt="Best Advertising Services"
                      />
                    </div>
                    <div className={styles.desc}>
                      <h4>Best Advertising Services</h4>
                      <p>
                        Explore enticing things with the perfect branding
                        services. Artx Pro is the best advertising agency in
                        Pakistan, assisting in moving your business forth with
                        enthralling branding services.
                      </p>
                      <div />
                      <div className={styles.arrow}>
                        <span>
                          <a href={"/advertising-service"}>
                            <FaArrowRight />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.socialrep}>
                    <div className={styles.fbmark}>
                      <Image
                        src={campaign}
                        title="Campaign Design"
                        alt="Campaign Design"
                      />
                    </div>
                    <div className={styles.desc}>
                      <h4>Campaign Design</h4>
                      <div>
                        <p>
                          Ring the bell for availing the best campaign designing
                          services! We offer reliable campaign design services
                          that help establish your unique presence among the
                          targeted customers.
                        </p>

                        <div className={styles.arrow}>
                          <span>
                            <a href={"/campaign-design-service"}>
                              <FaArrowRight />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.socialrep}>
                    <div className={styles.fbmark}>
                      <Image
                        src={socialp}
                        title="Social Media Post"
                        alt="Social Media Post"
                      />
                    </div>
                    <div className={styles.desc}>
                      <h4>Social Media Post</h4>
                      <div>
                        <p>
                          Turbo charges your business with social media post
                          design services. Nothing is worthy if you are not
                          aage with your customers. We provide the best social
                          media post design services in Pakistan.{" "}
                        </p>
                        <div className={styles.arrow}>
                          <span>
                            <a href={"/social-media-post-design"}>
                              <FaArrowRight />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
        {/* <div className={styles.discuss}>
          <div className={styles.discussinner}>
            <div className={styles.disscuss}>
              <p>Discuss your marketing requirements:</p>
            </div>
            <div className={styles.df}>
              <div className={styles.icon22}>
                <FaPhoneAlt />
              </div>
              <div>
                <h5>Give us a call</h5>
                <p><a href="tel:+923142165733" className={styles.ancr}>+92 314 2165733</a></p>
              </div>
            </div>
            <div className={styles.df}>
              <div className={styles.icon22}>
                <FaMailBulk />
              </div>
              <div>
                <h5>Drop an email</h5>
                <p><a href="mailto:contact@artxpro.com" className={styles.ancr}>contact@artxpro.com</a></p>
              </div>
            </div>
            <div className={styles.df}>
              <div className={styles.icon22}>
                <BiMessageRoundedDetail />
              </div>
              <div>
                <h5>
                  Ask For <br /> Question
                </h5>
              </div>
            </div>
          </div>
        </div> */}

      </div>
      {/* <div className={styles.intro}>
        <h2 className={styles.h5}>Premier Digital Marketing Agency In Pakistan</h2>
        <h6 className={styles.introh2}>Introduce Our Incredible Projects</h6>
        <p>
          We have enjoyed many fruitful years creating striking visuals and
          integrated Promotional campaigns for some of the most influential
          Brands in all over World.
        </p>
      </div> */}
      {/* <Worklist /> */}
    </>
  );
}

export default Services;
