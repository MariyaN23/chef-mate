import { Banner } from "@/app/ui/home/banner";
import { Demo } from "@/app/ui/home/demo";
import { HowItWorks } from "@/app/ui/home/how-it-works";
import { Benefits } from "@/app/ui/home/benefits";
import { Recipes } from "@/app/ui/home/recipes";
import { Testimonials } from "@/app/ui/home/testimonials";
import { Pricing } from "@/app/ui/home/pricing";

export default function Home() {
  return (
    <>
      <Banner />
      <Demo />
      <HowItWorks />
      <Benefits />
      <Recipes />
      <Testimonials />
      <Pricing />
    </>
  );
}
