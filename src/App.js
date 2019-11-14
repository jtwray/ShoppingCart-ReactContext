import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';


function App() {
	const [products]=useState( data );
	const [cart, setCart]=useState( [] ); 

	const addItem=item => {
		setCart( [...cart, item] )
	};
	const removeItem=item => {
	let filteredItems=cart.filter((cartMovie)=>{return (cartMovie.id!==item.id)})	
	
		setCart(filteredItems)
		console.log("cart:",cart)

	}
	// const removeFromSavedList=movie => {
	// 	const filteredList=savedList.filter( savedListMovie => savedListMovie.id!==movie.id )
	
	// 	setSavedList( filteredList )

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>


				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}
					/>

				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
