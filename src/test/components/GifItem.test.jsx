import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem'

describe('Test in <GifItem />', () => {
	const title = 'The office'
	const url = 'https://localhost/something.jpg'

	test('should render the component correctly', () => {
		const wrapper = render(<GifItem title={title} url={url} />)
		//screen.debug()
		expect(wrapper).toMatchSnapshot()
	})
	test('should show the image with the url and the alt text', () => {
		render(<GifItem title={title} url={url} />)
		/* 		expect(screen.getByRole('img').src).toBe(url)
		expect(screen.getByRole('img').alt).toBe(title) */
		const { src, alt } = screen.getByRole('img')
		expect(src).toBe(url)
		expect(alt).toBe(title)
		/*
		test('should show the title in the component', () => {
			render(<GifItem title={title} url={url} />)
			expect(screen.getByText(title)).toBeTruthy()
		})
		*/
	})
})
