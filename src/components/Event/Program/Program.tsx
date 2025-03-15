import Timeline from "@/components/Event/Program/Timeline/Timeline";
import { EventProps } from "@/components/Event/event.types";
import Tabs from "@/components/Tabs/Tabs";

interface Program {
  event: EventProps;
}

const Program = ({ event }: Program) => {
  const items = event.programs.map((program, index) => {
    return {
      title: program.title,
      content: <Timeline program={program} />
    }
  });

  return (
    <Tabs items={items} />
  );
};

export default Program;
