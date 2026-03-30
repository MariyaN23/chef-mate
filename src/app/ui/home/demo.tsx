import { Line } from "@/app/ui/icons/line";
import Video from "../../assets/images/demo-video.webp";
import Image from "next/image";

export const Demo = () => {
  return (
    <section className={"overflow-x-hidden"}>
      <div className={"container"}>
        <header className={"flex flex-col md:flex-row items-center gap-7 px-16"}>
          <h2>Demo</h2>
          <div
            aria-hidden="true"
            className={"hidden md:block"}
          >
            <Line />
          </div>
          <p className={"text-center md:text-left 2xl:max-w-96"}>
            See how it works: your personalized meal planning journey
          </p>
        </header>
        <div
          className={
            "rounded-l-full 2xl:border-2 border-green-900 2xl:py-8 2xl:px-10 2xl:-mr-[calc(50vw-50%)]"
          }
        >
          <div className={"flex flex-col 2xl:flex-row items-center 2xl:items-start gap-12"}>
            <div className={"rounded-full border-2 border-green-900 py-2 px-2.5 2xl:py-8 2xl:px-10"}>
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
