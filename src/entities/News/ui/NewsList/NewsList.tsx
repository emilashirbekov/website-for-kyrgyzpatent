import { NewsData } from '@/app/(pages)/(dashboard)/news/model/types/news'
import React from 'react'
import NewsCard from './NewsCard'
import cls from './NewsCard.module.css'

interface NewsListProps {
	news: NewsData[]
}

export const NewsList: React.FC<NewsListProps> = React.memo(({ news }) => {
	return (
		<React.Fragment>
			<ul className={cls.news__list}>
				{news.map(el => (
					<li key={el.id} className={cls.news__item}>
						<NewsCard news={el} />
					</li>
				))}
			</ul>
		</React.Fragment>
	)
})
