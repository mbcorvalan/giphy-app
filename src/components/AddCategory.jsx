import { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('')
	const onInputChange = ({ target }) => {
		setInputValue(target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		const trimmedInputValue = inputValue.trim().replace(/ /g, '+')
		if (trimmedInputValue.length <= 1) return
		onNewCategory(trimmedInputValue)
		setInputValue('')
	}

	return (
		<form className='form-gifts' onSubmit={onSubmit} aria-label='form'>
			<input
				type='text'
				placeholder='Search GIPHY'
				onChange={onInputChange}
				value={inputValue}
				className='form-gifts__input'
			/>
			<div className='form-gifts__icon'>
				<FontAwesomeIcon className='fa-2x' icon={faSearch} />
			</div>
		</form>
	)
}

AddCategory.propTypes = {
	onNewCategory: PropTypes.func.isRequired,
}

AddCategory.defaultProps = {
	onNewCategory: () => {},
}
