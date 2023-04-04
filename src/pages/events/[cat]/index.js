import Image from "next/image";
import Link from "next/link";

function EventsCatPage({ data, eventName }) {
  return (
    <div>
      <h1>Events in {eventName} </h1>

      <ul>
        {data.map((item) => (
          <Link key={item.id} href={`/events/${item.city}/${item.id}`} passHref>
            <Image src={item.image} width={200} height={200} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description} </p>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((item) => ({
    params: { cat: item.id.toString() },
  }));
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((event) => event.city === id);
  console.log(data);
  return {
    props: {
      data,
      eventName: id,
    },
  };
}
