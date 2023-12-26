import mongoose from 'mongoose'

interface ConnectionStatus {
	isConnected: number
}

let connection: ConnectionStatus = { isConnected: 0 }

export const connectToDB = async (): Promise<void> => {
	try {
		if (connection.isConnected === 0) {
			if (!process.env.MONGO) {
				throw new Error('MONGO environment variable is not defined')
			}

			const db = await mongoose.connect(process.env.MONGO)
			connection.isConnected = db.connection.readyState
		}
	} catch (error) {
		throw new Error('Error connecting to the database')
	}
}
