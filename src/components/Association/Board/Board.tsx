"use client";

import { useTranslation } from "next-i18next";
import getIndividual from "@/functions/individual";
import { IndividualProps } from "@/components/Individual/individual.types";
import IndividualGrid from "@/components/Individual/IndividualGrid";

const Board = () => {
  const { t } = useTranslation(["common"]);
  const board = t("common:association.board.members", { returnObjects: true }) as number[];

  const individuals = board.reduce(
    (individuals, id) => {
      const individual = getIndividual(id);
      if (individual) {
        individuals.push(individual);
      }

      return individuals;
    },
    [] as IndividualProps[]
  );

  return (
    <div className="w-full flex flex-col justify-center py-8">
      <IndividualGrid individuals={individuals} itemsPerRow={3} />
    </div>
  );
};

export default Board;
