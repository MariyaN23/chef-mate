"use client";
import Image from "next/image";
import Img1 from "../../assets/images/grocery-bag-1.webp";
import Img2 from "../../assets/images/soup-dish.webp";
import Img3 from "../../assets/images/grocery-bag-2.webp";
import Img4 from "../../assets/images/potted-plant.webp";
import { Ingredients } from "@/app/assets/icons/ingredients";
import { Carrot } from "@/app/assets/icons/carrot";
import { Cherry } from "@/app/assets/icons/cherry";
import { Bread } from "@/app/assets/icons/bread";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Banner = () => {
  useGSAP(() => {
    const tl1 = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.5 } });
    const tl2 = gsap.timeline({ repeat: -1, delay: 1 });
    const icons = gsap.utils.toArray<HTMLElement>(".floating-icon");
    const stats = gsap.utils.toArray<HTMLElement>(".stat-number");

    tl1
      .from("#banner h1, #banner p", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
      })
      .from(
        "#banner button",
        {
          y: 20,
          opacity: 0,
          stagger: 0.1,
        },
        "-=0.5"
      );

    icons.forEach((icon) => {
      tl2.to(icon, {
        y: -15,
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
      });
    });

    stats.forEach((stat) => {
      const finalValue = Number(stat.getAttribute("data-target"));
      const suffix = stat.innerText.replace(/[0-9]/g, "");
      const obj = { value: 0 };

      gsap.to(obj, {
        value: finalValue,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          stat.innerText = Math.ceil(obj.value).toLocaleString() + suffix;
        },
      });
    });
  });

  return (
    <section
      id="banner"
      className={"bg-green-100"}
    >
      <div className={"container"}>
        <div className={"flex flex-col gap-10 items-center justify-center text-center"}>
          <h1 className={"max-w-4xl text-balance"}>
            Elevate Your Mealtime with AI-Powered Personalization
          </h1>
          <p className={"text-2xl"}>Effortless Planning, Healthier Eating</p>
        </div>
        <div className={"flex flex-col items-center gap-6"}>
          <button className={"outline-btn w-fit"}>Try Our Demo</button>
          <button className={"secondary-btn w-fit"}>Start For Free</button>
        </div>
        <div className={"flex flex-col items-center 2xl:flex-row gap-8 2xl:gap-4 justify-between"}>
          <div className={"w-fit h-fit bg-neutral-0 rounded-4xl p-4 2xl:-mt-80 relative"}>
            <div
              className={
                "floating-icon hidden 2xl:block absolute right-0 -top-32 p-3 rounded-full bg-lime-400"
              }
            >
              <Ingredients />
            </div>
            <div
              className={"text-6xl font-syne stat-number"}
              data-target="95"
            >
              95%
            </div>
            <div className={"mb-6"}>Improved Eating Habits</div>
            <Image
              src={Img1}
              className={"rounded-2xl w-[260px] object-cover"}
              alt=""
              aria-hidden="true"
              role="presentation"
              loading="eager"
            />
          </div>
          <div className={"hidden 2xl:block relative -mt-64"}>
            <div
              className={
                "floating-icon hidden 2xl:block absolute left-4 -top-28 p-2 rounded-full border-[1.5px] border-neutral-1000"
              }
            >
              <Carrot />
            </div>
            <Image
              src={Img2}
              className={"rounded-4xl w-[275px] object-cover"}
              alt=""
              aria-hidden="true"
              role="presentation"
            />
          </div>
          <div
            className={
              "text-center rounded-4xl py-14 max-w-96 w-full h-fit bg-green-900 text-lime-400"
            }
          >
            <div
              className={"font-syne font-medium text-6xl stat-number"}
              data-target="30000"
            >
              30 000+
            </div>
            <div className={"text-2xl"}>Happy Users</div>
          </div>
          <div className={"w-fit h-fit bg-neutral-0 rounded-4xl p-4 2xl:-mt-60 relative"}>
            <div
              className={
                "floating-icon hidden 2xl:block absolute right-12 -top-20 p-1.5 rounded-full bg-green-900"
              }
            >
              <Bread />
            </div>
            <Image
              src={Img3}
              className={"rounded-2xl w-[260px] h-[293px] object-cover"}
              alt=""
              aria-hidden="true"
              role="presentation"
            />
            <div
              className={"text-6xl font-syne mt-6 stat-number"}
              data-target="25"
            >
              25%
            </div>
            <div>Saved on Groceries</div>
          </div>
          <div className={"hidden 2xl:block relative -mt-80"}>
            <div
              className={
                "floating-icon hidden 2xl:block absolute -left-12 -top-32 p-3.5 rounded-full bg-neutral-0"
              }
            >
              <Cherry />
            </div>
            <Image
              src={Img4}
              className={"rounded-4xl w-[275px] object-cover"}
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
        <div className={"absolute right-0 bg-green-100 w-1/3 h-full rounded-bl-full"}></div>
      </div>
    </section>
  );
};
