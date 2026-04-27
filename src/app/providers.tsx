"use client";
import { PropsWithChildren } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Providers = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default Providers;
