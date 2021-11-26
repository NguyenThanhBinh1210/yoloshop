import React from 'react'
import Helmet from '../components/Helmet'

const Catalog = () => {
	return (
		<Helmet title="Sản phẩm">
			<div className="catelog">
				<div className="catelog__filter"></div>
				<div className="catelog__content"></div>
			</div>
		</Helmet>
	)
}

export default Catalog
