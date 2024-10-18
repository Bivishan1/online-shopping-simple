import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    //destructing product id from particular paramter of product
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(json => console.log(json));//displaying error
        // .then(data => setProducts(data))
    }, [])

    // useEffect(() => {
    //     fetch('./data.json')
    //         .then(res => res.json())
    //         .then(json => console.log(json))
    //         .then((data) => {
    //             //finding specific data of id
    //             console.log(data);
    //             // const foundData = data.find((item) => item.id === parseInt(id));
    //             // setProduct(foundData);
    //         })
    // }, [id]);

    //handling null value
    if (!product) {
        return <p>Loading...</p>
    }
    return (
        <div className='container mx-auto p-4'>
            <h1 className="text-3xl font-bold mb-4">Product Details</h1>
            <img src={product.image} alt={product.title} className='w-full h-auto object-cover rounded-lg shadow-md mb-6' />
            <p className="text-lg mb-4">{product.description}</p>
            <div className="text-2xl font-sembold text-green-600 mb-4">{product.price}</div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Add to cart</button>
        </div>
    )
}

export default ProductDetails