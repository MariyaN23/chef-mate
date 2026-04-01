import styles from "./recipes.module.css";
import { HomeSectionHeader } from "@/app/ui/home/components/home-section-header";
import Img1 from "@/app/assets/images/food-spread.webp";
import Img2 from "@/app/assets/images/avocado-toast.webp";
import Img3 from "@/app/assets/images/tomato-salad.webp";
import Img4 from "@/app/assets/images/beet-salad.webp";
import Image from "next/image";
import { ArrowRight } from "@/app/ui/icons/arrow-right";
import { ROUTES } from "@/app/constants/routes";
import Link from "next/link";
import { LearnMore } from "@/app/ui/home/components/learn-more";

export const Recipes = () => {
  return (
    <section>
      <div className={"container"}>
        <HomeSectionHeader
          headerTitle={"Recipes"}
          headerDescription={`Recipes crafted by AI, personalized to perfectly align 
          with your unique dietary needs and flavor preferences`}
        />
        <div className={"grid 2xl:grid-cols-2 justify-items-center gap-14"}>
          <div className={"grid gap-8 text-center sm:text-left"}>
            <div
              className={
                "rounded-4xl border-2 border-green-900 p-10 flex flex-col sm:flex-row items-center gap-9"
              }
            >
              <div className={"flex flex-col items-center sm:items-start gap-8"}>
                <p className={"accent-text-sm"}>Creamy Avocado Toast with Poached Egg</p>
                <LearnMore />
              </div>
              <Image
                src={Img2}
                className={"w-[220px] flex-shrink-0"}
                alt="Avocado toast with Poached Egg"
              />
            </div>
            <div
              className={
                "rounded-4xl sm:rounded-full bg-lime-400 p-10 flex flex-col sm:flex-row items-center gap-9"
              }
            >
              <Image
                src={Img3}
                className={"w-[220px] flex-shrink-0 order-1 sm:order-0"}
                alt="Avocado and Tomato Salad"
              />
              <div className={"flex flex-col items-center sm:items-start gap-8"}>
                <p className={"accent-text-sm"}>
                  Fresh Avocado and Tomato Salad with Seasonal Greens
                </p>
                <LearnMore />
              </div>
            </div>
            <div
              className={
                "rounded-4xl bg-green-100 p-10 flex flex-col sm:flex-row items-center gap-9"
              }
            >
              <div className={"flex flex-col items-center sm:items-start gap-8"}>
                <p className={"accent-text-sm"}>
                  Mediterranean Beet Salad with Goat Cheese and Walnuts
                </p>
                <LearnMore />
              </div>
              <Image
                src={Img4}
                className={"w-[220px] flex-shrink-0"}
                alt="Beet Salad with Goat Cheese"
              />
            </div>
          </div>
          <div className={"sm:relative"}>
            <div
              className={`flex items-center gap-6 px-6 pb-2 sm:absolute bg-neutral-0 rounded-br-4xl ${styles.recipes}`}
            >
              <p className={"accent-text-sm max-w-48"}>Explore more recipes</p>
              <Link
                href={ROUTES.RECIPES}
                className={"outline-link"}
              >
                <ArrowRight />
              </Link>
            </div>
            <Image
              src={Img1}
              className={"rounded-4xl w-auto md:h-full object-cover"}
              alt=""
              aria-hidden="true"
              role="presentation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
