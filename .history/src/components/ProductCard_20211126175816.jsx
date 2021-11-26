import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { set } from '../redux/product-modal/product-modal.slice'
import Button from './Button'
import numberWithComas from '../utils/numberWithComas'

const ProductCard = props => {
	const dispatch = useDispatch()

	return (
		<div className="product-card">
			<Link to={`/catalog/${props.slug}`}>
				<div className="product-card__image">
					<img src={props.img1} alt="" />
					<img src={props.img2} alt="" />
				</div>
				<h3 className="product-card__name">{props.name}</h3>
				<div className="product-card__price">
					{numberWithComas(props.price)}
					<span className="product-card__price__old">
						<del>{numberWithComas(399000)}</del>
					</span>
				</div>
			</Link>
			<div className="product-card__btn">
				<Button
					size="sm"
					icon="bx bx-cart"
					animate={true}
					onClick={() => dispatch(set(props.slug))}
				>
					chọn mua
				</Button>
			</div>
		</div>
	)
}

ProductCard.propTypes = {
	img1: PropTypes.string.isRequired,
	img2: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	old_price: PropTypes.number,
	slug: PropTypes.string.isRequired
}

export default ProductCard
