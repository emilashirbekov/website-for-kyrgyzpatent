export type AppRoutesProps = {
	authOnly?: boolean
	path?: string
}

export enum Routes {
	MAIN = 'main',
	ABOUT = 'about',
	EMPLOYEES = 'employees',
	ANNOUNCEMENTS = 'announcements',
	RECOURSES = 'recourses',
}

export const RoutePath: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.ABOUT]: '/about',
	[Routes.EMPLOYEES]: '/employees',
	[Routes.ANNOUNCEMENTS]: '/announcements',
	[Routes.RECOURSES]: '/recourses',
}
export const routeConfig: Record<Routes, AppRoutesProps> = {
	[Routes.MAIN]: {
		path: RoutePath.main,
	},
	[Routes.ABOUT]: {
		path: RoutePath.about,
	},
	[Routes.EMPLOYEES]: {
		path: RoutePath.employees,
	},
	[Routes.ANNOUNCEMENTS]: {
		path: RoutePath.announcements,
	},
	[Routes.RECOURSES]: {
		path: RoutePath.recourses,
	},
}
