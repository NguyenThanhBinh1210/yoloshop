const numberWithComas = (num, character = ',') =>
	String(num).replace(/\B(?=(\d{3})+(?!\d))/g, character)
export default numberWithComas
