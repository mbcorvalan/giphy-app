import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifts } from '../../hooks/useFetchGifts'

describe('useFetchGifts hook test', () => {
	test('should return the initial state', async () => {
		const { result } = renderHook(() => useFetchGifts('One Punch'))
		const { images, isLoading } = result.current
		expect(images).toEqual([])
		expect(isLoading).toBe(true)
	})
	test('should return an array of images and loading in false', async () => {
		const { result } = renderHook(() => useFetchGifts('One Punch'))
		await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))
		const { images, isLoading } = result.current
		expect(images.length).toBeGreaterThan(0)
		expect(isLoading).toBe(false)
	})
})
