import React from 'react'
import Image from 'next/image'

function EventCard({ event}) {
  return (
    <div className='event_card' >
      <Image src={event.image} width={400} height={400} alt={event.title} />
      <h1>{event.city}</h1>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <input type="email" placeholder="Enter your email" /><button>Submit</button>
    </div>
  )
}

export default EventCard