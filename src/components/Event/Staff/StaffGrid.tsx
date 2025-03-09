import IndividualGrid from "@/components/Individual/IndividualGrid";
import { EventStaffProps } from "@/components/Event/event.types";
import utilEvents from "@/functions/events";

interface StaffGrid {
  staff: EventStaffProps[];
}

const StaffGrid = ({ staff }: StaffGrid) => {
  return (
    <IndividualGrid individuals={utilEvents.decorateStaff(staff)} itemsPerRow={3} />
  );
};

export default StaffGrid;
