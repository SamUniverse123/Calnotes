import { cn } from '@/lib/utils';
import React from 'react'

type Subjectprops ={
  title : string;
  colour : string;
}


type colourVariant ={
  [name:string]: string;
}

function Subjectcards({title ,colour}: Subjectprops) {
  
  const colourVariants : colourVariant= {
    red: "bg-red-600",
    green: 'bg-green-600',
    blue: 'bg-sky-500',
    yellow: 'bg-yellow-300',
    orange: 'bg-orange-500',
    navy: 'bg-blue-500'
  }
  return (
    <div >
    <a href="#" className="group relative block ">
  <span className="aspect-card w-full lg:max-w-[20rem]  absolute inset-0 border-2 rounded-base border-dashed lg:rounded-2xl border-black shadow-subject group-hover:shadow-none "></span>

  <div
    className={`aspect-card relative w-full lg:aspect-none lg:max-w-[20rem] transform items-end border-2 rounded-base lg:rounded-2xl border-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2  ${colourVariants[colour]}` 
  }>
    <div
      className="p-4 pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
     

      <h2 className="mt-4 text-xl font-medium sm:text-2xl">{title}</h2>
    </div>

    <div
      className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 className="mt-4 text-xl font-medium sm:text-2xl">Go around the world</h3>

      <p className="mt-4 text-sm sm:text-base">
       
      </p>

      <p className="mt-8 font-bold"></p>
    </div>
  </div>
</a>
</div>
  )
}

export default Subjectcards
