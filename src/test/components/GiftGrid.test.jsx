import { GiftGrid } from '../../components/GiftGrid'
import { render, screen } from '@testing-library/react'
import { useFetchGifts } from '../../hooks/useFetchGifts'

jest.mock('../../hooks/useFetchGifts')

describe('Test in <GiftGrid />', () => {
	const category = 'One Punch'
	test('should render the component correctly', () => {
		useFetchGifts.mockReturnValue({
			images: [],
			loading: true,
		})
		const wrapper = render(<GiftGrid category={category} />)
		expect(wrapper).toMatchSnapshot()
		/* 	expect(screen.getByText('progressbar')).toBeInTheDocument() */
		expect(screen.getByText(category))
	})
	test('should show items when images are loaded with useFetchGifs', async () => {
		const gifs = [
			{
				id: 'ABC',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'Cualquier cosa',
			},
			{
				id: '123',
				url: 'https://localhost/cualquier/cosa.jpg',
				title: 'Cualquier cosa',
			},
		]
		useFetchGifts.mockReturnValue({
			images: gifs,
			loading: false,
		})
		render(<GiftGrid category={category} />)
		expect(screen.getAllByRole('img').length).toBe(gifs.length)
	})
})
