import React from 'react'
import productData from '../assets/fake-data/products'
import Grid from '../components/Grid'
import Helmet from '../components/Helmet'
import ProductView from '../components/ProductView'
import ProductCard from '../components/ProductCard'
import Section, { SectionBody, SectionTitle } from '../components/Section'

const Product = props => {
	const product = productData.getProductBySlug(props.match.params.slug)

	const relatedProducts = productData.getProducts(8)

	React.useEffect(() => {
		window.scrollTo(0, 0)
	}, [product])
	return (
		<Helmet title={product.title}>
			<Section>
				<SectionBody>
					<ProductView product={product}></ProductView>
				</SectionBody>
			</Section>
			<Section>
				<SectionTitle>Khám phá thêm</SectionTitle>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1} gap={20}>
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
