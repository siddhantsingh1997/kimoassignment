import React, { useState, useEffect } from "react";
import Link from "next/link";
import ServiceHandler from "../../api/service";
import { ToastContainer, toast } from "react-toastify";

export default function MobileActivitiesSelector() {
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
    <div className="h-[780px] w-full bg-categories-section relative flex flex-col lg:hidden xl:hidden md:hidden 2xl:hidden">
      <p className=" categories-mobile mt-[40px] ml-[17px]  ">Categories</p>

      {dataCategories?.map((value, index) => {
        return (
          <div
            className={`flex flex-row justify-between
                    items-center p-[24px] gap-[10px] w-[358px]
                    h-[68px] bg-white rounded-[8px] mt-[${
                      index === 0 ? "16px" : "8px"
                    }] ml-[17px] `}
          >
            <p className="categories-mobile-title">{value["name"]}</p>
            <img className="h-[16px] w-[16px] " src="./img/arrow_forward.svg" />
          </div>
        );
      })}

      <p className={` categories-mobile mt-[40px] ml-[17px]`}>Travel Guide</p>

      <div className="bg-white w-[356px] mt-[16px] h-[176px] rounded-[8px] flex flex-row justify-between ml-[17px] ">
        <div className="right-section-text h-[128px] w-[12rem] mt-[24px] ml-[24px]">
          <p className="text-[24px] text-[#001A1A] title-profile-text">
            Hadwin Malone
          </p>
          <p className="text-[16px] pt-[8px] text-[#001A1A] guide-text">
            Guide since 2012
          </p>
          <div
            className="flex flex-row justify-center 
                         items-center pt-[14px] pb-[11px]
                         pl-[24px] pr-[24px] border-solid border-[1px]
                         border-[#008080] rounded-[8px] w-[107px] h-[40px] mt-[27px]"
          >
            <span className="text-[#008080] text-[16px] contact-text">
              {" "}
              Contact{" "}
            </span>
          </div>
        </div>

        <div className="right-section-picture h-[74px] w-[74px] rounded-[50%] bg-small-profile-picture mt-[24px] mr-[24px]"></div>
      </div>
    </div>
  );
}
