import React, { useState, useEffect } from "react";
import Link from "next/link";
import ServiceHandler from "../../api/service";
import { ToastContainer, toast } from "react-toastify";

export default function Highlights() {
  const [dataHighlights, setDataHighlights] = useState();
  const urlHighlight = process.env.BASE_API + "highlights";

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
    <div className="highlights-wrapper  h-[504px]  relative flex justify-center ">
      <div className="w-[74rem]  h-[364px] mt-[40px] ">
        <div className="highlight-text-wrapper relative w-[74rem] h-[20px] mb-[24px]">
          <span className="highlight-text absolute top-0 left-0">
            Highlights
          </span>
        </div>
        <div className="highlights-content-wrapper flex flex-row w-[74rem] gap-[17px] items-start h-[340px]">
          {dataHighlights?.map((value) => {
            return (
              <div className="h-[340px] w-[23rem] rounded-[8px] shadow-shadow-card">
                <img src={value["image"]} />
                <div className="flex flex-col items-start p-0  h-[76px] w-[318px] ml-[24px] mt-[24px]">
                  <p className="text-[24px] highlight-title">
                    {value["title"]}
                  </p>
                  <p className="text-[16px] highlight-description mt-[16px]">
                    {value["description"]}
                  </p>
                </div>
                <div className="arrow-btn w-[320px]  mt-[24px] h-[40px] flex flex-row justify-end">
                  <img
                    src="./img/Arrowbutton.svg"
                    className="h-[30px] w-[30px]"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
