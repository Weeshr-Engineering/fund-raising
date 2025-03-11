import WidthLayout from "@/components/commons/width-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { howItWorksList } from "@/lib/constants/how-it-works"; // Adjust path if needed

export const HowItWorks = () => {
  return (
    
    <div
      id="howItWorks"
      className="relative flex items-center justify-center md:mb-10 lg:mb-0 md:py-14 flex-col md:flex-row py-4 md:p-10 lg:p-14 rounded-2xl mt-12 md:mt-12 lg:mt-32 md:items-start md:justify-between min-h-fit lg:gap-16"
    >
      <div className="relative pt-8 md:pt-0 flex justify-start items-start w-full md:w-auto">
        <h2 className="text-white pt-3 pb-10 pl-4 md:pl-0 font-semibold  text-left w-full flex justify-start items-start text-3xl md:text-5xl">
          Frequently
          <br />
          Asked
          <br />
          Question
        </h2>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-0"
        className="relative lg:w-[80%] md:w-[70%]"
      >
        {howItWorksList.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="px-4 md:px-6 py-1 my-2 bg-white rounded-lg"
          >
            <AccordionTrigger className="text-left ">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-left">
              {/* Wrap the text in a muted class and leave the emojis outside */}
              <span className="text-muted-foreground">
                {item.answer.split(" ").slice(0, -1).join(" ")}
              </span>{" "}
              {item.answer.split(" ").slice(-1)[0]}{" "}
              {/* This isolates the emoji */}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    
  );
};