import bcrypt from 'bcrypt'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from './authconfig'
import { User } from './features/auth'
import { connectToDB } from './shared/lib/utils'

//@ts-ignore
const login = async credentials => {
	try {
		connectToDB()
		const user = await User.findOne({ email: credentials.email })
		if (!user) throw new Error('Wrong credentials')
		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password
		)
		if (isPasswordCorrect) throw new Error('Wrong password')
		return user
	} catch (error) {
		console.log(error)
		throw new Error('Error while login')
	}
}

export const { signIn, auth } = NextAuth({
	...authConfig,
	providers: [
		CredentialsProvider({
			//@ts-ignore
			async authorize(credentials) {
				try {
					await login(credentials)
				} catch (error) {
					return null
				}
			},
		}),
	],
})
