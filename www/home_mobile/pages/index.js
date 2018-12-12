import Link from "next/link";
import Header from "../components/header";

export default () => (
  <main>
    <Header />
    <section>
      <Link href="/m/about">
        <a>Go to About Me</a>
      </Link>
    </section>
  </main>
);
