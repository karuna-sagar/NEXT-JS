import { redirect } from "next/navigation"

export default function accountInfo() {
    const userProfile = null;
    if (userProfile === null) {
        redirect('profile')
    }
    return (

        <div><h1>this is accountInfo page</h1></div>
    )
}