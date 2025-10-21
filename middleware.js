// Middleware for route protection
// TODO: Implement route protection logic
export { default } from "next-auth/middleware"

export const config = {
  matcher: ['/dashboard/:path*', '/test-start/:path*', '/test/:path*', '/test-result/:path*']
}
