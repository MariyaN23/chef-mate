"use client";

import { HomeSectionHeader } from "@/app/ui/home/components/home-section-header";
import { ArrowLeft } from "@/app/ui/icons/arrow-left";
import { ArrowRight } from "@/app/ui/icons/arrow-right";
import { useState } from "react";
import Img1 from "../../assets/images/woman-eating-healthy.webp";
import Img2 from "../../assets/images/food-salad-fresh.webp";
import Img3 from "../../assets/images/food-soup-hot.webp";
import Image from "next/image";

const data = [
  {
    title: "Personalize Your Profile",
    description: `Begin by creating your profile. Tell us about your dietary preferences, 
    nutritional goals, and budget. Our AI technology tailors every meal plan to fit your unique needs.`,
  },
  {
    title: "Get Recommendations",
    description: `Our advanced AI analyzes your profile to create personalized meal plan. 
    Receive daily suggestions that match your taste, health goals, and dietary restrictions.`,
  },
  {
    title: "Track & Optimize Progress",
    description: `Monitor your nutrition journey with real-time insights. Adjust your goals 
    as you progress and let our AI continuously optimize your meal plans for better results.`,
  },
];

export const HowItWorks = () => {
  const dataLength = data.length;
  const [currentData, setCurrentData] = useState(0);
  const decreaseBtnDisabled = currentData === 0;
  const increaseBtnDisabled = currentData === dataLength - 1;
  const increaseDataHandler = () => {
    if (currentData < dataLength - 1) {
      setCurrentData(currentData + 1);
    }
  };
  const decreaseDataHandler = () => {
    if (currentData > 0) {
      setCurrentData(currentData - 1);
    }
  };

  return (
    <section className={"bg-green-100"}>
      <div className={"container"}>
        <HomeSectionHeader
          headerTitle={"How it works"}
          headerDescription={
            "Step into the world of hassle-free meal planning with our easy 3-step process"
          }
        />
        <div className={"flex flex-col 2xl:flex-row"}>
          <div className={"relative w-full"}>
            <span className={"accent-text-lg block text-center 2xl:text-left"}>
              0{currentData + 1}
            </span>
            <h3 className={"mt-1 text-center 2xl:text-left"}>{data[currentData].title}</h3>
            <p className={"text-xl mt-10 mb-24 2xl:max-w-lg text-center 2xl:text-left"}>
              {data[currentData].description}
            </p>
            <div className={"flex gap-5 justify-center 2xl:justify-start"}>
              <button
                className={"outline-btn"}
                onClick={decreaseDataHandler}
                disabled={decreaseBtnDisabled}
              >
                <ArrowLeft />
              </button>
              <button
                className={"outline-btn"}
                onClick={increaseDataHandler}
                disabled={increaseBtnDisabled}
              >
                <ArrowRight />
              </button>
            </div>
            <span className={"accent-text absolute -bottom-32 z-10"}>
              0{currentData + 1}/0{dataLength}
            </span>
          </div>
          <div className={"hidden 2xl:block relative z-10 w-full"}>
            <Image
              src={Img1}
              className={
                "absolute z-[3] left-44 -top-12 rotate-15 rounded-4xl w-[500px] object-cover"
              }
              alt=""
              aria-hidden="true"
              role="presentation"
            />
            <Image
              src={Img2}
              className={
                "absolute z-[2] left-24 -top-16 rotate-5 rounded-4xl w-[500px] object-cover"
              }
              alt=""
              aria-hidden="true"
              role="presentation"
            />
            <Image
              src={Img3}
              className={"absolute z-[1] rounded-4xl w-[400px] object-cover"}
              alt=""
              aria-hidden="true"
              role="presentation"
            />
          </div>
        </div>
      </div>
      <div
        className={"bg-neutral-0 h-20 relative"}
        aria-hidden="true"
      >
        <div className={"absolute left-0 bg-green-100 w-1/3 h-full rounded-br-full"}></div>
      </div>
    </section>
  );
};
