import Link from "next/link";
import { ROUTES } from "@/app/constants/routes";

export default function NotFound() {
  return (
    <section className={"bg-green-100"}>
      <div className={"container"}>
        <div className={"flex items-center text-center gap-8 flex-col"}>
          <h1>404</h1>
          <p>This page could not be found.</p>
          <Link
            href={ROUTES.REGISTRATION}
            className={"w-fit primary-link"}
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
