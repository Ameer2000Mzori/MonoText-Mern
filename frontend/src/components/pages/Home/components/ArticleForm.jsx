import React, { useState } from 'react'
import AuthOperations from '../../../../api/AuthOperations'

const ArticleForm = ({ user }) => {
  const [articleTitle, setArticleTitle] = useState('')
  const [articleDescription, setArticleDescription] = useState('')

  const { mutate, isPending, isError, data } = AuthOperations({
    onSuccess: (newData) => {
      console.log(newData)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const postArticle = () => {}

  return (
    <div className="h-[100%] w-[100%] gap-2 flex flex-col text-start items-center justify-center">
      <div className="w-[90%] p-4 h-[160px]  flex flex-col gap-2 bg-slate-100 drop-shadow-lg rounded-[10px] active:outline-slate-300 focus:outline-slate-300 ">
        <h1 className=" font-bold text-[15px] w-[90%]">
          hello {user.username}!
        </h1>
        <div className="flex flex-row text-center items-center justify-between">
          <div className="w-[75%] flex flex-col text-start items-start justify-center gap-1">
            <input
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
              type="text"
              className=" resize-none bg-slate-100 active:outline-slate-300 focus:outline-slate-300 rounded-[5px] border-[2px]"
              placeholder="title of article"
            ></input>
            <textarea
              value={articleDescription}
              onChange={(e) => setArticleDescription(e.target.value)}
              className="w-[100%] p-2 h-[50px] resize-none bg-slate-100 active:outline-slate-300 focus:outline-slate-300 rounded-[5px] border-[2px]"
              placeholder="article description"
            ></textarea>
          </div>
          <button
            onClick={postArticle}
            className="w-[100px] h-[34px] active:w-[90px] active:h-[30px] rounded-md bg-slate-300 text-black outline-white border-[2px] border-black"
          >
            post
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticleForm
