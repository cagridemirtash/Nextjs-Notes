import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>Emin bu ilk postun</h1>
      <h2>
        <Link href="/">Go to MainPage</Link>
      </h2>
    </>
  );
}
