'use client'
import { useMenu } from '@/app/providers/MenuContext'
import Button from '@/shared/ui/Button/Button'
import { useRouter } from 'next/navigation'
import { MdLogout } from 'react-icons/md'
import SidebarItem from '../SidebarItem/SidebarItem'
import SidebarProfile from '../SidebarProfile/SidebarProfile'
import cls from './Sidebar.module.css'

export const Sidebar = () => {
	const { isMenuOpen } = useMenu()
	const router = useRouter()
	const handleClick = () => {
		localStorage.removeItem('user')
		router.push('/auth')
	}
	return (
		<div className={`${isMenuOpen ? cls.open : cls.container}`}>
			<SidebarProfile />
			<SidebarItem />
			<Button onClick={handleClick} className={cls.logout}>
				<MdLogout /> Выйти
			</Button>
		</div>
	)
}

export default Sidebar
