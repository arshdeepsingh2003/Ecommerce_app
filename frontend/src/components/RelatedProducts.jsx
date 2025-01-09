import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category,subCategory}) => {

    const { products } = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{

        if (products.length > 0) {
            
            let productsCopy = products.slice();
            
            // Filter the products to include only those that match the specified `category`
            productsCopy = productsCopy.filter((item) => category === item.category);

           // Further filter the products to include only those that match the specified `subCategory`
           productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

           // Take the first 5 items from the filtered list and set them as the `related` state
           setRelated(productsCopy.slice(0, 5));
        }
        
    },[products])

  return (
    <div className='my-24'>
      <div className=' text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={"PRODUCTS"} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
