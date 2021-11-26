import React from 'react'
import productData from '../assets/fake-data/products'

const ProductViewModal = () => {
	const product = productData.getProductBySlug()
	return (
		<div className="product-view__modal">
			<div className="product-view__modal__content"></div>
		</div>
	)
}

export default ProductViewModal
