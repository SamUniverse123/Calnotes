import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/accordion";

import React from "react";

function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 my-16">
      <Accordion className="w-full lg:w-[60rem] " type="single" collapsible>
        <AccordionItem className=" max-w-full lg:w-[60rem] " value="item-1">
          <AccordionTrigger >Do the notes cover both AS and   A level curriculums?</AccordionTrigger>
          <AccordionContent >
            Yes, our notes comprises of study material and past year papers that encompasses every chapter in both AS and A levels on the subjects mentioned above.Find out more to take a look at the previews.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-full lg:w-[60rem] " type="single" collapsible>
        <AccordionItem className=" max-w-full lg:w-[60rem]" value="item-1">
          <AccordionTrigger>Where and how do I access my notes after purchasing them?</AccordionTrigger>
          <AccordionContent>
            An email with the PDFs will be sent to your email account right after the purchase is complete. After downloading the files on your device, you can view the notes on any PDF viewer of your choosing.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion className="w-full lg:w-[60rem] " type="single" collapsible>
        <AccordionItem className="max-w-full lg:w-[60rem]" value="item-1">
          <AccordionTrigger>Can the notes be shared ?</AccordionTrigger>
          <AccordionContent>
            Unfortunately, the notes are locked behind a pdf identifier key that only the buyer's device will have access to and cannot be shared to other people .
            </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQ;
