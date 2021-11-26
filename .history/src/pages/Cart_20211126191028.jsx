import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet'
import { useSelector } from 'react-redux'
import productData from '../assets/fake-data/products'
import numberWithComas from '../utils/numberWithComas'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Cart = () => {
	const cartItems = useSelector(state => state.cartItems.value)
	const [cartProducts, setCartProducts] = useState([])
	const [totalProducts, setTotalProducts] = useState(0)
	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		setCartProducts(productData.getCartItemsDetail(cartItems))
		setTotalPrice(
			cartItems.reduce(
				(total, item) => total + Number(item.quantity) * Number(item.price),
				0
			)
		)
		setTotalProducts(
			cartItems.reduce((total, item) => total + Number(item.quantity), 0)
		)
	}, [cartItems])
	return (
		<Helmet title="Giỏ hàng">
			<div className="cart">
				<div className="cart__info">
					<div className="cart__info__txt">
						<p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
						<div className="cart__info__txt__price">
							<span>Thành tiền</span>
							<span>{numberWithComas(totalPrice)}</span>
						</div>
					</div>
					<div className="cart__info__btn">
						<Button>Đặt hàng</Button>
						<Link>
							<Button>Tiếp tục mua hàng</Button>
						</Link>
					</div>
				</div>
			</div>
		</Helmet>
	)
}

export default Cart
