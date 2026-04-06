import { HomeSectionHeader } from "@/app/ui/home/components/home-section-header";
import Image from "next/image";
import Img from "@/app/assets/images/assistance.webp";
import { ROUTES } from "@/app/constants/routes";
import { ArrowRight } from "@/app/assets/icons/arrow-right";
import Link from "next/link";

export const Assistance = () => {
  return (
    <section className={"overflow-x-hidden"}>
      <div className={"container"}>
        <HomeSectionHeader
          headerTitle={"Need Assistance?"}
          headerDescription={"We’re here to help!"}
        />
        <div
          className={
            "rounded-l-full 2xl:border-2 border-green-900 2xl:py-8 2xl:px-10 2xl:-mr-[calc(50vw-50%)]"
          }
        >
          <div className={"flex flex-col 2xl:flex-row items-center gap-12"}>
            <div
              className={"rounded-full border-2 border-green-900 py-2 px-2.5 2xl:py-8 2xl:px-10"}
            >
              <Image
                src={Img}
                className={"rounded-full"}
                alt="Demo video"
              />
            </div>
            <div
              className={
                "flex flex-col text-center 2xl:text-left items-center 2xl:items-start gap-12"
              }
            >
              <p className={"accent-text 2xl:max-w-sm"}>
                Have questions or need help with AIChefMate? Our dedicated support team is ready to
                assist you. Get the answers and assistance you need to make the most of your meal
                planning experience.
              </p>
              <Link
                href={ROUTES.RECIPES}
                className={"secondary-link md:w-fit mt-auto"}
              >
                <div className={"flex items-center gap-2 justify-center"}>
                  <span>Get Support</span>
                  <ArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
