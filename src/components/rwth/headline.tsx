import type { FC, ReactNode } from "react";

type HeadLineProps = {
  children?: ReactNode;
  title?: string;
};

const HeadLine: FC<HeadLineProps> = ({ title, children }) => {
  return (
    <h1 className="mb-6 border-b-4 border-black pb-6 font-sans text-[3.5rem] font-normal">
      {title} {children}
    </h1>
  );
};

export { HeadLine };
