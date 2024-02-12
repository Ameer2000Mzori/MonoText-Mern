import { Article } from '../modules/article.js'
import { User } from '../modules/users.js'
export const homePage = (req, res) => {
  res.send('this message is from backend')
}

export const getArticle = (req, res) => {
  Article.find()
    .sort({
      createAt: -1,
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => console.log(err))
}

export const createArticle = (req, res) => {
  console.log('create article')
  const { title, description, url } = req.body
}

export const createVideo = (req, res) => {
  const newVideo = new Video({
    author: 'john',
    title,
    text,
    rate,
  })

  newVideo
    .save()
    .then((result) => {
      res.status(200).json({
        message: 'Video saved successfully',
        video: result,
      })
    })
    .catch((err) => console.log(err))
}

//  user  list users acc

export const getUsers = (req, res) => {
  User.find()
    .sort({
      createAt: -1,
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => console.log(err))
}

// create user acc
export const createAccount = (req, res) => {
  console.log('create article')
  const { username, email, password } = req.body

  const newAccount = new User({
    username,
    email,
    password,
  })

  newAccount
    .save()
    .then((result) => {
      res.status(200).json({
        message: 'user created successfully',
        User: result,
      })
    })
    .catch((err) => console.log(err))
}
