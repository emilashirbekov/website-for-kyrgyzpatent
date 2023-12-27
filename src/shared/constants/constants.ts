import {
	MdArchive,
	MdAssignmentInd,
	MdDashboard,
	MdGroup,
	MdHome,
	MdInsertDriveFile,
	MdWarning,
} from 'react-icons/md'
import { routeConfig } from '../config/routeConfig'
import { NavbarItem } from '../types/types'

export const menuItems: NavbarItem[] = [
	{ href: routeConfig.main, label: 'Лента новостей', icon: MdHome() },
	{ href: routeConfig.about, label: 'Наша жизнь', icon: MdDashboard() },
	{ href: routeConfig.employees, label: 'Сотрудники', icon: MdAssignmentInd() },
	{ href: routeConfig.announcements, label: 'Объявления', icon: MdWarning() },
	{
		href: routeConfig.recourses,
		label: 'Информационные ресурсы',
		icon: MdInsertDriveFile(),
	},
	{ href: routeConfig.main, label: 'Рабочая группа', icon: MdGroup() },
	{ href: routeConfig.main, label: 'Файловый архив', icon: MdArchive() },
]
