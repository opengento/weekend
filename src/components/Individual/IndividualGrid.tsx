import classNames from "classnames";
import Individual from "@/components/Individual/Individual";
import { Individual as IndividualType } from "@/interfaces/individual";

interface IndividualGrid {
  individuals: IndividualType[];
  itemsPerRow?: 1 | 2 | 3 | 4;
}

const IndividualGrid = ({ individuals, itemsPerRow = 4 }: IndividualGrid) => {
  return (
    <div className={classNames(
      "grid grid-cols-1 gap-12",
      {
        "md:grid-cols-2": itemsPerRow === 2,
        "md:grid-cols-3": itemsPerRow === 3,
        "md:grid-cols-2 lg:grid-cols-4": itemsPerRow === 4,
      }
    )}>
      {individuals.map((individual, index) => (
        <Individual individual={individual} key={`individuals-grid-item-${index}`} />
      ))}
    </div>
  );
};

export default IndividualGrid;
