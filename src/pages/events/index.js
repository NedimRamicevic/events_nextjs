// events main page
import Image from "next/image";
import Link from "next/link";
import Events from "../../components/Events";

function EventsPage({ data }) {
  return <Events data={data} />;
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
