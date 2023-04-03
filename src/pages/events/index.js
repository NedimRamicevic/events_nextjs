// events main page
import Image from "next/image";

function EventsPage({ data }) {
  return (
    <div>
      <h1>Events Page</h1>
      {data.map((item) => (
        <a href={`/events/${item.id}`} key={item.id}>
          <Image src={item.image} width={170} height={170} alt={item.title} />
          <h2>{item.title}</h2>
        </a>
      ))}
    </div>
  );
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("../../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
