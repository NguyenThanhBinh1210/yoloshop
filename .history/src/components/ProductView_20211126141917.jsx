import React from 'react'
import PropTypes from 'prop-types'

const ProductView = props => {
	const product = props.product
	return (
		<div className="product">
			<div className="product__images">
				<div className="product__images__list">
					<div className="product__images__list__item">
						<img src={product.image01} alt={product.title} />
					</div>
				</div>
			</div>
		</div>
	)
}

ProductView.propTypes = {
	product: PropTypes.object.isRequired
}

export default ProductView
