import { Banner } from "@/app/ui/home/banner";
import { Demo } from "@/app/ui/home/demo";
import { HowItWorks } from "@/app/ui/home/how-it-works";
import { Benefits } from "@/app/ui/home/benefits";

export default function Home() {
  return (
    <>
      <Banner />
      <Demo />
      <HowItWorks />
      <Benefits />
    </>
  );
}
