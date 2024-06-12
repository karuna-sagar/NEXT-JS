async function singleUser(currentUserId) {
    try {
        const response = await fetch(`http://dummyjson.com/users/${currentUserId}`)
        const result = await response.json();
        return result
    }
    catch (e) {
        console.log(e)
    }
}
export default async function UserDetails({ params }) {
    const data = await singleUser(params.details)
    return <div>
        <h1>This is user detail page    </h1>
        <p>{data?.firstName} {data?.lastName}</p>
        <p>{data?.age}</p>
        <p>{data?.email}</p>
        <p>{data?.phone}</p>
        <p>{data?.birthDate}</p>
    </div>
}