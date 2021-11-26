import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {
	document.title = 'Yolo - ' + props.title

	useEffect(() => {
		effect
		return () => {
			cleanup
		}
	}, [input])

	return <div>{props.children}</div>
}

Helmet.propTypes = {
	title: PropTypes.string.isRequired
}

export default Helmet
