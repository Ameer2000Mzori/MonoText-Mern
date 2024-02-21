import { Article } from '../modules/article.js'
import { User } from '../modules/users.js'
import { hashPassword, checkPwd } from '../utils/hashing.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

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
  const { title, text } = req.body
  console.log(req.user)

  try {
    // Find the user by ID
    const user = await User.findById(req.user.id)

    // Create a new article
    const newArticle = new Article({
      author: user.id,
      title,
      text,
    })

    // Save the new article
    await newArticle.save()

    // Push the newly created article to the user's articles array
    user.articles.push(newArticle)

    // Save the updated user
    await user.save()

    res.status(200).json({
      message: 'Article created successfully',
      article: newArticle,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'An error occurred' })
  }
}

// rate article

export const rateArticle = async (req, res) => {
  const { value, article_id } = req.body
  try {
    const article = await Article.findById(article_id)

    const newRate = new Article({
      user: req.user.id,
      article: article.id,
      value,
    })

    await newRate.save()

    // Push the newly created rate to the article
    article.rates.push(newRate)

    // Save the updated article
    await article.save()

    res.status(200).json({
      message: 'rate created successfully',
      article: newRate,
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
export const createAccount = async (req, res) => {
  const { username, email, password } = req.body
  let newAccount
  console.log(req.headers.authorization.split(' ')[1])
  try {
    const user = await User.findOne({
      $or: [{ username }, { email }],
    })
    if (user)
      return res.status(400).json({
        message: 'user already exist',
      })
    let new_pwd = await hashPassword(password)
    newAccount = new User({
      username,
      email,
      password: new_pwd,
    })
    await newAccount.save()
    console.log(newAccount)
    const token = jwt.sign({ id: newAccount._id }, process.env.SECRET, {
      expiresIn: 3600,
    }) // 1 hour
    res.status(200).json({
      message: 'user created successfully',
      User: newAccount,
      token,
    })
  } catch {
    if (newAccount?._id) await newAccount.deleteOne({ _id: newAccount._id })
    res.status(500).json({
      message: 'Server failed',
    })
  }
}

// login
export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  console.log(user)
  if (user == null || !(await checkPwd(password, user.password)))
    return res.status(400).json({ message: 'Username or Password is wrong ' })
  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: 3600,
  })
  return res
    .status(200)
    .json({ message: 'logged in successfully ', data: user, token })
}
