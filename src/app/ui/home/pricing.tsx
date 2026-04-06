"use client";

import { HomeSectionHeader } from "@/app/ui/home/components/home-section-header";
import Img1 from "@/app/assets/images/artichoke.webp";
import Image from "next/image";
import { ROUTES } from "@/app/constants/routes";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    id: "01-00",
    name: "Free Plan",
    price: "0",
    features: ["Basic AI meal planning", "Limited recipe access", "Manual grocery list creation"],
    target: "Those who want to explore the platform's basic functionalities.",
    buttonLabel: "Get Started For Free",
  },
  {
    id: "02-00",
    name: "Standard Plan",
    price: "9.99",
    features: [
      "Comprehensive AI meal planning",
      "Full recipe library access",
      "Automated grocery lists",
      "Grocery delivery integration",
    ],
    target: "Individuals or families looking for full meal planning support and convenience.",
    buttonLabel: "Subscribe Now",
  },
  {
    id: "03-00",
    name: "Premium Plan",
    price: "19.99",
    features: [
      "All Standard features",
      "Exclusive gourmet recipes",
      "Nutritional consultations",
      "Advanced customization options",
    ],
    target:
      "Users seeking a premium culinary experience with added personalization and expert guidance.",
    buttonLabel: "Go Premium",
  },
];

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("02-00");

  return (
    <section>
      <div className={"container"}>
        <HomeSectionHeader
          headerTitle={"Pricing"}
          headerDescription={"Find your perfect plan: tailored pricing for every need"}
        />
      </div>
      <div
        className={
          "mx-auto max-w-content relative flex justify-center items-center px-8 2xl:px-32 mb-16 2xl:mb-24"
        }
      >
        <div
          className={"hidden 2xl:block absolute left-0 rounded-4xl w-1/4 h-full 2xl:scale-y-90"}
          aria-hidden="true"
        >
          <Image
            src={Img1}
            className={"rounded-[inherit] object-cover object-right h-full"}
            alt=""
          />
        </div>
        <div className={"relative z-10 grid xl:grid-cols-3 gap-4 xl:gap-2"}>
          {plans.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPlan(item.id)}
              className={`group border-2 border-green-900 p-4 md:py-16 md:px-14 rounded-4xl flex flex-col h-full transition-all
                  ${selectedPlan === item.id ? "bg-lime-400 2xl:scale-105" : "bg-neutral-0 hover:bg-green-100"}`}
            >
              <div className={"text-center mb-6"}>
                <h3 className={"mb-3"}>{item.name}</h3>
                <span className={"font-bold text-2xl sm:text-3xl md:text-4xl"}>${item.price}</span>
                <p>per month</p>
              </div>
              <ul className={"list-inside list-disc pb-7 border-b-2 border-green-900"}>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p className={"my-7"}>
                <span className={"font-semibold"}>Best For: </span>
                {item.target}
              </p>
              <Link
                href={ROUTES.REGISTRATION}
                className={`text-center mt-auto group-hover:bg-lime-400
                    ${selectedPlan === item.id ? "primary-link" : "outline-link text-center"}`}
              >
                {item.buttonLabel}
              </Link>
            </div>
          ))}
        </div>
        <div
          className={"hidden 2xl:block absolute right-0 rounded-4xl w-1/4 h-full 2xl:scale-y-90"}
          aria-hidden="true"
        >
          <Image
            src={Img1}
            className={"rounded-[inherit] object-cover object-left h-full"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
