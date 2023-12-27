import NextAuth from 'next-auth'
import { authConfig } from './authconfig'

//@ts-ignore
export default NextAuth(authConfig).auth

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
