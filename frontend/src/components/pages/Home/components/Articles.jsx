import React from 'react'

const Articles = ({ data, rate: rateThisArticle }) => {
  return (
    <>
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
    </>
  )
}

export default Articles
