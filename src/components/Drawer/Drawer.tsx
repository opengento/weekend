import { ReactNode, useId } from "react";
import classNames from "classnames";

interface Drawer {
  button: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  children: ReactNode;
}

const Drawer = ({button, size = "md", children}: Drawer) => {
  const id= "drawer-" + useId();

  return (
    <div className="drawer drawer-end">
      <input id={id} type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content">
        <label htmlFor={id} className="drawer-button">
          {button}
        </label>
      </div>
      <div className="drawer-side z-100">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <div className={classNames(
          "bg-base-200 min-h-full p-8 relative",
          {
            "w-xs": size === "xs",
            "w-sm": size === "sm",
            "w-md": size === "md",
            "w-lg": size === "lg",
            "w-xl": size === "xl",
            "w-2xl": size === "2xl",
          }
        )}>
          <label
            htmlFor={id}
            className={classNames(
              "drawer-button btn btn-circle btn-ghost absolute right-2 top-2",
              {
                "btn-sm": ["xs", "sm"].includes(size),
                "btn-md": size === "md",
                "btn-lg": ["lg", "xl", "2xl"].includes(size),
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
