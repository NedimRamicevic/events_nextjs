// events page
import Link from "next/link";
import Image from "next/image";

const EventsPage = ({ data }) => {
    return (
        <div className="events_page" >
   
      {data.map((item) => (
        <Link className="card" href={`/events/${item.id}`} key={item.id} passHref>
          <Image src={item.image} width={500} height={500} alt={item.title} />
          <h2>{item.title}</h2>
        </Link>
      ))}
    </div>
    );
};

export default EventsPage;