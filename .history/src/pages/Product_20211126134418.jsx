import React from 'react'
import productData from '../assets/fake-data/products'
import Helmet from '../components/Helmet'

const Product = props => {
	const product = productData.getProductBySlug(props.math.params.slug)
	return <Helmet title={product.title}>Product</Helmet>
}

export default Product
