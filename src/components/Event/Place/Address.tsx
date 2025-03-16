import { EventPlaceProps } from "@/components/Event/event.types";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Typography from "@/components/Typography/Typography";
import {useTranslation} from "next-i18next";

interface Address {
  place: EventPlaceProps
}

const Address = ({ place }: Address) => {
  const { t } = useTranslation(["common"]);

  return (
    <div className="flex flex-col gap-2">
      <Typography color="dark" className="underline">
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
