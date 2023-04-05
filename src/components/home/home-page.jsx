import Link from "next/link";
import Image from "next/image";
const homePage = ({data}) => {
    return (
        <div className="home_body" >
        {data.map((item) => (
          <Link className="card" href={`/events/${item.id}`} key={item.id} passHref>
            <div className="image">
            <Image src={item.image} width={300} height={300} alt={item.title} />
            </div>
            <div className="content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    );
}

export default homePage;

