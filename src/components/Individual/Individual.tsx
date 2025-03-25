"use client";

import { useTranslation } from "next-i18next";
import IndividualCard from "@/components/Individual/IndividualCard";
import Drawer from "@/components/Drawer/Drawer";
import IndividualAvatar from "@/components/Individual/IndividualAvatar";
import IndividualIdentity from "@/components/Individual/IndividualIdentity";
import { Individual as IndividualType } from "@/interfaces/individual";

interface Individual {
  individual: IndividualType;
}

const Individual = ({ individual }: Individual) => {
  const { t } = useTranslation(["common"]);
  return (
    <Drawer
      button={(
        <>
          <div className="flex flex-row items-center gap-4 mx-auto">
            <IndividualAvatar individual={individual}/>
            <IndividualIdentity individual={individual}/>
          </div>
          <div className="hidden absolute -bottom-2 group-hover:flex btn btn-primary items-center">
            {t("common:SeeMore")}
          </div>
        </>
      )}
      size="2xl"
    >
      <IndividualCard individual={individual} />
    </Drawer>
  );
};

export default Individual;
