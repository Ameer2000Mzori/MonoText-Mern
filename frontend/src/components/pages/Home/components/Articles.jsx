import React from 'react'
import { MoveUp, MoveDown } from 'lucide-react'
import { useSelector } from 'react-redux'

const Articles = ({ data, rate: rateThisArticle }) => {
  const user = useSelector((state) => state.user)

  console.log('user', user)

  console.log('data', data)

  return (
    <>
      {data?.map((article) => {
        return (
          <div
            key={article._id}
            className=" bg-slate-100 drop-shadow-lg rounded-[15px] relative m-4 w-[90%] h-[120px] flex flex-row text-start items-center justify-around"
          >
            <div className="flex flex-col text-center items-center justify-center gap-1">
              <button onClick={() => rateThisArticle(article._id, 1)}>
                <MoveUp />
              </button>
              <h1>{article.rates.reduce((a, b) => a + b.value, 0)}</h1>
              <button onClick={() => rateThisArticle(article._id, -1)}>
                <MoveDown size={20} />
              </button>
            </div>
            <div className="w-[80%]">
              <h1>{article.author.username}</h1>
              <h1>{article.title}</h1>
              <h1 className="text-[12px]">{article.text}</h1>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Articles
