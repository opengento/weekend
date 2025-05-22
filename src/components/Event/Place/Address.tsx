"use client";

import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaLocationDot } from "react-icons/fa6";
import { EventPlace } from "@/interfaces/event";
import Typography from "@/components/Typography/Typography";

interface Address {
  place: EventPlace
}

const Address = ({ place }: Address) => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="flex flex-col gap-2">
      <Typography color="dark" weight="semibold" className="underline">
        {t("common:Address")}
      </Typography>
      <Link href={place.url} target="_blank" className="flex flex-row gap-2">
        <FaLocationDot className="size-8 text-primary" width={32} height={32} />
        <address className="whitespace-pre-wrap">
          {place.name}<br />
          {place.address}
        </address>
      </Link>
    </div>
  );
};

export default Address;
