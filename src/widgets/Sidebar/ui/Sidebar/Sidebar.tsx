'use client'
import { useMenu } from '@/app/providers/MenuContext'
import Button from '@/shared/ui/Button/Button'
import { MdLogout } from 'react-icons/md'
import SidebarItem from '../SidebarItem/SidebarItem'
import SidebarProfile from '../SidebarProfile/SidebarProfile'
import cls from './Sidebar.module.css'

export const Sidebar = () => {
	const { isMenuOpen } = useMenu()

	return (
		<aside className={`${isMenuOpen ? cls.open : cls.container}`}>
			<SidebarProfile />
			<SidebarItem />
			<Button className={cls.logout}>
				<MdLogout /> Выйти
			</Button>
		</aside>
	)
}

export default Sidebar
