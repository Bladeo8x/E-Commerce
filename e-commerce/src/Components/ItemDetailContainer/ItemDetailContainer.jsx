import '../ItemDetailContainer/ItemDetailContainer.css'
import {useState, useEffect} from 'react'
// import { getProductById } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'
import { getDoc, doc, QuerySnapshot } from 'firebase/firestore';
import { db } from '../../Services/Firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
        .then(QuerySnapshot => {
            console.log(QuerySnapshot)
            const fields = QuerySnapshot.data()
            const productAdapted = { id: QuerySnapshot.id, ...fields}

            setProduct(productAdapted)
        })


        // getProductById(itemId)
        // .then(response => {
        //     setProduct(response)
        // })
        // .catch(error => {
        //     console.error(error)
        // })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
    }

export default ItemDetailContainer