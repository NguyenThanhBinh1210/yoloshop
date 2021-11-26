import React from 'react'

const Product = () => {
	const product = productData.getProductBySlug(props.match.params.slug)

	const relatedProducts = productData.getProducts(0)
	return (
		<Helmet title={product.title}>
			<Section></Section>
			<Section>
				<SectionTitle>Khám phá thêm</SectionTitle>
				<SectionBody>
					<Grid col={4} mdCol={2} smCol={1} gap={20}>
						{relatedProducts.map((item, index) => (
							<ProductCard
								key={index}
								img01={item.image01}
								img02={item.image02}
								name={item.title}
								price={Number(item.price)}
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
