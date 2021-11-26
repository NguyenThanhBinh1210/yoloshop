import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import numberWithComas from '../utils/numberWithComas'

const CartItem = props => {
	const dispatch = useDispatch()
	const [item, setItem] = useState(props.item)
	const [quantity, setQuantity] = useState(props.item.quantity)

	useEffect(() => {}, [props.item])

	return <div>{item.product.title}</div>
}

CartItem.propTypes = {
	item: PropTypes.object
}

export default CartItem
