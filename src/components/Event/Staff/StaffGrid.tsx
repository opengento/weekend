import IndividualGrid from "@/components/Individual/IndividualGrid";
import { EventStaffProps } from "@/components/Event/event.types";
import { decorateStaff } from "@/functions/events";

interface StaffGrid {
  staff: EventStaffProps[];
}

const StaffGrid = ({ staff }: StaffGrid) => {
  return (
    <IndividualGrid individuals={decorateStaff(staff)} itemsPerRow={3} />
  );
};

export default StaffGrid;
