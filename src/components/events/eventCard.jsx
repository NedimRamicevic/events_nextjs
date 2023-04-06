import React,{useRef,useState} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

function EventCard({ event}) {
  const inputEmail = useRef()
  const router = useRouter()
  const onSubmit =async (e) => {
    e.preventDefault()
    const emailValue  = inputEmail.current.value
    const eventId = router?.query.id;
    try {
      const response = await fetch('/api/email-registeration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email:emailValue , eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log('ERROR', e);
    }
  }
  return (
    <div className='event_card' >
      <Image src={event.image} width={400} height={400} alt={event.title} />
      <h1>{event.city}</h1>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <form onSubmit={onSubmit} className="email_registeration">
        <label> Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  )
} 

export default EventCard

