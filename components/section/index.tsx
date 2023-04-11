import React, { useState, useEffect } from "react";
import ServiceHandler from "../../api/service";
import { ToastContainer, toast } from "react-toastify";

export default function Section() {
  const [dataCategories, setdataCategories] = useState();
  const urlCategories = process.env.BASE_API + "categories";

  useEffect(() => {
    ServiceHandler(urlCategories).then((res) => {
      if (res.error) {
        toast(res.description);
      } else {
        setdataCategories(res.data);
      }
    });
  }, [urlCategories]);

  return (
    <div className="section-wrapper bg-section-color w-full h-[528px] flex flex-row justify-center gap-[32px]  ">
      <div className="left-section-wrapper w-[34rem] h-[408px] mt-[40px] relative">
        <span className="text-black absolute t-0 l-0 categories-text">
          Categories
        </span>

        {dataCategories?.map((value, index) => {
          return (
            <div
              className={`bg-white w-[34rem] h-[68px] flex flex-row justify-between
                      items-center p-[24px] rounded-[8px]
                     ${index === 0 ? "mt-[36px]" : "mt-[8px]"} `}
            >
              <p className="text-black ">{value["name"]}</p>
              <img
                src="./img/arrow_forward.svg"
                className="w-[16px] h-[16px]"
              />
            </div>
          );
        })}
      </div>

      <div className="right-section-wrapper w-[35rem] h-[212px] mt-[40px] relative">
        <span className="text-black absolute t-0 l-0 travel-guide">
          Travel Guide
        </span>
        <div className="bg-white w-[35rem] mt-[36px] h-[176px] rounded-[8px] flex flex-row justify-between  ">
          <div className="right-section-text h-[128px] w-[15rem] mt-[24px] ml-[24px]">
            <p className="text-[24px] text-[#001A1A] title-profile-text">
              Hadwin Malone
            </p>
            <p className="text-[16px] pt-[8px] text-[#001A1A] guide-text">
              Guide since 2012
            </p>
            <div
              className="flex flex-row justify-center 
                         items-center pt-[12px] pb-[11px]
                         pl-[24px] pr-[24px] border-solid border-[1px]
                         border-[#008080] rounded-[8px] w-[107px] h-[40px] mt-[27px]"
            >
              <span className="text-[#008080] text-[16px] contact-text">
                {" "}
                Contact{" "}
              </span>
            </div>
          </div>

          <div className="right-section-picture h-[128px] w-[128px] rounded-[50%] bg-profile-picture mt-[24px] mr-[24px]"></div>
        </div>
      </div>
    </div>
  );
}
