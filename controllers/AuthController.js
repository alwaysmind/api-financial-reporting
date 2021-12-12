const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const jwt = require('jsonwebtoken')

// Models
const User = require('../models/User')

exports.login = async (req, res) => {
  try {
    const { token } = req.body

    if (!token) {
      throw new Error('Token google is required')
    }

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
      scope: 'awda',
    })

    const { name, email, picture, family_name } = ticket.getPayload()

    const user = await User.findOneAndUpdate(
      { email: email },
      { name, username: family_name, avatar: picture },
      { upsert: true, new: true, runValidators: true }
    ).exec()

    // Create token
    const jwtToken = jwt.sign(
      { user_id: user._id, email: user.email },
      process.env.TOKEN_KEY,
      {
        expiresIn: '12h',
      }
    )

    res.status(200).json({
      message: 'Yesss, Login Success',
      data: jwtToken,
    })
  } catch (error) {
    res.status(422).json({ message: 'Login Failed', error: error.message })
  }
}

exports.logout = async (req, res) => {
  try {
    res.send({ message: 'logout succes' })
  } catch (error) {
    res.status(422).json({ message: 'logout failed' })
  }
}
