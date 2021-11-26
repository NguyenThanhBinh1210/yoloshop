import { createSlice } from '@reduxjs/toolkit'
const items =
	localStorage.getItem('cartItems') !== null
		? JSON.parse(localStorage.getItem('cartItems'))
		: []
