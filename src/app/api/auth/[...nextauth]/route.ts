import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/libs/prisma"
import bcrypt from "bcrypt"
import { pages } from "next/dist/build/templates/app-page"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@gmail.com" },
        password: {  label: "Password", type: "password" },
      },
      async authorize(credentials, _req) {
        
        // Add logic here to look up the user
        if (!credentials?.email || !credentials?.password) throw new Error("Email and password are required")
        
        // Check if user exists
        const user = await prisma.user.findUnique({where: {email: credentials.email}})
        if(!user) throw new Error("Email or password is incorrect")

        // Check if password is correct
        const match = bcrypt.compare(credentials.password, user.password)
        if(!match) throw new Error("Email or password is incorrect")

        // If everything is correct, return the session
        return{
          id: user.id,
          email: user.email
        }
      }
  })
  ],
  pages:{
    error:"/login"
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }