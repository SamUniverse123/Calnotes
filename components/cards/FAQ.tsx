import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";

import React from "react";

function FAQ() {
  return (
    <div className="w-full h-fit lg:max-w-[60rem] mx-auto my-8">
      <Accordion className="w-full lg:w-[unset]" type="single" collapsible>
        <AccordionItem className=" max-w-full" value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-full lg:w-[unset]" type="single" collapsible>
        <AccordionItem className=" max-w-full" value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-full lg:w-[unset]" type="single" collapsible>
        <AccordionItem className="max-w-full" value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQ;
