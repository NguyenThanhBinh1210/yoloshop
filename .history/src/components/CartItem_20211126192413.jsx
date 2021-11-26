import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import numberWithComas from '../utils/numberWithComas'

const CartItem = props => {
	const dispatch = useDispatch()
	const [item, setItem] = useState(props.item)
	return <div>{props.item.product.title}</div>
}

CartItem.propTypes = {
	item: PropTypes.object
}

export default CartItem
