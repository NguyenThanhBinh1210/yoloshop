import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {
	return (
		<label className="custom-checkbox">
			<input type="checkbox" ref={inputRef} />
		</label>
	)
}

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool
}

export default Checkbox
