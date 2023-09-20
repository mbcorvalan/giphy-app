import PropTypes from 'prop-types'

export const GifItem = ({ title, url }) => {
	return (
		<div className='card-grid__card'>
			<img src={url} alt={title} />
		</div>
	)
}

GifItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
}

GifItem.defaultProps = {
	title: '',
	url: '',
}
