import { createSlice } from '@reduxjs/toolkit'
const items =
	localStorage.getItem('cartItems') !== null
		? JSON.parse(localStorage.getItem('cartItems'))
		: []

const initialState = {
	value: items
}

export const cartItemsSlice = createSlice({
	name: 'cartItems',
	initialState,
	reducer: {
		addItem: (state, action) => {
			const newItem = action.payload
			const duplicate = state.value.filter(
				e =>
					e.slug === newItem.slug &&
					e.color === newItem.color &&
					e.size === newItem.size
			)
		}
	}
})
