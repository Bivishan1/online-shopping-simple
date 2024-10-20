import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate('./profile');
    }

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='container mx-auto p-4'>
            <h1 className="text-3xl font-bold text-center mb-6">
                Online Shopping
            </h1>
            <button onClick={goToProfile} className="bg-green-600 py-2 px-4 text-white hover:bg-green-600 transition">Go To Profile</button>
            <div className="grid grid-cols:1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) =>
                    <div key={product.id} className='border p-4 rounded shadow hover:shadow-lg transition'>
                        <img src={product.image} alt={product.title} className='h-48 w-full object-cover mb-4' />
                        <h2 className="text-xl font-bold mb-2"> {product.title}</h2>
                        <p className="text-yellow-500">Rating: {product.rating}</p>
                        <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
                            View Details</Link>
                    </div>
                )}
            </div>
        </div >
    )
}
