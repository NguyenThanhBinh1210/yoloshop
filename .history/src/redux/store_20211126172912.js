import { configureStore } from '@reduxjs/toolkit'
import producrModalSlice from './product-modal/product-modal.slice'

export const store = configureStore({
	reducer: {
		productModal: producrModalSlice
	}
})
