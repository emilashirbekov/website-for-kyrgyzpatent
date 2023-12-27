import { connectToDB } from '@/shared/lib/utils'
import { News } from '../schema/newsSchema'

export async function getNews() {
	try {
		await connectToDB()
		const news = await News.find()
		return news
	} catch (error) {
		console.error('Error while getting news:', error)
		throw new Error('Error while getting news')
	}
}
