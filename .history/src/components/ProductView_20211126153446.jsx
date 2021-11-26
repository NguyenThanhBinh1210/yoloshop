import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import numberWithComas from '../utils/numberWithComas'

const ProductView = props => {
	const product = props.product
	const [previewImg, setPreviewImg] = useState(product.image01)
	const [descriptionExpand, setDescriptionExpand] = useState(false)
	const [color, setColor] = useState(undefined)
	const [size, setSize] = useState(undefined)
	return (
		<div className="product">
			<div className="product__images">
				<div className="product__images__list">
					<div
						className="product__images__list__item"
						onClick={() => setPreviewImg(product.image01)}
					>
						<img src={product.image01} alt={product.title} />
					</div>
					<div
						className="product__images__list__item"
						onClick={() => setPreviewImg(product.image02)}
					>
						<img src={product.image02} alt={product.title} />
					</div>
				</div>
				<div className="product__images__main">
					<img src={previewImg} alt={product.title} />
				</div>
				<div
					className={`product-description ${descriptionExpand ? 'expand' : ''}`}
				>
					<div className="product-description__title">Chi tiết sản phẩm</div>
					<div
						className="product-description__content"
						dangerouslySetInnerHTML={{ __html: product.description }}
					></div>
					<div className="product-description__toggle ">
						<Button
							size="sm"
							onClick={() => setDescriptionExpand(!descriptionExpand)}
						>
							{descriptionExpand ? 'Thu gọn' : 'Xem thêm'}
						</Button>
					</div>
				</div>
			</div>
			<div className="product__info">
				<h1 className="product__info__title">{product.title}</h1>
				<div className="product__info__item">
					<div className="product__info__item__price">
						{numberWithComas(product.price)}
					</div>
				</div>
				<div className="product__info__item">
					<div className="product__info__item__title">Màu sắc</div>
					<div className="product__info__item__list">
						{product.colors.map((item, index) => (
							<div
								key={index}
								className={`product__info__item__list__item ${
									color === item ? 'active' : ''
								}`}
							>
								<div className={`circle bg-${item}`}></div>
							</div>
						))}
					</div>
				</div>
				<div className="product__info__item">
					<div className="product__info__item__title">Kích cỡ</div>
					<div className="product__info__item__list">
						{product.size.map((item, index) => (
							<div
								key={index}
								className={`product__info__item__list__item ${
									size === item ? 'active' : ''
								}`}
							>
								<span className="product__info__item__list__item__size">
									{item.toUpperCase()}
								</span>
							</div>
						))}
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
