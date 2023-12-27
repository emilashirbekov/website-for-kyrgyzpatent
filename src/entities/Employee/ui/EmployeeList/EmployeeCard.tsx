import Image from 'next/image'
import React from 'react'
import { EmployeesData } from '../model/types/employees'
import cls from './EmployeeList.module.css'

interface EmployeeCardProps {
	data: EmployeesData
}

const EmployeeCard: React.FC<EmployeeCardProps> = React.memo(({ data }) => {
	return (
		<div className={cls.employee__card}>
			<Image
				className={cls.employee__img}
				src={data.photo}
				alt='Employee photo'
				width={300}
				height={300}
			/>
			<div className='p-5'>
				<h5 className={cls.employee__name}>{data.fullName}</h5>
				<ul>
					<li className='mb-3 font-normal text-blue'>
						<p>{data.email}</p>
						<p>{data.position}</p>
						<p>{data.department}</p>
						<p>{data.phoneNumber}</p>
					</li>
				</ul>
			</div>
		</div>
	)
})

export default EmployeeCard
