import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Stol from '../components/Stol'

function About() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => setUsers(res.data))
    })
    return (
        users.map((user) => {
            return (
                    <div className='divv'>
                        <Stol user={user} />
                    </div>
            )
        })
    )
}

export default About