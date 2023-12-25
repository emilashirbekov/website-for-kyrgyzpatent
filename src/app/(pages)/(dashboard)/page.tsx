'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import News from './news/page'

export default function Home() {
	const router = useRouter()

	useEffect(() => {
		const user = localStorage.getItem('user')

		if (user) {
			router.push('/')
		} else {
			router.push('/auth')
		}
	}, [])

	return <News />
}
