import Link from "next/link";

export default function SecondPost() {
  return (
    <>
      <h1>This is my Second Post from Cagri</h1>
      <h2>
        <Link href="/">Go to MainPage</Link>
      </h2>
      <h3>
        This links go to <Link href="/posts/first-post">First Post</Link>
      </h3>
    </>
  );
}
