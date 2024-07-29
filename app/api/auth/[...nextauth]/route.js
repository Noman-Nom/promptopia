import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import env from 'dotenv'
import {connectToDB} from '@/utils/database'


// console.log({
//     clientId:process.env.GOOGLE_ID,
//             clientSecret:process.env.GOOGLE_CLIENT_SECRET,
// })
const handler = NextAuth({

    providers:[
        GoogleProvider({
            clientId:'process.env.GOOGLE_ID',
            clientSecret:'process.env.GOOGLE_CLIENT_SECRET',
        })

    ],
    async session({session}){

    },
    async signIn({profile}){
        try {
            await connectToDB();

            //  check if the user already exists in the database

            // if not ,  create a new user in the database

            return true;
        } catch (error) {
            console.log(error)
            return false;
        }

    }
})

export {handler as GET , handler as POST}