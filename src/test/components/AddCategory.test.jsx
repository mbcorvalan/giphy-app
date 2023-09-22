import { fireEvent, screen, render } from '@testing-library/react'
import { AddCategory } from '../../components/AddCategory'

describe('Test in <AddCategory />', () => {
	const value = 'Hello World'
	test('should render the component correctly', () => {
		const wrapper = render(<AddCategory onNewCategory={() => {}} />)
		//screen.debug()
		expect(wrapper).toMatchSnapshot()
	})
	test('should change the text box', () => {
		const onNewCategory = jest.fn()
		render(<AddCategory onNewCategory={onNewCategory} />)
		const input = screen.getByRole('textbox')
		fireEvent.change(input, { target: { value } })
		expect(input.value).toBe(value)
	})
	test('should call OnNewCategory if the input has a value', () => {
		const onNewCategory = jest.fn()
		render(<AddCategory onNewCategory={onNewCategory} />)
		const input = screen.getByRole('textbox')
		const form = screen.getByRole('form')
		fireEvent.change(input, { target: { value } })
		fireEvent.submit(form)
		expect(input.value).toBe('')
		expect(onNewCategory).toHaveBeenCalled()
		expect(onNewCategory).toHaveBeenCalledWith(value.replace(/ /g, '+'))
	})

	test('should not call OnNewCategory if the input has no value', () => {
		const onNewCategory = jest.fn()
		render(<AddCategory onNewCategory={onNewCategory} />)
		const form = screen.getByRole('form')
		fireEvent.submit(form)
		expect(onNewCategory).not.toHaveBeenCalled()
	})
})
