import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {
	return <label className="custo-check"></label>
}

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool
}

export default Checkbox
