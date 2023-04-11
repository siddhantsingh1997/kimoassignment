import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "../../context/appContext";
import ServiceHandler from "../../api/service";
import { ToastContainer, toast } from "react-toastify";

export default function Head() {
  const urlHighlight = process.env.BASE_API + "highlights";
  const [dataHighlights, setDataHighlights] = useState();

  useEffect(() => {
    ServiceHandler(urlHighlight).then((res) => {
      if (res.error) {
        toast(res.description);
      } else {
        setDataHighlights(res.data);
      }
    });
  }, [urlHighlight]);

  return (
    <div className="hero-banner h-[560px]   bg-hero-pattern bg-no-repeat bg-cover relative">
      <div
        className="main-menu-wrapper flex  flex-row justify-between items-center
                 p0-p24 gap-[240px] bg-white rounded-[12px] absolute w-4/5
                 h-[80px] top-[24px] left-[0px] right-[0px] m-auto  "
      >
        <div className="main-menu flex flex-row items-center  gap-[80px] w-3/5 h-[35.16px]  ml-8">
          <img className="logo w-[94px] h-[35.16px]" src="./img/Aloha.svg" />
          <div className="menu-items flex flex-row items-center  gap-[40] w-full h-[20px]">
            <Link href="/" className="head-text">
              Home
            </Link>
            {dataHighlights?.map((value) => {
              return (
                <Link
                  className="ml-40 head-text"
                  href={{
                    pathname: "/activities",
                    query: { title: value["title"] },
                  }}
                >
                  {value["title"]}
                </Link>
              );
            })}
          </div>
        </div>
        <div
          className="book-a-trip-btn flex justify-center
                    justify-center items-center
                    bg-light-green pt-[12px] pl-24px pr-24px pb-11px
                    text-color-white h-[40px] w-[120] mr-8 rounded-8px"
        >
          {" "}
          <span className="head-button-text">Book a trip</span>
        </div>
      </div>
      <div className="welcome-to-hawai ">
        <p>Welcome to Hawaii</p>
      </div>
    </div>
  );
}

//lg:w-[1136px] md:w-[900px] sm:w-[]
