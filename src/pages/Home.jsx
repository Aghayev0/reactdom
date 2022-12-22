import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Kvad from '../components/Kvad';

function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => setProducts(res.data))
    })
    return (
        products.map((product) => {
            return (
                <div className='div'>
                    <Kvad product={product}/>
                </div>
            )
        })
    )
}

export default Home