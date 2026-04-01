import { Logo } from "@/app/assets/icons/logo";
import Link from "next/link";
import { ROUTES } from "@/app/constants/routes";

export const Header = () => {
  return (
    <header className={"bg-green-100"}>
      <div className={"container pt-4 2xl:pt-16"}>
        <div className={"flex items-center justify-between"}>
          <Link
            href={ROUTES.HOME}
            className={"text-green-900"}
            aria-label={"Home page"}
          >
            <Logo />
          </Link>
          <nav aria-label="Main navigation">
            <ul className={"hidden 2xl:flex gap-20"}>
              <li>
                <Link
                  href={ROUTES.RECIPES}
                  className={"nav-link"}
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.BLOG}
                  className={"nav-link"}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.SUPPORT}
                  className={"nav-link"}
                >
                  Support
                </Link>
              </li>
            </ul>
          </nav>
          <div className={"flex items-center gap-8"}>
            <Link
              href={ROUTES.LOGIN}
              className={"nav-link"}
            >
              Log in
            </Link>
            <Link
              href={ROUTES.REGISTRATION}
              className={"hidden 2xl:block primary-link"}
            >
              Start for free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
