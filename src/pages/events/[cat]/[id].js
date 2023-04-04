import Image from "next/image";
function EventPage({ event }) {
  console.log(event);
  return (
    <div>
      <Image src={event.image} width={400} height={400} alt={event.title} />
      <h1>{event.city}</h1>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </div>
  );
}
export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => ({
    params: { cat: path.city.toString(), id: path.id.toString() },
  }));
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { cat, id } = context?.params;
  const { allEvents } = await import("/data/data.json");
  const event = allEvents.find(
    (event) => event.city === cat && event.id === id
  );
  return {
    props: {
      event,
    },
  };
}
