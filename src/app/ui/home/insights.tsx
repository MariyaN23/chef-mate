import { HomeSectionHeader } from "@/app/ui/home/components/home-section-header";
import { ArrowRight } from "@/app/assets/icons/arrow-right";
import { ROUTES } from "@/app/constants/routes";
import Link from "next/link";
import Img1 from "../../assets/images/bock-choy-cabbage.webp";
import Img2 from "../../assets/images/healty-salad.webp";
import Img3 from "../../assets/images/potted-plant.webp";
import Image from "next/image";

const insights = [
  {
    id: "03042603",
    title: "Mastering Meal Prep: Time-Saving Tips for Busy Weekdays",
    image: Img1,
    alt: "Bock choy",
  },
  {
    id: "03042602",
    title: "The Power of Plant-Based: Benefits Beyond the Plate",
    image: Img2,
    alt: "Salad",
  },
  {
    id: "03042601",
    title: "Balancing Nutrients: A Guide to a Well-Rounded Diet",
    image: Img3,
    alt: "Potted plant",
  },
];

export const Insights = () => {
  return (
    <section className={"bg-green-100"}>
      <div
        className={"bg-neutral-0 h-20 relative"}
        aria-hidden="true"
      >
        <div className={"absolute left-0 bg-green-100 w-1/3 h-full rounded-tr-full"}></div>
      </div>
      <div className={"container"}>
        <HomeSectionHeader
          headerTitle={"Healthy Insights"}
          headerDescription={"Latest News, Expert Blogs, and Nutritional Learning"}
        />
        <div className={"grid sm:grid-cols-2 lg:grid-cols-3 gap-5"}>
          {insights.map((item) => (
            <div
              key={item.id}
              className={"rounded-4xl p-7 flex flex-col gap-8 bg-neutral-0"}
            >
              <Image
                src={item.image}
                className={"rounded-3xl aspect-square w-full object-cover"}
                alt={item.alt}
              />
              <h3>{item.title}</h3>
              <Link
                href={ROUTES.RECIPES}
                className={"secondary-link md:w-fit mt-auto"}
              >
                <div className={"flex items-center gap-2 justify-center"}>
                  <span>Read Article</span>
                  <ArrowRight />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
