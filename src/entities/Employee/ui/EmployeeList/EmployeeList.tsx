import { EmployeesData } from '@/app/(pages)/(dashboard)/employees/model/types/employees'
import React from 'react'
import EmployeeCard from './EmployeeCard'

interface EmployeeListProps {
	employees: EmployeesData[]
}

export const EmployeeList: React.FC<EmployeeListProps> = React.memo(
	({ employees }) => {
		return (
			<React.Fragment>
				{employees.map(el => (
					<React.Fragment key={el.id}>
						<EmployeeCard data={el} />
					</React.Fragment>
				))}
			</React.Fragment>
		)
	}
)
