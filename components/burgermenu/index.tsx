import React, { useState, useEffect } from "react";
import Link from "next/link";
import ServiceHandler from "../../api/service";
import { ToastContainer, toast } from "react-toastify";

export default function Burgermenu() {
  const [burgermenustate, setBurgerMenu] = useState(false);
  const [dataHighlights, setDataHighlights] = useState();
  const urlHighlight = process.env.BASE_API + "highlights";
  const burgermenuHandler = () => {
    setBurgerMenu((prev) => !prev);
  };
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
    <>
      <div
        className={`lg:hidden xl:hidden md:hidden 2xl:hidden flex flex-row  ${
          !burgermenustate ? "justify-between" : "justify-end"
        } 
         items-center pt-0 pb-0 pl-[24px] pr-[24px] w-full bg-white h-[80px] z-0`}
      >
        {!burgermenustate ? (
          <img
            src="./img/mobiletopbarlogo.svg"
            className="w-[94px] h-[35.16px]"
          />
        ) : (
          ""
        )}
        <img
          onClick={() => burgermenuHandler()}
          src={!burgermenustate ? "./img/burger.svg" : "./img/close.svg"}
          className="w-[30px] h-[20px]"
        />
      </div>

      {burgermenustate ? (
        <>
          <div className="over-lay-white absolute w-[95%] h-full bg-white right-0 z-1">
            <div className="w-[128px] h-[280px] mt-[40px] ml-[40px] flex flex-col items-start p-0">
              <Link href="/" className="head-text-mobile ">
                Home
              </Link>
              {dataHighlights?.map((value) => {
                return (
                  <Link className="mt-[40px] head-text-mobile" href="/">
                    {value["title"]}
                  </Link>
                );
              })}
              <div
                className="book-a-trip-btn flex justify-center
                    justify-center items-center
                    bg-light-green pt-[12px] pl-[24px] pr-[24px] pb-[11px]
                    text-color-white h-[40px] w-[128px] mr-8 rounded-8px mt-[24px]"
              >
                {" "}
                <span className="head-button-text">Book a trip</span>
              </div>
            </div>
          </div>
          <div className="over-lay-black absolute w-[5%] h-full bg-white left-0 z-1 "></div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
