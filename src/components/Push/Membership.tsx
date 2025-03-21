"use client";

import { useTranslation } from "next-i18next";
import Article from "@/layouts/Article";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { ButtonLinkProps } from "@/components/ButtonLink/link.types";

const Membership = () => {
  const { t } = useTranslation(["association"]);
  const advantages = t("association:membership:advantages", { returnObjects: true }) as string[];
  const conditions = t("association:membership:conditions", { returnObjects: true }) as string[];
  const enrol = t("association:membership:enrol", { returnObjects: true }) as ButtonLinkProps;

  return (
    <Article color="base-200">
      <div className="w-full flex flex-col gap-8 lg:flex-row-reverse lg:justify-center items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            {t("association:membership.title")}
          </h1>
          <ul className="pl-4 py-8 lg:list-disc">
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
            <ButtonLink cta={enrol} className="btn-lg" />
          </div>
        </div>
      </div>
    </Article>
  );
};

export default Membership;
