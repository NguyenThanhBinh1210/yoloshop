import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'
import ProductCard from './ProductCard'

const InfinityList = props => {
	const listRef = useRef(null)
	const [data, setData] = useState(props.data)
	return (
		<div ref={listRef}>
			<Grid col={3} mdCol={2} smCol={1} gap={20}>
				{data.map((item, index) => (
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
		</div>
	)
}

InfinityList.propTypes = {
	data: PropTypes.array.isRequired
}

export default InfinityList
