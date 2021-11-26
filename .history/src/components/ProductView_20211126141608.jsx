import React from 'react'
import PropTypes from 'prop-types'

const ProductView = props => {
	const product = props.product
	return <div>{product.title}</div>
}

ProductView.propTypes = {
	product: PropTypes.object.isRequired
}

export default ProductView
