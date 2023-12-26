import { ComponentPropsWithoutRef } from 'react'
import cls from './Input.module.css'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
	label: string
	error: boolean
}

const Input = ({ label, error, ...rest }: InputProps) => {
	return (
		<div className={cls.inputWrapper}>
			<label> {label}</label>
			<input {...rest} />
			{error && <p className='text-red text-xl'>Заполните поле !</p>}
		</div>
	)
}

export default Input
