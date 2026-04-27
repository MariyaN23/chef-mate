"use client";
import Video from "../../assets/images/demo-video.webp";
import Image from "next/image";
import { HomeSectionHeader } from "@/app/ui/home/components/home-section-header";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/dist/SplitText";
import gsap from "gsap";

export const Demo = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#demo .slogan", {
      type: "words",
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#demo .slogan",
          start: "top 100%",
          markers: true,
        },
      })
      .from(titleSplit.words, {
        opacity: 0,
        duration: 2,
        ease: "expo.out",
        stagger: 0.1,
      });
  });

  return (
    <section
      id="demo"
      className={"overflow-x-hidden"}
    >
      <div className={"container"}>
        <HomeSectionHeader
          headerTitle={"Demo"}
          headerDescription={"See how it works: your personalized meal planning journey"}
        />
        <div
          className={
            "rounded-l-full 2xl:border-2 border-green-900 2xl:py-8 2xl:px-10 2xl:-mr-[calc(50vw-50%)]"
          }
        >
          <div className={"flex flex-col 2xl:flex-row items-center 2xl:items-start gap-12"}>
            <div
              className={"rounded-full border-2 border-green-900 py-2 px-2.5 2xl:py-8 2xl:px-10"}
            >
              <Image
                src={Video}
                className={"rounded-full"}
                alt="Demo video"
              />
            </div>
            <p className={"text-center 2xl:text-right 2xl:max-w-sm slogan"}>
              Every meal is a chance to nourish your body, inspire your mind, and feed your soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
