import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = props => {
	const inputRef = React.useRef(null)
	const onChange = () => props.onChange(inputRef.current)
	const 
	return (
		<label className="custom-checkbox">
			<input
				type="checkbox"
				ref={inputRef}
				onChange={onChange}
				checked={props.checked}
			/>
		</label>
	)
}

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool
}

export default Checkbox
