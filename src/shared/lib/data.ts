import { Employee } from './models.'
import { connectToDB } from './utils'

export async function getEmployee() {
	try {
		connectToDB()
		const employees = await Employee.find()
		return employees
	} catch (error) {
		throw new Error('Error while getting employee')
	}
}
