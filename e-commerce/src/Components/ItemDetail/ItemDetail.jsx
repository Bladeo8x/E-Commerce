import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                Category: {category}
                </p>
                <p className='Info'>
                Description: {description}
                </p>
                <p className='Info'>
                Price: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')}/>
            </footer>
        </article>
    )
}

export default ItemDetail