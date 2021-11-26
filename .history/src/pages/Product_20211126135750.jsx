import React from 'react'
import productData from '../assets/fake-data/products'
import Helmet from '../components/Helmet'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

const Product = props => {
	const product = productData.getProductBySlug(props.match.params.slug)
	const relatedProducts = productData.getProducts(8)
	return <Helmet title={product.title}>Product</Helmet>
}

export default Product
