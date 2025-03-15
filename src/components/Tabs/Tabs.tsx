import { Fragment, ReactNode, useId } from "react";

interface Tabs {
  items: { title: string; content: ReactNode; }[];
}

const Tabs = ({ items }: Tabs) => {
  const id = useId();

  return (
    <div className="tabs tabs-lg tabs-border">
      {items.map((item, index) => (
        <Fragment key={`${id}-${index}`}>
          <input
            type="radio"
            name={id}
            className="tab"
            aria-label={item.title}
            defaultChecked={index === 0}
          />
          <div className="tab-content px-4 py-8 border-0">
            {item.content}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Tabs;
