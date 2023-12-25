import Uploader from '@/shared/ui/Uploader/Uploader'
import cls from './AddNews.module.css'
export const AddNews = () => {
	return (
		<div className={cls.container}>
			<form className={cls.form}>
				<Uploader />
				<textarea
					className={cls.textarea}
					name='text'
					id='text'
					rows={12}
					placeholder='Введите текст новости'
				></textarea>
				<button type='submit'>Добавить</button>
			</form>
		</div>
	)
}
