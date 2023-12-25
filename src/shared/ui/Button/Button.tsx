import { classNames } from '@/shared/lib/classNames'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import cls from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children?: ReactNode
}

const Button = (props: ButtonProps) => {
	const { className, children, ...rest } = props

	return (
		<button className={classNames(cls.button, {}, [className])} {...rest}>
			{children}
		</button>
	)
}

export default Button
