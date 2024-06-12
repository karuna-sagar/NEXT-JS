import Link from "next/link";

async function listOfUsers() {
    try {
        const response = await fetch('http://dummyjson.com/users')
        const result = await response.json();
        return result.users
    }
    catch (err) {
        console.log(err)
    }
}

export default async function ServerSideFetching() {
    const listOfUser = await listOfUsers();
    // console.log(listOfUser)
    return (
        <div className="p-10">
            <h1>This is server side Rendering</h1>
            <ul>
                {listOfUser && listOfUser.length > 0 ? listOfUser.map(user => <li className="mt-5 cursor-pointer"> <Link href={`/server-side-fetch/${user.id}`} > {user.firstName}</Link></li>) : null}
            </ul>
        </div>
    )
}