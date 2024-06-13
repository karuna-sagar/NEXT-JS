import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is the recipe page</h1>
      <Link href={'/recipe-list'}>Explore Recipe</Link>
    </div>
  );
}
