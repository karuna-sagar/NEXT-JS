'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  function handleNavigate() {
    router.push('products')
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Welcome to learn next js
      <Link href={'products'}>Navigate to product page</Link>
      <Link href={'account'}>Navigate to Account  page</Link>

      <h2 className="font-bold mt-3 text-lg"> Alternate way to navigate to the page </h2>
      <button onClick={handleNavigate}>Navigate to product page using router</button>
    </main>
  );
}
