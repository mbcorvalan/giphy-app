import { getGifts } from '../../helpers/getGifts'
describe('Helper getGifts test', () => {
	test('should return an array of gif', async () => {
		const gifts = await getGifts('One Punch')
		if (gifts.length > 0) {
			expect(gifts[0]).toEqual({
				id: expect.any(String),
				title: expect.any(String),
				url: expect.any(String),
			})
		}
	})
})
