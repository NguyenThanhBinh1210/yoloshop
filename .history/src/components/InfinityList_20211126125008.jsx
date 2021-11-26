import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const InfinityList = props => {
	const listRef = useRef(null)
	return <div ref={listRef}></div>
}

InfinityList.propTypes = {}

export default InfinityList
