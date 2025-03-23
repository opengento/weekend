import { Individual } from "@/interfaces/individual";
import IndividualGrid from "@/components/Individual/IndividualGrid";

interface Board {
  individuals: Individual[]
}

const Board = ({ individuals }: Board) => {
  return (
    <div className="w-full flex flex-col justify-center py-8">
      <IndividualGrid individuals={individuals} itemsPerRow={3} />
    </div>
  );
};

export default Board;
