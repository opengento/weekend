import { Event } from "@/interfaces/event";
import Timeline from "@/components/Event/Program/Timeline/Timeline";
import Tabs from "@/components/Tabs/Tabs";

interface Program {
  event: Event;
}

const Program = ({ event }: Program) => {
  const items = event.programs.map((program) => {
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
