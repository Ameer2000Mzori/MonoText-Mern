import React, { useState } from 'react'

const ArticleForm = ({ user }) => {
  const [areaValue, setAreaValue] = useState('')
  return (
    <div className="h-[100%] w-[100%] gap-2 flex flex-col text-start items-center justify-center">
      <h1 className=" font-bold text-[35px] w-[90%]">hello {user.username}!</h1>
      <textarea
        placeholder="What is happening"
        className="w-[90%] p-4 h-[100px] resize-none bg-slate-100 drop-shadow-lg rounded-[15px] active:outline-slate-300 focus:outline-slate-300 "
        value={areaValue}
        onChange={(e) => setAreaValue(e.target.value)}
      ></textarea>
    </div>
  )
}

export default ArticleForm
