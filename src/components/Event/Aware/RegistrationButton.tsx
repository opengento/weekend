"use client";

import Link from "next/link";
import { useTranslation } from "next-i18next";
import {FaTicket, FaTicketSimple} from "react-icons/fa6";

const RegistrationButton = () => {
  const { t } = useTranslation(["events"]);
  const href = t("current.registrationUrl");
  const label = t("current.registrationLabel");

  return (
    <>
      {href && label && (
        <Link
          href={href}
          target="_blank"
          className="btn btn-primary btn-outline lg:btn-wide"
        >
          <FaTicket />
          {label}
        </Link>
      )}
    </>
  );
};

export default RegistrationButton;
