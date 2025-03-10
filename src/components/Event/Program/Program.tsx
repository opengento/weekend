import Timeline from "@/components/Event/Program/Timeline/Timeline";
import { EventProps } from "@/components/Event/event.types";
import { Fragment } from "react";

interface Program {
  id: string;
  event: EventProps;
}

const Program = ({ id, event }: Program) => {
  return (
    <div className="tabs tabs-lg tabs-border">
      {event.programs.map((program, index) => (
        <Fragment key={`program-${id}-${index}`}>
          <input
            type="radio"
            name={id}
            className="tab"
            aria-label={program.title}
            defaultChecked={index === 0}
          />
          <div className="tab-content px-4 py-8 border-0">
            <Timeline id={id} program={program} />
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Program;
