import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema(
	{
		id: { type: Number, unique: true },
		image: { type: String },
		text: { type: String },
		date: { type: String },
	},
	{ timestamps: true }
)

export const News = mongoose.models.news || mongoose.model('news', newsSchema)
