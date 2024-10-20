import { useState, useEffect } from "react"
import React from 'react'

export default function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('/user.json')
            .then(res => {
                // console.log(res.json());
                if (!res.ok) {
                    throw new Error("Data fetching Error")
                }
                return res.json()
            }
                // console.log(res.json())
            )
            .then(data => {
                // console.log(data, "data");
                // console.log(user, 'user');
                return setUser(data)
            }

            )
            .catch((err) => console.log("Error:" + err));
    }, [])

    if (!user) { return <p> Loading.... </p> }
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col items-center">
                <img src={user.avatar} alt={user.name} className="w-32 h-32 rounded-full shadow-lg m-4" />
                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                <p className="text-gray-600 mb-2">{user.email}</p>
            </div>

        </div>
    )
}
