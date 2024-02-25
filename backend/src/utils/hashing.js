import bcrypt from 'bcryptjs'

export async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
  } catch (err) {
    console.error(err)
    throw new Error('Sign up Failed')
  }
}

export function checkPwd(pwd, hashedPwd) {
  return bcrypt.compare(pwd, hashedPwd)
}
