import { NewsList } from '@/entities/News'
import Link from 'next/link'
import React from 'react'
import cls from './News.module.css'
import { getNews } from './model/services/fetchNews'
import { NewsData } from './model/types/news'
const News: React.FC = async () => {
	const news: NewsData[] = await getNews()
	return (
		<section className={cls.news}>
			<div className={cls.actions}>
				<h1 className={cls.title}>Все новости</h1>
				<Link className={cls.add} href='/news/add'>
					Добавить новость
				</Link>
			</div>
			<NewsList news={news} />
		</section>
	)
}

export default News
