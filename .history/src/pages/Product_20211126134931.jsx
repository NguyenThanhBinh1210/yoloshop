import React from 'react'
import productData from '../assets/fake-data/products'
import Helmet from '../components/Helmet'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

const Product = props => {
	const product = productData.getProductBySlug(props.math.params.slug)
	const relatedProducts = productData.getProducts(0)
	return (
		<Helmet title={product.title}>
			<Section>
				<SectionBody>{props.title}</SectionBody>
			</Section>
			<Section>
				<SectionTitle>Khám phá thêm</SectionTitle>
				<SectionBody></SectionBody>
			</Section>
		</Helmet>
	)
}

export default Product
