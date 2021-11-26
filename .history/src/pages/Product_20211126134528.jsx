import React from 'react'
import productData from '../assets/fake-data/products'
import Helmet from '../components/Helmet'
import Section, { SectionBody } from '../components/Section'

const Product = props => {
	const product = productData.getProductBySlug(props.math.params.slug)
	return (
		<Helmet title={product.title}>
			<Section>
				<SectionBody></SectionBody>
			</Section>
		</Helmet>
	)
}

export default Product
