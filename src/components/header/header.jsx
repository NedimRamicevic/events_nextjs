import Link from "next/link";


const Header = () => (
    <header>
    <nav>
      <Link href="/" passHref>
        Home
      </Link>
      <Link href="/events" passHref>
        Events
      </Link>
      <Link href="/about-us" passHref>
        About Us
      </Link>
    </nav>
  </header>
)

export default Header;