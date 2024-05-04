import { cn } from "@/lib/utils";
import React, { Children } from "react";

type Subjectprops = {
  title: string;
  colour: string;
  children?: React.ReactNode;
};

type colourVariant = {
  [name: string]: string;
};

function Subjectcards({ title, colour, children }: Subjectprops) {
  const colourVariants: colourVariant = {
    red: "bg-BrutR",
    green: "bg-BrutG",
    blue: "bg-BrutLB",
    yellow: "bg-BrutY",
    purple: "bg-BrutP",
    navy: "bg-BrutDB",
  };
  return (
    <div>
      <a href="#" className="group relative block ">
        <span className="aspect-card w-full h-full absolute inset-0 border-2 rounded-base border-dashed lg:rounded-2xl border-black shadow-base group-hover:shadow-none "></span>
        <div
          className={`aspect-card relative w-full h-full  transform items-end border-2 rounded-base lg:rounded-2xl border-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 flex flex-col`}>
          <div className="w-full h-[47.7%] overflow-hidden rounded-t-[3px] lg:rounded-t-3xl bg-white">

          </div>
          <div className=" flex items-center w-full h-[15.8%] pl-2 lg:pl-6 border-y-[2px] border-x-0 border-black border-double bg-white text-lg lg:text-4xl font-semibold">{title}
            
          </div>
          <div className={`w-full h-[36.5%] rounded-b-[3px] lg:rounded-b-xl ${colourVariants[colour]}`}>
            <div>

            </div>
            <div>

            </div>
          </div>
          
        </div>
      </a>
    </div>
  );
}

export default Subjectcards;
