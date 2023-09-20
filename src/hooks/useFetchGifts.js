import { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifts'

export const useFetchGifts = (category, page) => {
	const [images, setImages] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const getImages = async () => {
		const images = await getGifts(category, page)
		console.log(images)
		setImages(images)
		setIsLoading(false)
	}

	useEffect(() => {
		getImages()
	}, [category, page])

	return {
		images,
		isLoading,
	}
}
