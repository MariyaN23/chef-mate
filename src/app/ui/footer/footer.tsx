import { ROUTES } from "@/app/constants/routes";
import { Logo } from "@/app/ui/icons/logo";
import Link from "next/link";
import { Facebook } from "@/app/ui/icons/facebook";
import { X } from "@/app/ui/icons/x";
import { Tiktok } from "@/app/ui/icons/tiktok";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={"bg-green-900"}>
      <div className={"container py-7 2xl:py-28"}>
        <div className={"flex flex-col gap-7 2xl:flex-row justify-between"}>
          <div className={"flex flex-col gap-4 md:gap-20"}>
            <div className={"flex flex-col md:flex-row gap-6 md:gap-24 text-lime-400"}>
              <Link
                href={ROUTES.HOME}
                aria-label={"Home page"}
              >
                <Logo />
              </Link>
              <nav aria-label="Footer navigation">
                <ul className={"grid 2xl:grid-cols-2"}>
                  <li>
                    <Link
                      href={ROUTES.RECIPES}
                      className={"link-underline"}
                    >
                      Recipes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ROUTES.SUPPORT}
                      className={"link-underline"}
                    >
                      Customer Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ROUTES.BLOG}
                      className={"link-underline"}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={ROUTES.LOGIN}
                      className={"link-underline"}
                    >
                      Your Profile
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={"flex flex-col md:flex-row gap-2 text-green-100"}>
              <p className={"2xl:text-nowrap"}>
                {`© ${currentYear} AIChefMate. All rights reserved.`}
              </p>
              <span className={"hidden md:block"}>|</span>
              <Link
                href={ROUTES.PRIVACY}
                className={"link-underline"}
              >
                Privacy Policy
              </Link>
              <span className={"hidden md:block"}>|</span>
              <Link
                href={ROUTES.TERMS}
                className={"link-underline"}
              >
                Terms of Use
              </Link>
            </div>
          </div>
          <p className={"text-lime-400 max-w-2xl"}>
            Join us on our journey to make meal planning simple and joyful. Connect with us on
            social media, explore our FAQs for quick answers, or drop us a line anytime.
          </p>
          <ul className={"flex flex-col sm:flex-row 2xl:flex-col gap-4"}>
            <li className={"text-neutral-0"}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={ROUTES.FACEBOOK}
              >
                <Facebook />
              </Link>
            </li>
            <li className={"text-neutral-0"}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={ROUTES.X}
              >
                <X />
              </Link>
            </li>
            <li className={"text-neutral-0"}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={ROUTES.TIKTOK}
              >
                <Tiktok />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
