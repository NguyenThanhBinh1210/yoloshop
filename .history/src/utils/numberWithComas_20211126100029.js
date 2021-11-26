const numberWithComas = (num, character = '.') =>
	num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
export default numberWithComas
