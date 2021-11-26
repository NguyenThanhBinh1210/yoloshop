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
			const duplicate = findItem(state.value, newItem)

			if (duplicate.length > 0) {
				state.value = delItem(state.value, newItem)

				state.value = [...state.value]
			}
		}
	}
})

const findItem = (arr, item) =>
	arr.filter(
		e => e.slug === item.slug && e.color === item.color && e.size === item.size
	)

const delItem = (arr, item) =>
	arr.filter(
		e =>
			e.slug !== item.slug || (e.color !== item.color && e.size !== item.size)
	)
