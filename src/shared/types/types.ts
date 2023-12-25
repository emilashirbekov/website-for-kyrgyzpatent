import { Dispatch, ElementType, SetStateAction } from 'react'
import { AppRoutesProps } from '../config/routeConfig'

export interface FooterItem {
	title: string
	phone: string
	email: string
	imageUrl: string
}

export interface NavbarItem {
	href: AppRoutesProps
	label: string
	icon: string
}

export interface LangSwitcherProps {
	text: string
	Icon?: string | ElementType
	setOpen?: Dispatch<SetStateAction<boolean>> | undefined
}

export interface CardData {
	id: string
	image?: string
	text: string
	date: string
}

export interface Employee {
	id: number
	photo: string
	fullName: string
	department: string
	position: string
	phoneNumber: string
	email: string
}
