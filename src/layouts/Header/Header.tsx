"use client";

import MainLogo from "@/components/Logo/MainLogo";
import { useTranslation } from "next-i18next";
import type {UrlObject} from "url";
import { HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";
import Drawer from "@/components/Drawer/Drawer";

interface NavProps {
  label: string;
  href: string | UrlObject;
  target?: HTMLAttributeAnchorTarget | undefined;
}

const Header = () => {
  const { t } = useTranslation(["navigation"]);
  const menu = t("header", { returnObjects: true }) as NavProps[];
  const cta = t("cta", { returnObjects: true }) as NavProps;

  const renderNav = (prefix: string) => (
    <>
      {menu.map((nav, index) => (
        <li key={`${prefix}-nav-${index}`}>
          <Link
            href={nav.href}
            target={nav.target}
            className="font-semibold"
          >
            {nav.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <header className="bg-neutral sticky top-0 w-full z-50">
      <div className="navbar mx-auto md:px-12 lg:px-16 max-w-[1440px]">
        <div className="navbar-start">
          <MainLogo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {renderNav("desktop")}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href={cta.href}
            target={cta.target}
            className="btn btn-primary btn-outline"
          >
            {cta.label}
          </Link>
          <div className="w-6 mx-4 lg:hidden">
            <Drawer
              button={(
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
              size="lg"
            >
              <ul className="menu bg-base-200 text-base-content min-h-full p-4">
                {renderNav("mobile")}
              </ul>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
