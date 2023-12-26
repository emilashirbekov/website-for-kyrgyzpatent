import React from 'react'

interface UseInputProps {
	initialValues: Record<string, string>
}

const useInput = ({ initialValues }: UseInputProps) => {
	const [values, setValues] =
		React.useState<Record<string, string>>(initialValues)
	const [error, setError] = React.useState<boolean>(false)

	const handleChange =
		(name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setValues(prevValues => ({ ...prevValues, [name]: e.target.value }))
			setError(false)
		}

	return {
		values,
		error,
		onChange: handleChange,
		setError,
	}
}

export default useInput
