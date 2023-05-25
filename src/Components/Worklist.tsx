import React, { useEffect, useState } from "react";

const crestlogistic = "/assets/clientsimg/crestlogistic.webp";
const Engagient = "/assets/clientsimg/Engagient.webp";
const Estays = "/assets/clientsimg/Estays.webp";
const FindBless = "/assets/clientsimg/FindBless.webp";
const Froffer = "/assets/clientsimg/Froffer.webp";
const frofferweb = "/assets/clientsimg/froffer-web.webp";
const langnese = "/assets/clientsimg/langnese.webp";
const MakeReal = "/assets/clientsimg/MakeReal.webp";
const Mobile = "/assets/clientsimg/Mobile.webp";
const mobileapplication = "/assets/clientsimg/mobileapplication.webp";
const MobileApps = "/assets/clientsimg/MobileApps.webp";
const MobileAppsDevelopment = "/assets/clientsimg/Mobile-Apps-Development.webp";
const naurus = "/assets/clientsimg/naurus.webp";
const OsnateD = "/assets/clientsimg/OsnateD.webp";
const polycraft = "/assets/clientsimg/polycraft.webp";
const Polycrafts = "/assets/clientsimg/Polycrafts.webp";
const rainbow = "/assets/clientsimg/rainbow.webp";
const wwf = "/assets/clientsimg/wwf.webp";

import Image from 'next/image'

import styles from "@/styles/Worklist.module.scss";
function Worklist() {
  const ddata = [
    {
      category: "Animation",
      items: [
        {
          brand: "Estays",
          image: Estays,
        },
        {
          brand: "Black Forest Langnese Honey",
          image: langnese,
        },
        {
          brand: "WWF Showreel With Credits",
          image: wwf,
        },
        {
          brand: "Naurus",
          image: naurus,
        },
        {
          brand: "Osnate D",
          image: OsnateD,
        },
        {
          brand: "Make Real",
          image: MakeReal,
        },
      ],
    },
    {
      category: "Creative Design",
      items: [
        {
          category: "creative_design",
          brand: "Polycrafts Pvt. Ltd.",
          image: Polycrafts,
        },
        {
          category: "creative_design",
          brand: "FindBless",
          image: FindBless,
        },
        {
          category: "creative_design",
          brand: "Froffer",
          image: Froffer,
        },
      ],
    },
    {
      category: "Videos",
      items: [
        {
          brand: "Engagient",
          image: Engagient,
        },
      ],
    },
    {
      category: "Website",
      items: [
        {
          brand: "Crest Logistics",
          image: crestlogistic,
        },
        {
          brand: "Rainbow Hosiery",
          image: rainbow,
        },
        {
          brand: "Polycrafts Pvt. Ltd.",
          image: polycraft,
        },
        {
          brand: "Froffer",
          image: frofferweb,
        },
        {
          brand: "Mobile",
          image: Mobile,
        },
        {
          brand: "Mobile Application",
          image: mobileapplication,
        },
        {
          brand: "Mobile Apps",
          image: MobileApps,
        },
        {
          brand: "Mobile Apps Development",
          image: MobileAppsDevelopment,
        },
      ],
    },
  ];
  const data = [
    {
      category: "animation",
      brand: "Estays",
      image: Estays,
    },
    {
      category: "animation",
      brand: "Black Forest Langnese Honey",
      image: langnese,
    },
    {
      category: "animation",
      brand: "WWF Showreel With Credits",
      image: wwf,
    },
    {
      category: "animation",
      brand: "Naurus",
      image: naurus,
    },
    {
      category: "animation",
      brand: "Osnate D",
      image: OsnateD,
    },
    {
      category: "animation",
      brand: "Make Real",
      image: MakeReal,
    },
    {
      category: "creative_design",
      brand: "Polycrafts Pvt. Ltd.",
      image: Polycrafts,
    },
    {
      category: "creative_design",
      brand: "FindBless",
      image: FindBless,
    },
    {
      category: "creative_design",
      brand: "Froffer",
      image: Froffer,
    },
    {
      category: "videos",
      brand: "Engagient",
      image: Engagient,
    },
    {
      category: "web_app",
      brand: "Crest Logistics",
      image: crestlogistic,
    },
    {
      category: "web_app",
      brand: "Rainbow Hosiery",
      image: rainbow,
    },
    {
      category: "web_app",
      brand: "Polycrafts Pvt. Ltd.",
      image: polycraft,
    },
    {
      category: "web_app",
      brand: "Froffer",
      image: frofferweb,
    },
    {
      category: "web_app",
      brand: "Mobile",
      image: Mobile,
    },
    {
      category: "web_app",
      brand: "Mobile Application",
      image: mobileapplication,
    },
    {
      category: "web_app",
      brand: "Mobile Apps",
      image: MobileApps,
    },
    {
      category: "web_app",
      brand: "Mobile Apps Development",
      image: MobileAppsDevelopment,
    },
  ];
  const [cat, setCat] = useState("");
  const [products, setProducts] = useState(data);

  const setCatFun = (cat: any, products: any) => {
    console.log("cat", cat);
    console.log("products", products);

    if (cat != "all") {
      setCat(cat);
      setProducts(products);
      console.log("in if");
    } else {
      console.log("in else");

      setCat(cat);
      setProducts(data);
    }
  };
  return (
    <div className={styles.ourwork}>
      <ul className={styles.list}>
        <li
          onClick={() => {
            setCatFun("all", []);
          }}
        >
          All
        </li>

        {ddata.map((cate, index) => {
          return (
            <div key={index}>
              <li
                onClick={() => {
                  setCatFun(cate.category, cate.items);
                }}
              >
                {cate.category}
              </li>
            </div>
          );
        })}
      </ul>

      <div className={styles.detailcont}>
        {products.map((item, index) => {
          return (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className={styles.detailitem}
            >
              <div className={styles.detailtxt}>
                <p>{item.brand}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.cent}>
        {/* <button className={styles.loadmore}>Load More</button> */}
      </div>
    </div>
  );
}
export default Worklist;
