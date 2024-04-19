export { default } from "next-auth/middleware"

export const config = { 
  matcher: ["/admin", "/admin/documents", "/admin/sections", '/admin/sections/create', '/admin/documents/create'],
}
