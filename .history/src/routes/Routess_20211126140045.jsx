import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Accessory from '../pages/Accessory'
import Contact from '../pages/Contact'

const Routess = () => {
	return (
		<Switch>
			<Route path="/" exact component={Home}></Route>
			<Route path="/:slug" component={Product}></Route>
			<Route path="/catalog" component={Catalog}></Route>
			<Route path="/cart" component={Cart}></Route>
			<Route path="/accessories" component={Accessory}></Route>
			<Route path="/contact" component={Contact}></Route>
		</Switch>
	)
}

export default Routess
