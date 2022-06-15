import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productList_DUMMY from '../utils/constant';

const ProductDetail = () => {
    console.log('is render')
    const params = useParams();
    const [productData, setProductData] = useState([
        {
        title : '',
        price : null,
        description : '',
    },
]);
    const navigate=useNavigate();

    const fetchData = () => {
        const data = productList_DUMMY.filter(
            (product) => product.id === +params.productId
            );
            setProductData(data)
     
          {console.log(productData)};
    };

    const Back =() => {
        navigate('/')
    }

  return (
    <React.Fragment>
    <div>
        <img src='' alt='someImage'/>
        <h4>Title : {productData[0].title}</h4>
        <p> Price : {productData[0].price}</p>
        <p>Description : {productData[0].description}</p>
        
    </div>
    <button onClick={fetchData}>Fetch Data</button>
    <br />
    <button onClick={Back}>Back</button>
    </React.Fragment>
    
  )
}

export default ProductDetail