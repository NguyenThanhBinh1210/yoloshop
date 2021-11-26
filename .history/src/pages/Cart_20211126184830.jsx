import React from 'react'
import Helmet from '../components/Helmet'
import { useSelector } from 'react-redux'
import productData from '../assets/fake-data/products'

const Cart = () => {
	const cartItems = useSelector(state => state.cartItems.value)
	console.log(productData.getCartItemsDetail(cartItems))
	return <Helmet title="Giỏ hàng">Cart</Helmet>
}

export default Cart
