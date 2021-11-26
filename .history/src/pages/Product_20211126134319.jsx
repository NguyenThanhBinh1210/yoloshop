import React from 'react'
import productData from '../assets/fake-data/products'

const Product = props => {
	const product = productData.getProductBySlug(props.math.params.slug)
	return <div>Product</div>
}

export default Product
