import { Article } from '../modules/article.js'
import { User } from '../modules/users.js'
export const homePage = (req, res) => {
  res.send('this message is from backend')
}

// get articles
export const getArticle = (req, res) => {
  Article.find()
    .populate('author')
    .sort({
      createdAt: -1,
    })
    .then((result) => {
      res.status(200).json(result)
    })
    .catch((err) => console.log(err))
}

// create article

export const createArticle = async (req, res) => {
  const { author, title, text } = req.body

  const user = User.findById(author)

  const newArticle = new Article({
    author,
    title,
    text,
  })
  try {
    await newArticle.save()
    user.articles.push(newArticle)
    await user.save()
    res.status(200).json({
      message: 'user created successfully',
      Article: result,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'An error occurred' })
  }
}

// =======================================================================================
//  user  list users acc

export const getUsers = (req, res) => {
  User.find()
    .populate('articles')
    .sort({
      createdAt: -1,
    })
    .then((result) => {
      console.log(result) // Check the result to see if articles are populated
      res.status(200).json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: 'An error occurred' })
    })
}

// create user acc
export const createAccount = (req, res) => {
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
