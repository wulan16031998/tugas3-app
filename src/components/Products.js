import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';



// const Products = () => {
//     const [price, setPrice] = useState(10000)

//     const priceChangeHandler = () => {
//         setPrice(price-1000 )
//        }
//     if(price < 7000){
//         throw new Error('batas harga Rp. 7000')
//     }
//   return (
//     <div>
//     <h2>Products</h2>
//     <ul>
//        <li> <h4>Kunyit</h4>
//         <p>Rp.{price}</p>
//         <button onClick={priceChangeHandler}> Tombol tawar harga(-1000/klik)</button>
        
//         </li>
//     </ul>
//     </div>
//   )
// }



const Product = ({product}) => {
    console.log(product.id);
    const navigate = useNavigate();
}


const productDetailHandler = () => {
    Navigate('/1', Product);
}



const Products=({product}) => {
    return ( 
        <div style={{padding:'0.25rem'}} onClick={productDetailHandler}>
            <h4>{product.title}</h4>
            <p>{product.price}</p>
            <p>{product.description}</p>
         </div>
    );
};


export default Products