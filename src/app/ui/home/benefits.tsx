import { HomeSectionHeader } from "@/app/ui/home/components/home-section-header";
import Img1 from "@/app/assets/images/grocery-bag-2.webp";
import Img2 from "@/app/assets/images/grocery-bag-1.webp";
import Image from "next/image";
import { BenefitsSlogan } from "@/app/ui/home/components/benefits-slogan";

export const Benefits = () => {
  return (
    <section>
      <div className={"container"}>
        <HomeSectionHeader
          headerTitle={"Benefits"}
          headerDescription={`Get meal plans tailored to your unique dietary needs, preferences, 
          and goals, ensuring a balanced and enjoyable diet.`}
        />
        <div className={"grid place-items-center gap-x-5 gap-y-10 md:grid-cols-2 2xl:grid-cols-4"}>
          <BenefitsSlogan
            sloganTitle={"Personalized Nutrition"}
            sloganDescription={`Get meal plans tailored to your unique dietary needs, 
            preferences, and goals, ensuring a balanced and enjoyable diet.`}
            className={"bg-lime-400"}
          />
          <Image
            src={Img1}
            className={"rounded-full w-[260px] 2xl:w-full"}
            alt=""
            aria-hidden="true"
            role="presentation"
          />
          <BenefitsSlogan
            sloganTitle={"Time-Saving Convenience"}
            sloganDescription={`Say goodbye to meal planning stress. Our AI-driven platform simplifies your weekly
              meal preparation, saving you valuable time.`}
          />
          <BenefitsSlogan
            sloganTitle={"Healthier Eating Habits"}
            sloganDescription={`Easily adopt a healthier lifestyle with nutrient-rich meal plans and educational 
            content on nutrition and wellness.`}
            className={"bg-green-100"}
          />
          <BenefitsSlogan
            sloganTitle={"Cost-Effective Shopping"}
            sloganDescription={`Reduce food waste and save money with efficient grocery shopping lists that align
             perfectly with your meal plans.`}
          />
          <BenefitsSlogan
            sloganTitle={"Seamless Grocery Delivery"}
            sloganDescription={`Enjoy the convenience of having all your meal ingredients delivered right to 
            your doorstep through our local grocery store partnerships.`}
          />
          <BenefitsSlogan
            sloganTitle={"Community Support"}
            sloganDescription={`Join a community of like-minded individuals, share experiences, recipes, 
            and tips, and get motivated on your journey to healthier eating.`}
            className={"bg-green-900 2xl:relative -top-36"}
            titleClass={"text-lime-400"}
            descriptionClass={"text-beige"}
          />
          <Image
            src={Img2}
            className={"rounded-full object-cover aspect-square w-[360px] 2xl:w-full"}
            alt=""
            aria-hidden="true"
            role="presentation"
          />
        </div>
      </div>
    </section>
  );
};
