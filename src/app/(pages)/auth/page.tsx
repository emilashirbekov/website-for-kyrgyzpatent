import LoginForm from '@/features/auth/ui/LoginForm/LoginForm'
import logo from '@/shared/assets/icons/logo.svg'
import Image from 'next/image'
import cls from './Login.module.css'

const Login = () => {
	return (
		<section className={cls.login}>
			<div className={cls.container}>
				<Image
					className='mr-2'
					src={logo}
					width={100}
					height={100}
					alt='logo'
				/>
				<LoginForm />
			</div>
		</section>
	)
}

export default Login
