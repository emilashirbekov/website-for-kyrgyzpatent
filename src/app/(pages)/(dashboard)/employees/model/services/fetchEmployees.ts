import { connectToDB } from '@/shared/lib/utils'
import { Employee } from '../schema/employeesSchema'

export async function getEmployee() {
	try {
		await connectToDB()
		const employees = await Employee.find()
		return employees
	} catch (error) {
		console.error('Error while getting employee:', error)
		throw new Error('Error while getting employee')
	}
}
