import React, { useState } from 'react'
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
	})
	return <Helmet title="Giỏ hàng">Cart</Helmet>
}

export default Cart
