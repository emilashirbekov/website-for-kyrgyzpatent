import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema(
	{
		id: { type: Number, unique: true },
		photo: { type: String },
		fullName: { type: String },
		department: { type: String },
		position: { type: String },
		phoneNumber: { type: String },
		email: { type: String },
	},
	{ timestamps: true }
)

export const Employee =
	mongoose.models.employee || mongoose.model('employee', employeeSchema)
