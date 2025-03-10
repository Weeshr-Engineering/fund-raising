// import { TailwindcssButtons } from "@/components/commons/tailwind-buttons";

export const HeroSection = () => {
  return (
    <div className="mx-auto  px-4 sm:px-6 lg:px-8 pb-0 text-center lg:pt-48 pt-14 space-y-9 lg:space-y-10">
      <h1 className="mx-auto max-w-xl  text-5xl tracking-normal text-white sm:text-5xl font-semibold mb-5 leading-16">
        <span className="inline-block">
          Own an Equity Share in
          <span className="relative whitespace-nowrap text-blue-600 pr-1">
            <span
              className={`relative whitespace-nowrap px-2 bg-gradient-custom bg-clip-text text-transparent text-5xl`}
              style={{ fontFamily: "Playwrite CU, sans-serif" }}
            >
              weesh
            </span>
          </span>
        </span>
      </h1>

      <p className="mx-auto  max-w-2xl text-lg tracking-tight ">
        <span className="inline-block text-muted-foreground w-4/5 lg:w-[60%]">
          The Gift Registry for Africa
        </span>
      </p>

      <div className=" flex flex-col justify-center gap-y-5  sm:flex-row sm:gap-y-0 sm:gap-x-6">
        {/* <TailwindcssButtons /> */}
      </div>
    </div>
  );
};
