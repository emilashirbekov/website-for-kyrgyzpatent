import { NewsData } from '@/app/(pages)/(dashboard)/news/model/types/news'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cls from './NewsCard.module.css'

interface NewsCardProps {
	className?: string
	news: NewsData
}

const NewsCard: React.FC<NewsCardProps> = ({ news, className }) => {
	const { image, text, date } = news

	return (
		<div className={cls.card}>
			<div className={cls.news__card}>
				<Link href='#'>
					<Image
						className={cls.card__img}
						src={image || ''}
						width={215}
						height={145}
						alt={''}
					/>
				</Link>
				<div className='pt-5'>
					<Link href='#'>
						<p className={cls.card__text}>{text}</p>
						<p className={cls.card__date}>{date}</p>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NewsCard
