"use client";

import Container from "@/layouts/Container";
import MainLogo from "@/components/Logo/MainLogo";
import {useTranslation} from "next-i18next";
import type { UrlObject } from 'url';
import { HTMLAttributeAnchorTarget } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

interface Nav {
  label: string;
  href: string | UrlObject;
  target?: HTMLAttributeAnchorTarget | undefined;
}

interface Menu {
  title: string;
  nav: Nav[];
}

interface Social {
  code: "github" | "linkedin" | "youtube";
  href: string | UrlObject;
}

const Footer = () => {
  const { t } = useTranslation(["navigation"]);
  const menus = t("footer.menu", { returnObjects: true }) as Menu[];
  const socials = t("footer.social", { returnObjects: true }) as Social[];

  const socialIcons = {
    "github": <FaGithub className="size-8" />,
    "linkedin": <FaLinkedin className="size-8" />,
    "youtube": <FaYoutube className="size-8" />,
  }

  return (
    <Container size="large" className="bg-neutral">
      <footer className="footer text-base-content p-10">
        <aside>
          <MainLogo showText={false} size="large"/>
          <p>{t("footer.copyright")}</p>
        </aside>
        {menus.map((menu, index) => (
          <nav key={`menu-${index}`}>
            <h6 className="footer-title">{menu.title}</h6>
            {menu.nav.map((nav, index) => (
              <Link
                key={`nav-${index}`}
                href={nav.href}
                target={nav.target}
                className="link link-hover"
              >
                {nav.label}
              </Link>
            ))}
          </nav>
        ))}
        <nav>
          <h6 className="footer-title">{t("footer.socialTitle")}</h6>
          <div className="grid grid-flow-col gap-4">
            {socials.map((social, index) => (
              <Link
                key={`social-${index}`}
                href={social.href}
                target="_blank"
              >
                {socialIcons[social.code]}
              </Link>
            ))}
          </div>
        </nav>
      </footer>
    </Container>
  );
}

export default Footer;
