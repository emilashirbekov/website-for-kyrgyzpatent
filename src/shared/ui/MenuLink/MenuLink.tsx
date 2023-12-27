import { AppRoutesProps } from '@/shared/config/routeConfig'
import Link from 'next/link'
import React from 'react'
import cls from './MenuLink.module.css'

interface MenuLinkProps {
	href: string | AppRoutesProps
	label: string
	icon: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, label, icon }) => {
	const linkHref = typeof href === 'string' ? href : (href && href.path) || '/'

	return (
		<Link href={linkHref} className={`${cls.container}`}>
			<span className='text-xl'>{icon}</span>
			<span>{label}</span>
		</Link>
	)
}

export default MenuLink
