import { Card } from '@/entities/Card'
import { news } from '@/shared/constants/constants'
import Link from 'next/link'
import cls from './News.module.css'
const News = () => {
	return (
		<section className={cls.news}>
			<div className={cls.actions}>
				<h1 className={cls.title}>Все новости</h1>
				<Link className={cls.add} href='/news/add'>
					Добавить новость
				</Link>
			</div>
			<ul className={cls.news__list}>
				{news.map(el => (
					<li key={el.id} className={cls.news__item}>
						<Card text={el.text} date={el.date} key={el.id} image={el.image} />
					</li>
				))}
			</ul>
		</section>
	)
}

export default News
