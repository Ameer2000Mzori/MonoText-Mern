import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import AccountsLinks from './shared/LoginLinks'
import { useSelector } from 'react-redux'
import AuthOperations from '../../../api/AuthOperations'
export default function Home() {
  const [data, setData] = useState([])

  // onSuccess, onError
  const {
    mutate: mutateArticle,
    isPending: isPendingArticle,
    onSuccess: isSuccessArticle,
    onError: isErrorArticle,
    data: dataArticle,
  } = AuthOperations({ onSuccess: (newData) => setData(newData) })

  const {
    mutate: mutateRate,
    isPending: isPendingRate,
    onSuccess: isSuccessRate,
    onError: isErrorRate,
    data: dataRate,
  } = AuthOperations({
    onSuccess: () => mutateArticle([{ url: 'article', method: 'GET' }]),
    onError: () => console.log('there is error'),
  })

  const user = useSelector((state) => state.user)

  // http://localhost:4000/article

  useEffect(() => {
    mutateArticle([{ url: 'article', method: 'GET' }])
  }, [])

  const rateThisArticle = (articleId, rateVal) => {
    console.log('values before sending mutate to rate', articleId, rateVal)
    mutateRate([
      {
        url: 'rate',
        method: 'POST',
        token: user.token,

        article_id: articleId,
        value: rateVal,
      },
    ])
  }

  console.log(
    'data after fetching',
    dataArticle,
    isPendingArticle,
    isSuccessArticle,
    isErrorArticle
  )

  console.log(
    'this data after rate click',
    isPendingRate,
    isSuccessRate,
    isErrorRate,
    dataRate
  )

  console.log(data)

  return (
    <div className="h-[100vh] w-[100vw] flex flex-row text-center items-center justify-center gap-4">
      {/* this is left side  */}
      <div className="w-[15%] h-[80%] lg:flex hidden flex-col text-center items-center justify-center border-solid border-2">
        {user.token ? <>{user.username}</> : <AccountsLinks />}
      </div>
      {/*  this is the mid and its for scroll */}
      <div className="n w-[80%] h-[80%] lg:w-[50%] flex flex-col text-center items-center justify-center bg-sky-300 border-solid border-2 border-sky-500 ">
        <div className="w-[100%] h-[100%] text-start items-center justify-center flex flex-col ">
          {data?.map((article) => {
            return (
              <div key={article._id} className="m-4">
                <h1>{article.title}</h1>
                <h1>{article.text}</h1>
                <button onClick={() => rateThisArticle(article._id, 1)}>
                  rate up
                </button>
                <button onClick={() => rateThisArticle(article._id, -1)}>
                  rate down
                </button>
                <h1>{article.rates.reduce((a, b) => a + b.value, 0)}</h1>
              </div>
            )
          })}
        </div>
      </div>
      {/* this is right side and mosly will be used for sugustions accounts */}
      <div className="w-[15%] h-[80%] lg:flex hidden flex-col text-center items-center justify-center bg-sky-300 border-solid border-2 border-sky-500 ">
        <h1>this is Right side</h1>
        <h1>10% / 80%</h1>
      </div>
    </div>
  )
}
