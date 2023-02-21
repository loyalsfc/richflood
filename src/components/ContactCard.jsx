import React from 'react'

function ContactCard({city, address, tel}) {
    return (
        <article className='mb-5'>
            <h4 className='font-medium text-lg'>{city}</h4>
            <p>{address}</p>
            <p className='underline'>Send An Email</p>
            <p>{tel}</p>
        </article>
    )
}

export default ContactCard
