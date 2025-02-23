import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({
  children,
}: ContainerProps) => {
  return (
    <article className="bg-neutral rounded-lg py-6 px-4 md:p-12 flex flex-col flex-wrap gap-4">
      {children}
    </article>
  );
};

export default Container;
