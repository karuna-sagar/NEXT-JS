import { redirect } from "next/navigation"

export default function accountInfo() {
    const userProfile = null;
    if (userProfile === null) {
        redirect('products?search=product1')
    }
    return (

        <div><h1>this is accountInfo page</h1></div>
    )
}