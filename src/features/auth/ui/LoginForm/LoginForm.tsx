'use client'
import useInput from '@/shared/hooks/useInput/useInput'
import Button from '@/shared/ui/Button/Button'
import Input from '@/shared/ui/Input/Input'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import cls from './LoginForm.module.css'

export const LoginForm = () => {
	const router = useRouter()
	const { values, error, onChange, setError } = useInput({
		initialValues: {
			email: '',
			password: '',
		},
	})
	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (values.email.trim() !== '' && values.password.trim() !== '') {
			setError(false)
		} else {
			setError(true)
		}
	}

	return (
		<div className={cls.container__form}>
			<div className={cls.content}>
				<h1 className={cls.title}>Войдите в свой аккаунт</h1>
				<form className={cls.form} onSubmit={onSubmit}>
					<div>
						<Input
							error={error}
							label='Введите почту'
							value={values.email}
							onChange={onChange('email')}
							type='email'
							name='email'
							id='email'
							placeholder='name@company.com'
						/>
					</div>
					<div>
						<Input
							error={error}
							label='Введите пароль'
							value={values.password}
							onChange={onChange('password')}
							type='password'
							name='password'
							id='password'
							placeholder='••••••••'
						/>
					</div>
					<Button type='submit'>Войти</Button>
				</form>
			</div>
		</div>
	)
}
