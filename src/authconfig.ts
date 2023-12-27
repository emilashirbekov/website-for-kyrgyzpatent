export const authConfig = {
	providers: [],
	pages: {
		signIn: '/auth',
	},
	callback: {
		//@ts-ignore
		authorized({ auth, request }) {
			const isLoggedIn = auth?.user
			const isOnDashboard = request.nextUrl.pathname.startsWith('/')
			if (isOnDashboard) {
				if (isLoggedIn) return true
				return false
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/', request.nextUrl))
			}
			return true
		},
	},
}
