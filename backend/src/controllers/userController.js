import { User } from '../modules/users.js'
import { hashPassword, checkPwd } from '../utils/hashing.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

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
  // console.log(req.headers.authorization.split(' ')[1])
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

// del user acc
export const delAccount = async (req, res) => {
  try {
    const { password } = req.body
    const user = await User.findById(req.user.id)
    if (!user || !(await checkPwd(password, user.password)))
      return res.status(400).json({ message: 'Password is wrong' })
    await User.findOneAndDelete({ _id: req.user.id })
    return res.status(200).json({ message: 'Account deleted successfully' })
  } catch {
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
