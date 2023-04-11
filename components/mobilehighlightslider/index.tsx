import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ServiceHandler from "../../api/service";
import { ToastContainer, toast } from "react-toastify";

export default function MobileHighlighSlider() {
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
    <div className="h-[504px] bg-white w-full relative lg:hidden xl:hidden md:hidden 2xl:hidden ">
      <p className="absolute hightlight-text-mobile top-[40px] left-[16px] ">
        {" "}
        Highlights
      </p>
      <Carousel
        width="90%"
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        {dataHighlights?.map((value) => {
          return (
            <div className="w-[334px] h-[340px] bg-white shadow-shadow-card rounded-[8px]">
              <img
                src={value["image"]}
                className="w-[368px] h-[170px] "
                alt="image1"
              />
              <div className=" w-[334px] h-[340px] flex flex-col items-start bg-white rounded-[8px] relative">
                <p className="mobile-card-title">{value["title"]}</p>
                <p className="mobile-card-description">
                  {value["description"]}
                </p>

                <img
                  src="./img/Arrowbutton.svg"
                  className="h-[30px] w-[30px] absolute left-[139px] top-[106px]"
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

//className="absolute top-[84px] left-[16px]"
