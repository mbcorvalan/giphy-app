import { useState } from 'react'
import { AddCategory, GiftGrid } from './components'

export const GiphyApp = () => {
	const [category, setCategory] = useState([])

	const AddNewCategory = (newCategory) => {
		/* setCategory([...category, newCategory]) */
		setCategory([newCategory])
	}
	return (
		<>
			<AddCategory onNewCategory={AddNewCategory} />
			{category?.map((category) => (
				<GiftGrid key={category} category={category} />
			))}
		</>
	)
}
