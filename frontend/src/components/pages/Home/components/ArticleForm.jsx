import React, { useState } from 'react'

const ArticleForm = ({ user }) => {
  const [areaValue, setAreaValue] = useState('')
  return (
    <div className="h-[100%] w-[100%] gap-2 flex flex-col text-start items-center justify-center">
      <div
        className="w-[90%] p-4 h-[100px]  bg-slate-100 drop-shadow-lg rounded-[15px] active:outline-slate-300 focus:outline-slate-300 "
        value={areaValue}
        onChange={(e) => setAreaValue(e.target.value)}
      >
        <h1 className=" font-bold text-[15px] w-[90%]">
          hello {user.username}!
        </h1>
        <div className="flex flex-row text-center items-center justify-between">
          <textarea
            className="w-[60%] p-4 h-[60px] resize-none bg-slate-100 drop-shadow-lg rounded-[15px] active:outline-slate-300 focus:outline-slate-300 "
            placeholder="What is happening"
          ></textarea>

          <button className="w-[100px] h-[34px] rounded-md bg-slate-300 text-white outline-white">
            post
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleForm
