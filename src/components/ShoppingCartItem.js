import React,{useContext} from 'react';

//contexts
import{CartContext} from './../contexts/CartContext'

const Item = props => {

	const {removeItem,cart}=useContext(CartContext)
	


	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<p>$ {props.price}</p>
				<button onClick={()=>props.removeItem(props.item.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
