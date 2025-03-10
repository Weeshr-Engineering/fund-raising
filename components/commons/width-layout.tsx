import { ReactNode } from "react";
import clsx from "clsx";

interface LayoutProps {
  children: ReactNode;
  narrow?: boolean;
}

const WidthLayout: React.FC<LayoutProps> = ({ children, narrow = false }) => {
  const defaultClass = narrow ? "w-[96%]  " : "w-[95%] ";
  const extraLargeClass = narrow ? "2xl:w-full" : "2xl:w-full";

  return (
    <div
      className={clsx(
        defaultClass,
        extraLargeClass,
        "  mx-auto 2xl:max-w-7xl "
      )}
    >
      {children}
    </div>
  );
};

export default WidthLayout;
