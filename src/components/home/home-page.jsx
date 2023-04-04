import Link from "next/link";
import Image from "next/image";
const homePage = ({data}) => {
    return (
        <main >
        {data.map((item) => (
          <Link href={`/events/${item.id}`} key={item.id} passHref>
            <Image src={item.image} width={170} height={100} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </Link>
        ))}
      </main>
    );
}

export default homePage;

