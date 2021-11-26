import React from 'react'
import productData from '../assets/fake-data/products'
import Helmet from '../components/Helmet'

const Product = props => {
	const product = productData.getProductBySlug(props.match.params.slug)
	const relatedProducts = productData.getProducts(8)
	return <Helmet title={product.title}>Product</Helmet>
}

export default Product
