import { Link } from 'react-router-dom';
import '../Item/Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, name, price, category, img, stock, description }) => {
    const handleAddToCart = (quantity) => {
        console.log(`Added - Product: ${name}, Quantity: ${quantity}`);
      };

    return (
      <div className="item">
        <img src={img} alt={name} className="img-thumbnail square-image" />
        <h3 className='square-image text-truncate'>{name}</h3>
        <p className='square-image'>Price: ${price}</p>
        <p className='square-image'>Category: {category}</p>
        <p className='square-image'>Stock: {stock}</p>
        {/* para la description, no e podido lograr ajustar el texto automaticamente para que no se pierda texto de la descripcion, sin alterar el contador que se desalinea con los otros si quito el ''text-truncate'' */}
        <p className='square-image center text-truncate'>{description}</p> 
        <footer className='ItemFooter'>
              <Link to={`/item/${id}`} className='Option'>See Detail</Link>
        <ItemCount stock={stock} initial={1} onAdd={handleAddToCart} />
        </footer>
      </div>
    );
  };

//   const Item = ({id, name, img, price, stock}) => {
//     return (
//         <article className='CardItem'>
//             <header className='Header'>
//                 <h2 className='ItemHeader'>
//                     {name}
//                 </h2>
//             </header>
//             <picture>
//                 <img src={img} alt={name} className='ItemImg'/>
//             </picture>
//             <section>
//             <p className='Info'>
//                 Price: ${price}
//                 </p>
//                 <p className='Info'>
//                 Availability: {stock}
//                 </p>
//             </section>

                {/* <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')}/> */}
 
//         </article>
//     )
// }
  
  export default Item;