import mongoose from 'mongoose'

const connection = {}

export const connectToDB = async () => {
	try {
		//@ts-ignore
		if (connection.isConnected) return
		//@ts-ignore
		const db = await mongoose.connect(process.env.MONGO)
		//@ts-ignore
		connection.isConnected = db.connections[0].readyState
	} catch (error) {
		console.log(error)
		//@ts-ignore
		throw new Error(error)
	}
}
