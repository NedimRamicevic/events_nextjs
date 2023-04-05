import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CatEvent({ data, eventName}) {
  return (
    <div className='cat_events' >
      <h1>Events in {eventName} </h1>

      <div className='content'>
        {data.map((item) => (
          <Link className='card' key={item.id} href={`/events/${item.city}/${item.id}`} passHref>
            <Image src={item.image} width={300} height={300} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description} </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CatEvent