"use client";

import MainLogo from "@/components/Logo/MainLogo";
import { useTranslation } from "next-i18next";
import type {UrlObject} from "url";
import {HTMLAttributeAnchorTarget} from "react";
import Link from "next/link";
import RegistrationButton from "@/components/Event/Aware/RegistrationButton";
import Container from "@/layouts/Container";

interface NavProps {
  label: string;
  href: string | UrlObject;
  target?: HTMLAttributeAnchorTarget | undefined;
}

const Header = () => {
  const { t } = useTranslation(["navigation"]);
  const menu = t("header", { returnObjects: true }) as NavProps[];

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
      <Container size="large" className="navbar">
        <div className="navbar-start">
          <MainLogo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {renderNav("desktop")}
          </ul>
        </div>
        <div className="navbar-end">
          <RegistrationButton/>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {renderNav("mobile")}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
