import { ReactNode, useId } from "react";
import classNames from "classnames";

interface Drawer {
  button: ReactNode;
  size?: "sm" | "md" | "lg" | "full";
  children: ReactNode;
}

const Drawer = ({button, size = "md", children}: Drawer) => {
  const id = "drawer-" + useId();

  return (
    <div className="drawer drawer-end">
      <input id={id} type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content">
        <label
          htmlFor={id}
          className="group relative drawer-button inline-block cursor-pointer"
        >
          {button}
        </label>
      </div>
      <div className="drawer-side z-100">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <div className={classNames(
          "bg-base-200 min-h-full px-8 py-14 relative",
          {
            "w-2/5": "sm" === size,
            "w-1/2": "md" === size,
            "w-3/4": "lg" === size,
            "w-full": "full" === size,
          }
        )}>
          <label
            htmlFor={id}
            className={classNames(
              "drawer-button btn btn-circle btn-ghost absolute right-2 top-2 btn-md",
              {
                "lg:btn-lg": ["lg", "full"].includes(size),
              }
            )}
          >
            ✕
          </label>
          <div className="text-base-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
