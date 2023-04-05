import Image from "next/image";
import Link from "next/link";
import CatEvent from "../../../components/events/catEvent";

function EventsCatPage({ data, eventName }) {
  return <CatEvent data={data} eventName={eventName} />;
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
