import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/User'
import NextAuth from "next-auth"
import CredentialProvider from 'next-auth/providers/credentials'




export default NextAuth({
    providers: [
        CredentialProvider({
            name: 'credentials',
            credentials: {
                username: {label: "Username", placeholder: "Username"},
                password: {label: "Password", type: "Password"}
            },
            authorize: (credentials) => {
                dbConnect()
                const user = User.findOne({name: credentials.name, password: credentials.password})
                console.log(user)
                if(user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ]
})