import Image from "next/image";
import Img1 from "../../assets/images/grocery-bag-1.webp";
import Img2 from "../../assets/images/soup-dish.webp";
import Img3 from "../../assets/images/grocery-bag-2.webp";
import Img4 from "../../assets/images/potted-plant.webp";
import { Ingredients } from "@/app/ui/icons/ingredients";
import { Carrot } from "@/app/ui/icons/carrot";
import { Cherry } from "@/app/ui/icons/cherry";
import { Bread } from "@/app/ui/icons/bread";

export const Banner = () => {
  return (
    <section className={"bg-green-100"}>
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
              className={"hidden 2xl:block absolute right-0 -top-32 p-3 rounded-full bg-lime-400"}
            >
              <Ingredients />
            </div>
            <div className={"text-6xl font-syne"}>95%</div>
            <div className={"mb-6"}>Improved Eating Habits</div>
            <Image
              src={Img1}
              className={"rounded-2xl w-[260px] object-cover"}
              alt=""
              aria-hidden="true"
              role="presentation"
            />
          </div>
          <div className={"hidden 2xl:block relative -mt-64"}>
            <div
              className={
                "hidden 2xl:block absolute left-4 -top-28 p-2 rounded-full border-[1.5px] border-neutral-1000"
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
            <div className={"font-syne font-medium text-6xl"}>30 000+</div>
            <div className={"text-2xl"}>Happy Users</div>
          </div>
          <div className={"w-fit h-fit bg-neutral-0 rounded-4xl p-4 2xl:-mt-60 relative"}>
            <div
              className={
                "hidden 2xl:block absolute right-12 -top-20 p-1.5 rounded-full bg-green-900"
              }
            >
              <Bread />
            </div>
            <Image
              src={Img3}
              className={"rounded-2xl w-[260px] object-cover"}
              alt=""
              aria-hidden="true"
              role="presentation"
            />
            <div className={"text-6xl font-syne mt-6"}>25%</div>
            <div>Saved on Groceries</div>
          </div>
          <div className={"hidden 2xl:block relative -mt-80"}>
            <div
              className={
                "hidden 2xl:block absolute -left-12 -top-32 p-3.5 rounded-full bg-neutral-0"
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
