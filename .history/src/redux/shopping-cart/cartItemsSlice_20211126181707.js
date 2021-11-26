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

			if (duplicate.length > 0) {
				state.value = state.value.filter(
					e =>
						e.slug !== newItem.slug ||
						(e.color !== newItem.color && e.size !== newItem.size)
				)
			}
		}
	}
})

const findItem = (arr, item) =>
	arr.filter(
		e => e.slug === item.slug && e.color === item.color && e.size === item.size
	)

	const delItem = (arr, item) => arr.item.slug && e.color === item.color && e.size === item.size
	)
