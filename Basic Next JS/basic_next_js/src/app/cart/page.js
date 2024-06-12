'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Cart() {
    const pathName = usePathname()
    console.log(pathName)
    const searchParams = useSearchParams()
    console.log(searchParams.get('search'), searchParams.get('randomValue'))
    return <div><h1>this is the cart page</h1></div>
}