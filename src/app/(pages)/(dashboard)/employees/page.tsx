import { EmployeeList } from '@/entities/Employee'
import { FC } from 'react'
import cls from './Employees.module.css'
import { getEmployee } from './model/services/fetchEmployees'
import { EmployeesData } from './model/types/employees'

const Employees: FC = async () => {
	const employees: EmployeesData[] = await getEmployee()

	return (
		<section className={cls.container}>
			<div className={cls.employees}>
				<EmployeeList employees={employees} />
			</div>
		</section>
	)
}

export default Employees
