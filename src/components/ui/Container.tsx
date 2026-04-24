import type { ReactNode } from "react";

type ContainerProps = {
  id: string;
  className?: string;
  children?: ReactNode;
};

export function Container({ id, className, children }: ContainerProps) {
  return (
    <div id={id} className={"mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" + (className ? ` ${className}` : "")}>
      {children}
    </div>
  );
}
