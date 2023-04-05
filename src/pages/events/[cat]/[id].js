import Image from "next/image";
import EventCard from "../../../components/events/eventCard";

function EventPage({ event }) {
  return <EventCard event={event} />;
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
