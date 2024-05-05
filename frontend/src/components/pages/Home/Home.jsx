import React, { useEffect, useState } from 'react'
import AccountsLinks from './shared/LoginLinks'
import { useSelector } from 'react-redux'
import AuthOperations from '../../../api/AuthOperations'
import NotificationCard from '../../shared/NotificationCard'
import Articles from './components/Articles'
import ArticleForm from './components/ArticleForm'

import { AlignJustify } from 'lucide-react'
export default function Home() {
  const [data, setData] = useState([])

  const {
    mutate: mutateArticle,
    isPending: isPendingArticle,
    data: dataArticle,
  } = AuthOperations({
    onSuccess: (newData) => {
      setData(newData)
    },
  })

  const {
    mutate: mutateRate,
    isPending: isPendingRate,

    data: dataRate,
  } = AuthOperations({
    onSuccess: () => mutateArticle([{ url: 'article', method: 'GET' }]),
    onError: (error) => {
      NotificationCard({
        option: 'error',
        text: `${error.response.statusText || 'an error occurred'}`,
      })
    },
  })

  const user = useSelector((state) => state.user)

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

  console.log('data after fetching', dataArticle, isPendingArticle)

  console.log(
    'this data after rate click',
    isPendingRate,

    dataRate
  )

  console.log(data)

  return (
    <div className=" overflow-y-auto  h-[100vh] w-[100vw] flex flex-row text-center items-center justify-center gap-4">
      {/* this is left side  */}
      <div className="w-[15%] h-[80%] left-[8%] fixed lg:flex hidden flex-col text-center items-center justify-center border-solid border-2">
        {user.token ? <>{user.username}</> : <AccountsLinks />}
      </div>
      {/*  this is the mid and its for scroll */}
      <div className=" w-[80%] h-[80%] gap-4 lg:w-[50%] flex flex-col text-center items-center justify-start  border-solid border-2 border-sky-500 ">
        {user.token && (
          <>
            <div className="h-[250px] w-[100%]">
              {user.token && (
                <ArticleForm user={user} mutateArticle={mutateArticle} />
              )}
            </div>
            <div>
              <AlignJustify />
            </div>
          </>
        )}
        <div className=" w-[100%]   flex flex-col text-center items-center justify-start">
          <Articles data={data} rate={rateThisArticle} />
        </div>
      </div>
      {/* this is right side and mosly will be used for sugustions accounts */}
      <div className="w-[15%] h-[80%] fixed right-[8%] lg:flex hidden flex-col text-center items-center justify-center bg-sky-300 border-solid border-2 border-sky-500 ">
        <h1>this is Right side</h1>
        <h1>10% / 80%</h1>
      </div>
    </div>
  )
}
