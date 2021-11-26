const initialState = {
	value: null
}

export const producrModalSlice = createSlice({
	name: 'producrModal',
	initialState,
	reducer: {
		set: (state, action) => {
			state.value = action.payload
		}
	}
})
