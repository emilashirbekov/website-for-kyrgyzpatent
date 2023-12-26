'use client'
import { useMenu } from '@/app/providers/MenuContext'
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdNotifications, MdOutlineChat, MdPublic } from 'react-icons/md'
import cls from './Navbar.module.css'

export const Navbar = () => {
	const pathname = usePathname()
	const { toggleMenu } = useMenu()

	return (
		<nav className={cls.container}>
			<div className={cls.burgerWrapper}>
				<span onClick={toggleMenu} className={cls.burger}>
					<GiHamburgerMenu />
				</span>
				<div className={cls.title}>{pathname.split('/').pop()}</div>
			</div>
			<div className={cls.menu}>
				<div className={cls.icons}>
					<MdOutlineChat size={20} />
					<MdNotifications size={20} />
					<MdPublic size={20} />
				</div>
			</div>
		</nav>
	)
}
