import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      Welcome to learn next js
      <Link href={'products'}>Navigate to product page</Link>
    </main>
  );
}
