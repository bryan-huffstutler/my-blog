import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
const jwt = require('jsonwebtoken')

export default async (req, res) => {

    if (req.method === "POST") {
        return new Promise(resolve => {
            dbConnect()
            const requestBody = JSON.parse(req.body)
            
            const user = User.findOne({ username: requestBody.username.toLowerCase() }, (err, user) => {
                console.log('In findOne')
                if (err) {
                    res.status(500)
                    return new Error(err)
                }
                if (!user) {
                    res.status(403)
                    return new Error(err)
                }
                user.checkPassword(requestBody.password, (err, isMatch) => {
                    if (err) {
                        res.status(403)
                        return new Error(failedLogin)
                    }
                    if (!isMatch) {
                        res.status(403)
                        return new Error(failedLogin)
                    }

                    const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
                    return res.status(200).send({ token, user: user.withoutPassword() })
                })
                // const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
                // return res.status(200).send({ token, user: user.withoutPassword() })
            })
        
        res.send(user).end();
        return resolve()})
    

}}




// function login(credentials) {
//     axios.post('/auth/login', credentials)
//       .then(res => {
//         console.log(res.data)
//         const { user, token } = res.data
//         localStorage.setItem('token', token)
//         localStorage.setItem('user', JSON.stringify(user))
//         setMasterState(prevMasterState => ({
//           ...prevMasterState,
//           user,
//           token
//         }))
//       })
//       .catch(err => handleAuthErr(err.response.data.errMsg))
//   }

