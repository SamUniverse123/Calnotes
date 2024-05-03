import React from 'react'

function Subjectcards() {
  return (
    <a href="#" className="group relative block ">
  <span className="aspect-card w-[20rem] absolute inset-0 border-2 rounded-base border-dashed border-black"></span>

  <div
    className="aspect-card relative flex w-[20rem] transform items-end border-2 rounded-base border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      className="p-4 pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
     

      <h2 className="mt-4 text-xl font-medium sm:text-2xl">Physics</h2>
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
  )
}

export default Subjectcards
