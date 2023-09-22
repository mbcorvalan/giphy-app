import { GiphyApp } from '../GiphyApp'
import { render } from '@testing-library/react'

describe('GiphyApp', () => {
	test('should render the component correctly', () => {
		const wrapper = render(<GiphyApp />)
		expect(wrapper).toMatchSnapshot()
	})
})
