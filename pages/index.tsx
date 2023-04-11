import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "../components/head/index";
import Highlights from "@/components/highlights";
import Section from "../components/section";
import Footer from "@/components/footer";
import Burgermenu from "@/components/burgermenu";
import MobileHighlighSlider from "@/components/mobilehighlightslider";
import MobileActivitiesSelector from "../components/mobileactivitiesslector";
import ServiceHandler from "../api/service";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import { useContext } from "react";
import AppContext from "../context/appContext";

export default function Home() {
  //   const urlHighlight = process.env.BASE_API+"highlights"
  //   const urlCategories = process.env.BASE_API+"categories"
  //   const [dataHighlights,setDataHighlights] = useState()
  //   const [dataCategories,setdataCategories] = useState()

  //   ServiceHandler(urlHighlight).then(res=>{
  //     console.log('res',res)
  //        if(res.error) {
  //            toast(res[0]["description"])

  //        }
  //        else {
  //            setDataHighlights(res.data)
  //        }
  //   });

  //   ServiceHandler(urlCategories).then(res=>{
  //    if(res.error) {
  //        toast(res[0]["description"])
  //    }
  //    else {
  //        setdataCategories(res.data)
  //    }
  // });

  if (process.env.NODE_ENV === "development") {
    return (
      <>
        <>
          <Burgermenu />
          <Head />
          <MobileHighlighSlider />
          <Highlights />
          <MobileActivitiesSelector />
          <Section />
        </>

        <Footer />
      </>
    );
  }
}
