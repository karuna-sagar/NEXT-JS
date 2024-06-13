import Link from "next/link";

export default function notFound() {
    return (
        <div>
            <h1>This page can not found</h1>
            <Link href={"/"}>Go to Home Page</Link>
        </div>
    );
}
