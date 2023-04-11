import React, { useState, useEffect } from "react";
import Footer from "@/components/footer";
import { useRouter } from "next/router";
import ServiceHandler from "../api/service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Activities() {
  const router = useRouter();
  const { title } = router.query;
  const [Activities, setActivities] = useState();

  useEffect(() => {
    if (title) {
      ServiceHandler(`${process.env.BASE_API}activities/${title}`).then(
        (res) => {
          if (res.error) {
            toast(res.description);
            document.location.href = "/";
          } else {
            setActivities(...res.data);
          }
        }
      );
    }
  }, [title]);

  return (
    <div className="w-full h-full">
      <div
        className=" flex justify-center items-center top-bar-activites w-full
             bg-hero-pattern bg-cover
             bg-no-repeat h-[200px]"
      >
        <p className="top-title">{title}</p>
      </div>

      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {Activities?.["activities"]?.map((value, index) => {
          return (
            <div className="h-full p-4 lg:w-1/3">
              <div className=" rounded-[8px] shadow-shadow-card px-8 pt-16 pb-16 relative">
                <h2 className="text-xs mb-1 highlight-title">ACTIVITIES</h2>
                <h1 className="title-font sm:text-2xl text-xl  mb-3 title-profile-text">
                  {value["name"]}
                </h1>
                <p className="mb-3 highlight-description">
                  {value["description"]}
                </p>
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
