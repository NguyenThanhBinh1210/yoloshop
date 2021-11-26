import React from 'react'
import productData from '../assets/fake-data/products'
import ProductView from '../components/ProductView'

const ProductViewModal = () => {
	const product = productData.getProductBySlug('ao-thun-polo-04')
	return (
		<div className="product-view__modal">
			<div className="product-view__modal__content"></div>
		</div>
	)
}

export default ProductViewModal
