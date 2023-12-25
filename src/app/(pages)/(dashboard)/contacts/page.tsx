import { employees } from '@/shared/constants/constants'
import Image from 'next/image'
import cls from './Contacts.module.css'

const Contacts = () => {
	return (
		<section className={cls.container}>
			<div className={cls.employees}>
				{employees.map(el => (
					<div className='max-w-sm bg-white border rounded-xl'>
						<Image
							className={cls.employees__img}
							src={el.photo}
							alt='Employee photo'
							width={300}
							height={300}
						/>

						<div className='p-5'>
							<h5 className='mb-2 text-2xl font-bold text-blue '>
								{el.fullName}
							</h5>

							<ul>
								<li className='mb-3 font-normal text-blue'>
									<p>{el.email}</p>
									<p>{el.position}</p>
									<p>{el.department}</p>
									<p>{el.phoneNumber}</p>
								</li>
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Contacts
