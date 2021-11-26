import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import numberWithComas from '../utils/numberWithComas'
import { Link } from 'react-router-dom'

const CartItem = props => {
	const dispatch = useDispatch()
	const [item, setItem] = useState(props.item)
	const [quantity, setQuantity] = useState(props.item.quantity)

	useEffect(() => {
		setItem(props.item)
		setQuantity(props.item.quantity)
	}, [props.item])

	return (
		<div className="cart__item">
			<div className="cart__item__image">
				<img src={item.product.image01} alt="" />
			</div>
			<div className="cart__item__info">
				<div className="cart__item__info__name">
					<Link to={`/catalog/${item.slug}`}>{`${item.product.title}`}</Link>
				</div>
			</div>
		</div>
	)
}

CartItem.propTypes = {
	item: PropTypes.object
}

export default CartItem