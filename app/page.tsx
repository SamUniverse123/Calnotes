import { GlowingStar } from "@/components/cards/Stars";
import Subjectcards from "@/components/cards/Subjectcards";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex-col px-20" >
      <div className='hero'>
        <div>

        </div>
        <div>
          
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-y-8 w-full place-items-center">
        <Subjectcards/>
        <Subjectcards/>
        <Subjectcards/>
        <Subjectcards/>
        <Subjectcards/>
        <Subjectcards/>
     </div>
    </section>
    
  );
}
