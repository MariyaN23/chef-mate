"use client";
import { Line } from "@/app/assets/icons/line";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props = {
  headerTitle: string;
  headerDescription: string;
};

export const HomeSectionHeader = ({ headerTitle, headerDescription }: Props) => {
  const container = useRef<HTMLHeadElement>(null);

  useGSAP(
    () => {
      gsap.from(["h2", "p"], {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
      });
    },
    { scope: container }
  );

  return (
    <header
      ref={container}
      className={"flex flex-col md:flex-row items-center text-center md:text-left gap-7"}
    >
      <h2>{headerTitle}</h2>
      <div
        aria-hidden="true"
        className={"hidden md:block"}
      >
        <Line />
      </div>
      <p className={"2xl:max-w-98"}>{headerDescription}</p>
    </header>
  );
};
