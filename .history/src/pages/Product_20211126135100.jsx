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
				<SectionBody>
					<Grid>
						{relatedProducts.map((item, index) => (
							<ProductCard
								key={index}
								img1={item.image01}
								img2={item.image02}
								name={item.title}
								price={Number(item.price)}
								old_price={Number(item.old_price)}
								slug={item.slug}
							/>
						))}
					</Grid>
				</SectionBody>
			</Section>
		</Helmet>
	)
}

export default Product
