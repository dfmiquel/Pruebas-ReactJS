import './itemDetail.css'
import { ItemCount } from '../itemCount/itemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../cartContext/cartContext'

export const ItemDetail = ({ item }) => {
	const [botonActivo, setBotonActivo] = useState(false)
	const { addItem } = useContext(CartContext)

	const onAdd = (quantity) => {
		setBotonActivo(true)
		addItem(item, quantity)
	}

	return (
		<section>
			<img
				className='itemDetail'
				src={item.pictureUrl}
				alt='foto del producto'
			></img>
			<p className='itemDescripcion'>{item.description}</p>
			<span className='itemDescripcion'>{item.price}</span>
			{/*Con el ternario establecemos la condicion si botonActivo esta clickeado sino mostrame el ItemCount */}
			{botonActivo ? (
				<Link to={'/cart'}>
					<button>Termina tu compra</button>
				</Link>
			) : (
				<ItemCount
					initial={1}
					stock={item.stock}
					onAdd={onAdd}
					value={item.id}
				/>
			)}
		</section>
	)
}
