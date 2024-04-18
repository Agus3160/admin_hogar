export { default } from "next-auth/middleware"

export const config = { 
  matcher: ["/admin"],
  pages:{
    signIn:"/login",
    signOut:"/"
  }
}
