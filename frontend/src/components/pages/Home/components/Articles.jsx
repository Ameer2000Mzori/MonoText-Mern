import React from 'react'
import { MoveUp, MoveDown } from 'lucide-react'

const Articles = ({ data, rate: rateThisArticle }) => {
  return (
    <>
      {data?.map((article) => {
        return (
          <div
            key={article._id}
            className=" bg-slate-100 drop-shadow-lg rounded-[15px] relative m-4 w-[90%] h-[100px] flex flex-row text-start items-center justify-around"
          >
            <div className="flex flex-col text-center items-center justify-center gap-1">
              <button onClick={() => rateThisArticle(article._id, 1)}>
                <MoveUp />
              </button>
              <h1>{article.rates.reduce((a, b) => a + b.value, 0)}</h1>
              <button onClick={() => rateThisArticle(article._id, -1)}>
                <MoveDown />
              </button>
            </div>
            <div className="w-[80%]">
              <h1>{article.title}</h1>
              <h1>{article.text}</h1>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Articles
