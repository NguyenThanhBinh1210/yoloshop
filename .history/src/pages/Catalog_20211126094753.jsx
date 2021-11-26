import React from 'react'
import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import productData from '../assets/fake-data/products'

const Catalog = () => {
	return (
		<Helmet title="Sản phẩm">
			<div className="catelog">
				<div className="catelog__filter"></div>
				<div className="catelog__content">
					<Grid col={3} mdCol={2} smCol={1} gap={20}>
						{productData.getAllProducts().map((item, index) => (
							<ProductCard
								key={index}
								img01={item.image01}
								ing02={item.image02}
								name={item.name}
								price={Number(item.price)}
								slug={item.slug}
							></ProductCard>
						))}
					</Grid>
				</div>
			</div>
		</Helmet>
	)
}

export default Catalog
