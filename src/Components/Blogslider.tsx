import React, { useState, useEffect } from "react";
import styles from "@/styles/Blogslider.module.scss";
import Blogarr from "./Blogdata";
import { FaHeart, FaShareAlt } from "react-icons/fa";
// import OwlCarousel from "react-owl-carousel";
// import "../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
// import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import dynamic from "next/dynamic.js";

// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
// });

function Blogslider() {
  const [bloglist, setBloglist] = useState("3");

  useEffect(() => {

    if (window.screen.width <= 780) {
      setBloglist("1");
    } else if(window.screen.width <= 1020 && window.screen.width > 780 )  {
      setBloglist("2");
    }else{
      setBloglist("3");

    }
  }
    , []);

  return (
    <div className={styles.Blogslider}>
      <a href={"/events-updates"}>
        <h2 className={styles.blogh2}>Updates & Events</h2>
      </a>
      <div className={styles.blogslide}>
        {/* <OwlCarousel items={bloglist} autoplay="1" loop> */}
          <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
            {Blogarr.map((item, index) => {
              return (
                <a href={`/blog/${item.slug}`} key={index}>
                  <div className={styles.mapdata}>
                    <img
                      className={styles.mapimg}
                      src={`../assets/blogimages/${item.banner}`}
                    />
                    <h4 className={styles.maph4}>{item.title}</h4>
                    <p>
                      {item.para.substring(0, 200)}.....
                      <span className={styles.readmore}>Read more!</span>
                    </p>
                  </div>
                </a>
              );
            })}
          </Slider>
        {/* </OwlCarousel> */}
      </div>
    </div>
  );
}

export default Blogslider;
