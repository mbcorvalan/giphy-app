const API_KEY = 'sCguERI8aiUwrz7ccipbriLjGBJ9JYzF'
const BASE_URL = 'https://api.giphy.com/v1/gifs/search'
const LIMIT = 10

export const getGifts = async (category, page = 1) => {
	try {
		const response = await fetch(
			`${BASE_URL}?api_key=${API_KEY}&q=${category}&limit=${LIMIT}&offset=${
				page * LIMIT
			}&rating=g&lang=en&bundle=messaging_non_clips`
		)

		if (!response.ok) {
			throw new Error('Network response was not ok')
		}

		const { data } = await response.json()
		return data.map((gif) => ({
			id: gif.id,
			title: gif.title,
			url: gif.images?.fixed_width.webp,
		}))
	} catch (error) {
		console.error('Error fetching the gifs', error)
		return []
	}
}
