import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    //destructing product id from particular paramter of product
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetching the data from the public folder
        // '/data.json' refers to the public folder wehre './data.json' refers to the current folder
        fetch('/data.json')
            .then(res => res.json())
            .then((data) => {
                // Finding specific product by id
                const foundProduct = data.find((item) => item.id === parseInt(id));
                setProduct(foundProduct);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                setLoading(false);
            });
    }, [id]);


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
            <p className="text-yellow text-md py-4"> <span className='text-yellow-500'>Rating:</span> {product.rating}</p>
            <h2 className='underline py-2 font-bold'>Description:</h2>
            <p className="text-lg mb-4">{product.description}</p>
            <div className="text-2xl font-sembold text-green-600 mb-4">{product.price}</div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Add to cart</button>
        </div>
    )
}

export default ProductDetails