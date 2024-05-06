import FAQ from "@/components/cards/FAQ";
import Subjectcards from "@/components/cards/Subjectcards";
import Calculusfundamentals from "@/public/pics/CalculusFundamentals";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex">
        <div className="hero mx-5">
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="flex">
        <div className=" bg-white mx-auto max-w-2xl lg:max-w-7xl px-10 py-16 lg:px-20 w-full">
          <h1 className="text-3xl  sm:text-5xl font-bold tracking-tight text-gray-900 mb-16">
            Cambridge AS and A Level Subjects
          </h1>
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-3  w-full">
            <Subjectcards title="Physics" colour="yellow" />
            <Subjectcards title="Chemistry" colour="red" />
            <Subjectcards title="Biology" colour="green" />
            <Subjectcards title="Maths" colour="blue" />
            <Subjectcards title="Fur Maths" colour="navy"></Subjectcards>
            <Subjectcards title="Economy" colour="purple" />
          </div>
        </div>
      </section>

      <div>
        <FAQ />
      </div>
    </>
  );
}
