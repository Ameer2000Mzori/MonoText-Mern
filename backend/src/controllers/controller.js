import { Article } from '../modules/article.js'

export const homePage = (req, res) => {
  res.send('this message is from backend')
}

export const addArticle = (req, res) => {
  Article.find()
    .sort({
      createAt: -1,
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => console.log(err))
}
