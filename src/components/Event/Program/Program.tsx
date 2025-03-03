import Timeline from "@/components/Event/Program/Timeline/Timeline";

const Program = () => {
  return (
    <div className="tabs tabs-border">
      <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 1" defaultChecked />
      <div className="tab-content p-4 border-0">
        <Timeline />
      </div>
      <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 2" />
      <div className="tab-content p-4 border-0">
        <Timeline />
      </div>
      <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 3" />
      <div className="tab-content p-4 border-0">
        <Timeline />
      </div>
    </div>
  );
};

export default Program;
