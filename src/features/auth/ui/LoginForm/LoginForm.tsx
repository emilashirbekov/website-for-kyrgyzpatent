'use client'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent } from 'react'
import cls from './LoginForm.module.css'

const LoginForm = () => {
	const router = useRouter()
	const [user, setUser] = React.useState({
		email: '',
		password: '',
	})

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setUser(prevUser => ({ ...prevUser, [name]: value }))
	}

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
		localStorage.setItem('user', JSON.stringify(user))
		router.push('/')
	}

	return (
		<div className={cls.container__form}>
			<div className={cls.content}>
				<h1 className={cls.title}>Войдите в свой аккаунт</h1>
				<form className={cls.form} onSubmit={onSubmit}>
					<div>
						<label htmlFor='email'>Введите почту</label>
						<input
							value={user.email}
							onChange={onChange}
							type='email'
							name='email'
							id='email'
							placeholder='name@company.com'
							required={true}
						/>
					</div>
					<div>
						<label htmlFor='password'>Введите пароль</label>
						<input
							value={user.password}
							onChange={onChange}
							type='password'
							name='password'
							id='password'
							placeholder='••••••••'
							required={true}
						/>
					</div>
					<button type='submit'>Войти</button>
				</form>
			</div>
		</div>
	)
}

export default LoginForm
