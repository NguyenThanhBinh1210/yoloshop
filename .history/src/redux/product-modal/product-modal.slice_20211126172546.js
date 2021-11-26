const initialState = {
	value: null
}

export const producrModalSlice = createSlice({
	name: 'producrModal',
	initialState,
	reducer: {
		set: (state, action) => {
			state.value = action.payload
		},
		remove: state => {
			state.value = null
		}
	}
})

export const { set, remove } = producrModalSlice.actions
