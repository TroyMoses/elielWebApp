import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "../../../../models/user";
import connectMongoDB from "../../../../libs/mongodb";

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async session({session}) {
            return session
        },
        async signIn({account, profile, user, credentials}) {
            try {
                await connectMongoDB()
                const checkEmail = await User.find({email: user.email})

                if (checkEmail.length == 0) {
                    await User.insertMany({name: user.name, email: user.email.email})
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export { handler as GET, handler as POST }