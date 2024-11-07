const User = require("../model/userSchema");
const { loginValidator } = require("../utils/validateData");
const JWT = require('jsonwebtoken')

const login = async (req, res) => {

    const { username, password } = req.body
    try {
        await loginValidator({ username, password })

        const user = await User.findOne({ username })

        if (!user) {
            return res.status(401).json({ message: "user not found" })
        }
        const mismatchpassword = user.password === password

        if (!mismatchpassword) {
            return res.status(400).json({ message: "password not match" })
        }

        const token = JWT.sign(
            { userId: user._id, username: user.username },
            process.env.secretkey,
            { expiresIn: "1h" }
        )
        res.status(200).json({ message: 'Login successful', token })
    } catch (error) {
        console.log('Validation error:', error);
        res.status(400).json({ message: 'Validation failed', error: error.message });
    }
}

const signup = (req, res) => {
    const { username, password } = req.body
    try {

        const userDetail = new User({
            username,
            password
        })

        userDetail.save()

        res.status(200).json('Signup successfull')
    } catch (error) {
        console.log('Validation error:', error);
        res.status(400).json({ message: 'Validation failed', error: error.message });
    }

}


module.exports = { login, signup }