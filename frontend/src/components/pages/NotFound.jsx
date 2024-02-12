import React from 'react'

const NotFound = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col text-center items-center justify-center bg-slate-400 ">
      <h1 className="xs:text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]  text-white">
        404
      </h1>
      <h1 className="xs:text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-bold text-white">
        Page not found
      </h1>
    </div>
  )
}

export default NotFound
