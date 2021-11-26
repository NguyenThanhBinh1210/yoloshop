import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {
	const inputRef = React.useRef(null
	return (
		<label className="custom-checkbox">
			<input type="checkbox" ref={inputRef} onChange={}/>
		</label>
	)
}

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool
}

export default Checkbox
