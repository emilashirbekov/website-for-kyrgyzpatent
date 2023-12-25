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
import { CardData, Employee, FooterItem, NavbarItem } from '../types/types'

export const footerItems: FooterItem[] = [
	{
		title: 'Справочная служба',
		phone: '+7 (499) 240-6015',
		email: 'rospatent@rospatent.gov.ru',
		imageUrl:
			'https://rospatent.gov.ru/content/indexlinks/b2/b2aae4395cfd0851517968f4e9308449-fips.svg',
	},
	{
		title: 'Справочная служба',
		phone: '+7 (499) 240-6015',
		email: 'rospatent@rospatent.gov.ru',
		imageUrl:
			'https://rospatent.gov.ru/content/indexlinks/b2/b2aae4395cfd0851517968f4e9308449-fips.svg',
	},
	{
		title: 'Справочная служба',
		phone: '+7 (499) 240-6015',
		email: 'rospatent@rospatent.gov.ru',
		imageUrl:
			'https://rospatent.gov.ru/content/indexlinks/b2/b2aae4395cfd0851517968f4e9308449-fips.svg',
	},
]

export const menuItems: NavbarItem[] = [
	{ href: routeConfig.main, label: 'Лента новостей', icon: MdHome() },
	{ href: routeConfig.about, label: 'Наша жизнь', icon: MdDashboard() },
	{ href: routeConfig.contacts, label: 'Контакты', icon: MdAssignmentInd() },
	{ href: routeConfig.announcements, label: 'Объявления', icon: MdWarning() },
	{
		href: routeConfig.recourses,
		label: 'Информационные ресурсы',
		icon: MdInsertDriveFile(),
	},
	{ href: routeConfig.main, label: 'Рабочая группа', icon: MdGroup() },
	{ href: routeConfig.main, label: 'Файловый архив', icon: MdArchive() },
]

export const news: CardData[] = [
	{
		id: '1',
		image: 'https://knews.kg/wp-content/uploads/2020/09/Gensek-OON-305x203.jpg',
		text: 'Война в Газе: Антониу Гутерриш впервые применил статью 99 Устава ООН. Что это означает?',
		date: '2023-01-01',
	},
	{
		id: '2',
		image: 'https://knews.kg/wp-content/uploads/2020/09/Gensek-OON-305x203.jpg',
		text: 'Война в Газе: Антониу Гутерриш впервые применил статью 99 Устава ООН. Что это означает?',
		date: '2023-01-02',
	},
	{
		id: '3',
		image: 'https://knews.kg/wp-content/uploads/2020/09/Gensek-OON-305x203.jpg',
		text: 'Война в Газе: Антониу Гутерриш впервые применил статью 99 Устава ООН. Что это означает?',
		date: '2023-01-02',
	},
	{
		id: '4',
		image: 'https://knews.kg/wp-content/uploads/2020/09/Gensek-OON-305x203.jpg',
		text: 'Война в Газе: Антониу Гутерриш впервые применил статью 99 Устава ООН. Что это означает?',
		date: '2023-01-02',
	},
	{
		id: '5',
		image: 'https://knews.kg/wp-content/uploads/2020/09/Gensek-OON-305x203.jpg',
		text: 'Война в Газе: Антониу Гутерриш впервые применил статью 99 Устава ООН. Что это означает?',
		date: '2023-01-02',
	},
	{
		id: '6',
		image: 'https://knews.kg/wp-content/uploads/2020/09/Gensek-OON-305x203.jpg',
		text: 'Война в Газе: Антониу Гутерриш впервые применил статью 99 Устава ООН. Что это означает?',
		date: '2023-01-02',
	},
	{
		id: '7',
		image: 'https://knews.kg/wp-content/uploads/2020/09/Gensek-OON-305x203.jpg',
		text: 'Война в Газе: Антониу Гутерриш впервые применил статью 99 Устава ООН. Что это означает?',
		date: '2023-01-02',
	},
	{
		id: '8',
		image: 'https://knews.kg/wp-content/uploads/2020/09/Gensek-OON-305x203.jpg',
		text: 'Война в Газе: Антониу Гутерриш впервые применил статью 99 Устава ООН. Что это означает?',
		date: '2023-01-02',
	},

	{
		id: '9',
		image: 'https://knews.kg/wp-content/uploads/2020/09/Gensek-OON-305x203.jpg',
		text: 'Война в Газе: Антониу Гутерриш впервые применил статью 99 Устава ООН. Что это означает?',
		date: '2023-01-09',
	},
]

export const sideNews: CardData[] = [
	{
		id: '1',
		text: 'В Кыргызстане работают 1765 теплиц...',
		date: '16:17 ',
	},
	{
		id: '2',
		text: 'В Кыргызстане работают 1765 теплиц...',
		date: '16:17 ',
	},
	{
		id: '3',
		text: 'В Кыргызстане работают 1765 теплиц...',
		date: '16:17 ',
	},
	{
		id: '4',
		text: 'В Кыргызстане работают 1765 теплиц...',
		date: '16:17 ',
	},
	{
		id: '5',
		text: 'В Кыргызстане работают 1765 теплиц...',
		date: '16:17 ',
	},
	{
		id: '6',
		text: 'В Кыргызстане работают 1765 теплиц...',
		date: '16:17 ',
	},
	{
		id: '7',
		text: 'В Кыргызстане работают 1765 теплиц...',
		date: '16:17 ',
	},
	{
		id: '8',
		text: 'В Кыргызстане работают 1765 теплиц...',
		date: '16:17 ',
	},

	{
		id: '9',
		text: 'В Кыргызстане работают 1765 теплиц...',
		date: '16:17 ',
	},
]

export const employees: Employee[] = [
	{
		id: 1,
		photo: 'http://patent.gov.kg/wp-content/uploads/2023/02/12.jpg',
		fullName: 'Мойдинов Исламбек Жанышович',
		department: '',
		position: 'Первый заместитель директора',
		phoneNumber: '',
		email: '',
	},
	{
		id: 2,
		photo: 'http://patent.gov.kg/wp-content/uploads/2023/02/01-kg-1-1.jpg',
		fullName: 'Керимбаева Рахат Топчубаевна',
		department: '',
		position: 'Директор',
		phoneNumber: '',
		email: '',
	},
	{
		id: 3,
		photo:
			'http://patent.gov.kg/wp-content/uploads/2023/03/%D0%98%D1%81%D0%BC%D0%B0%D0%B8%D0%BB%D0%B1%D0%B5%D0%BA%D0%BE%D0%B2-%D0%A3%D0%BB%D0%B0%D0%BD.jpg',
		fullName: 'Исмаилбеков Улан Болотбекович',
		department: '',
		position: 'Заместитель директора',
		phoneNumber: '',
		email: '',
	},
]
