import { configureStore } from '@reduxjs/toolkit'

import productModalReducer from './product-modal/productModalSlice'
import cartItemsSlice from './shopping-cart/cartItemsSlice'

export const store = configureStore({
	reducer: {
		productModal: productModalReducer,
		cartItems: cartItemsSlice
	}
})
