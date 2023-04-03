import Image from "next/image";

function EventsCatPage({ data }) {
  return (
    <div>
      <h1>Events in {data[0].city} </h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <a href={`/events/${item.city}/${item.id}`}>
              <Image
                src={item.image}
                width={200}
                height={200}
                alt={item.title}
              />
              <h2>{item.title}</h2>
            </a>
          </li>
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
      data: data,
    },
  };
}
