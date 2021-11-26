import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productData from '../assets/fake-data/products'
import ProductView from '../components/ProductView'
import Button from './Button'

const ProductViewModal = () => {
	const product = productData.getProductBySlug('ao-thun-polo-04')
	return (
		<div
			className={`product-view__modal ${product === undefined ? '' : 'active'}`}
		>
			<div className="product-view__modal__content">
				<ProductView product={product} />
				<div className="product-view__modal__content__close">
					<Button size="sm">Đóng</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductViewModal
