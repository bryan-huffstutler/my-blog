import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
const jwt = require('jsonwebtoken')

dbConnect()

export default async (req, res) => {
    switch (req.method) {
        case 'POST':
            try {
                await User.findOne({ userName: req.body.username.toLowerCase() }, (err, user) => {
                    if (!user) {
                        throw new Error("No User Found")
                    }

                    if (req.body.password != user.password) {
                        throw new Error("Invalid Password")
                    }

                    const token = jwt.sign(user.toJSON(), process.env.SECRET, {
                        expiresIn: 604800 // 1 week
                      })
                    res.status(200).send({ token })

                }).clone()

            } catch (error) {
                res.status(400).send(error.message)
            }
    }
}