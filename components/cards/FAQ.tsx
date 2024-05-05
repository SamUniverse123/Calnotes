import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";

import React from "react";

function FAQ() {
  return (
    <div className="flex flex-col justify-center items-center w-full my-16 px-4">
      <Accordion className="w-full lg:w-[60rem] " type="single" collapsible>
        <AccordionItem className=" max-w-full lg:w-[60rem] " value="item-1">
          <AccordionTrigger >Do the notes cover both AS and A level curriculums?</AccordionTrigger>
          <AccordionContent >
            Yes,our notes 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-full lg:w-[60rem] " type="single" collapsible>
        <AccordionItem className=" max-w-full lg:w-[60rem]" value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-full lg:w-[60rem] " type="single" collapsible>
        <AccordionItem className="max-w-full lg:w-[60rem]" value="item-1">
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
