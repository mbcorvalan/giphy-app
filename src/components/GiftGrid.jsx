import { useState } from 'react'
import { GifItem } from './GifItem'
import { useFetchGifts } from '../hooks/useFetchGifts'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import PropTypes from 'prop-types'

export const GiftGrid = ({ category }) => {
	const [page, setPage] = useState(1)
	const { images, isLoading } = useFetchGifts(category, page)

	const nextPage = () => {
		setPage(page + 1)
	}
	const prevPage = () => {
		if (page === 1) return
		setPage(page - 1)
	}

	return (
		<>
			<h3>{category.replace(/\+/g, ' ')}</h3>
			{isLoading && (
				<Backdrop
					sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={open}
				>
					<CircularProgress color='inherit' />
				</Backdrop>
			)}

			<div className='card-grid'>
				<div className='card-grid__images'>
					{images.map((image) => (
						<GifItem key={image.id} {...image} />
					))}
				</div>
				<div className='card-grid__buttons'>
					<ButtonGroup
						variant='contained'
						aria-label='outlined primary button group'
					>
						<Button disabled={page === 1} size='large' onClick={prevPage}>
							Prev
						</Button>
						<Button size='large' onClick={nextPage}>
							Next
						</Button>
					</ButtonGroup>
				</div>
			</div>
		</>
	)
}

GiftGrid.propTypes = {
	category: PropTypes.string.isRequired,
}

GiftGrid.defaultProps = {
	category: '',
}
