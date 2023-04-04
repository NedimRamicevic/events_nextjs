// events page
import Link from "next/link";
import Image from "next/image";

const EventsPage = ({ data }) => {
    return (
        <div>
      <h1>Events Page</h1>
      {data.map((item) => (
        <Link href={`/events/${item.id}`} key={item.id} passHref>
          <Image src={item.image} width={170} height={170} alt={item.title} />
          <h2>{item.title}</h2>
        </Link>
      ))}
    </div>
    );
};

export default EventsPage;