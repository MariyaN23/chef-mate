import { ROUTES } from "@/app/constants/routes";
import { ArrowRight } from "@/app/ui/icons/arrow-right";
import Link from "next/link";

export const LearnMore = () => {
  return (
    <Link
      href={ROUTES.RECIPES}
      className={"outline-link w-fit"}
    >
      <div className={"flex flex-col sm:flex-row items-center gap-2"}>
        <span>Learn More</span>
        <ArrowRight />
      </div>
    </Link>
  );
};
