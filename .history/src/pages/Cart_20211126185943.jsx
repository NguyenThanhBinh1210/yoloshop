import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet'
import { useSelector } from 'react-redux'
import productData from '../assets/fake-data/products'

const Cart = () => {
	const cartItems = useSelector(state => state.cartItems.value)
	const [cartProducts, setCartProducts] = useState([])
	const [totalProducts, setTotalProducts] = useState(0)
	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		setCartProducts(productData.getCartItemsDetail(cartItems))
		setTotalProducts(
			cartItems.reduce((total, item) => total + Number(item.quantity), 0)
		)
		setTotalPrice(
			cartItems.reduce(
				(total, item) => total + Number(item.quantity) * Number(item.price),
				0
			)
		)
	}, [])
	return <Helmet title="Giỏ hàng">Cart</Helmet>
}

export default Cart
