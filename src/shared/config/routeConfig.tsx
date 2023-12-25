export type AppRoutesProps = {
	authOnly?: boolean
	path?: string
}

export enum Routes {
	MAIN = 'main',
	ABOUT = 'about',
	CONTACTS = 'contacts',
	ANNOUNCEMENTS = 'announcements',
	RECOURSES = 'recourses',
	NOT_FOUND = 'notfound',
}

export const RoutePath: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.ABOUT]: '/about',
	[Routes.CONTACTS]: '/contacts',
	[Routes.ANNOUNCEMENTS]: '/announcements',
	[Routes.RECOURSES]: '/recourses',
	[Routes.NOT_FOUND]: '/notfound',
}
export const routeConfig: Record<Routes, AppRoutesProps> = {
	[Routes.MAIN]: {
		path: RoutePath.main,
	},
	[Routes.ABOUT]: {
		path: RoutePath.about,
	},
	[Routes.CONTACTS]: {
		path: RoutePath.contacts,
	},
	[Routes.ANNOUNCEMENTS]: {
		path: RoutePath.announcements,
	},
	[Routes.RECOURSES]: {
		path: RoutePath.recourses,
	},
	[Routes.NOT_FOUND]: {
		path: RoutePath.notfound,
	},
}
