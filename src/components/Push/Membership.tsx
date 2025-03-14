"use client";

import { useTranslation } from "next-i18next";
import Link from "next/link";
import Article from "@/layouts/Article";

const Membership = () => {
  const { t } = useTranslation(["common"]);
  const advantages = t("common:membership:advantages", { returnObjects: true }) as string[];
  const conditions = t("common:membership:conditions", { returnObjects: true }) as string[];

  return (
    <Article color="base-200">
      <div className="w-full flex flex-col gap-8 lg:flex-row-reverse lg:justify-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            {t("common:membership.title")}
          </h1>
          <ul className="pl-4 py-8 list-disc">
            {advantages.map((text, index) => (
              <li key={`membership-advantages-${index}`}>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <ul className="p-4 text-lg">
              {conditions.map((text, index) => (
                <li key={`membership-conditions-${index}`}>
                  {text}
                </li>
              ))}
            </ul>
            <Link
              href={t("common:membership.href")}
              target="_blank"
              className="btn btn-primary btn-lg"
            >
              {t("common:membership.label")}
            </Link>
          </div>
        </div>
      </div>
    </Article>
  );
};

export default Membership;
