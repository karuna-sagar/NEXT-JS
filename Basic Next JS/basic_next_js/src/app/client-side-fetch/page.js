'use client'

import Link from "next/link"
import { useEffect, useState } from "react"



export default function ClientSideFetching() {

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    async function fetchListOfUsers() {
        try {
            setLoading(true)
            const response = await fetch('http://dummyjson.com/users')
            const data = await response.json();
            if (data?.users) {
                setUsers(data?.users);
                setLoading(false)
            }
        }
        catch (err) {
            console.log(err)
            setUsers([])
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchListOfUsers()
    }, [])
    if (loading) {
        return (
            <h3 className="font-extrabold text-3xl">Loading users! Please Wait</h3>
        )
    }
    return <div className="p-10">
        <h1>This is client side Rendering</h1>
        <ul>
            {users && users.length > 0 ? users.map(user => <li className="mt-5 cursor-pointer"> <Link href={`/server-side-fetch/${user.id}`} > {user.firstName}</Link></li>) : null}
        </ul>
    </div>
}