import Link from "next/link";
import Image from "next/image";


const Header = () => (
    <header>
    <div>
    <div className="topNav" >
      <Image src="https://cdn-ph-org.worldtattoogallery.com/2020-001/artist--dani-ginzburg--gangster-girls-tattoo_21327120222.jpg" alt="logo" width={100} height={100} />
    <nav>
      <ul>
        <li>
          <Link href="/" passHref>
            Home  
          </Link>
        </li>
        <li>
          <Link href="/events" passHref>
            Events
          </Link>
        </li>
        <li>
          <Link href="/about-us" passHref>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
    </div>
    <h1>Next.js Events</h1>
    </div>
  </header>
)

export default Header;