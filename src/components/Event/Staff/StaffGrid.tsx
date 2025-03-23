import { EventStaff } from "@/interfaces/event";
import IndividualGrid from "@/components/Individual/IndividualGrid";

interface StaffGrid {
  staff: EventStaff[];
}

const StaffGrid = ({ staff }: StaffGrid) => {
  const individuals = staff.map((staff) => (staff.individual));

  return (
    <IndividualGrid individuals={individuals} itemsPerRow={3} />
  );
};

export default StaffGrid;
