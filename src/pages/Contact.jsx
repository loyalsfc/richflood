import React from 'react'
import ContactCard from '../components/ContactCard'
import map from '../assets/maps.png'

function Contact() {
    return (
        <main className='bg-white'>
            <div className="max-w-5xl mx-auto px-4">
                <a className='block mb-8' href='https://maps.app.goo.gl/RbEvtWvUa4QDccCA6'>
                    <img src={map} alt='map' />
                </a>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-28'>
                    <article>
                        <h3 className='text-2xl font-bold'>Inquiries</h3>
                        <p className='mb-6'>Please fill Out the following form</p>
                        <form action="">
                            <select name="" className='form-input' id="">
                                <option value="">Inquiry Type</option>
                                <option value="">Requestion Quotation and Consultancy</option>
                                <option value="">Book 30-60 minutes consultation</option>
                                <option value="">Request Laboratory Testing</option>
                                <option value="">Request Laboratory Instruments</option>
                                <option value="">Request Training Internship/Job</option>
                                <option value="">Provide Feedback</option>
                            </select>
                            <input type="text" className='form-input' placeholder='Name' />
                            <input type="email" className='form-input' placeholder='Email' />
                            <input type="text" className='form-input' placeholder='Subject'/>
                            <textarea name="" id="" className='form-input' placeholder='Message' cols="" rows="5"/>
                            <button className='block ml-auto font-bold text-white bg-green-600  hover:bg-green-800 transition-all py-2 px-8'>Submit</button>
                        </form>
                        <ContactCard
                            city="Lorem Ipsum"
                            address='Lorem, 355, ameno bula corngh'
                        />
                        <ContactCard
                            city='Lorem Ipsum'
                            address="Lorem, 355, ameno bula corngh"
                        />
                        <a href='mailto:info@greenalluvia.com' className='text-2xl font-semibold text-textColor'>Get in touch; info@greenalluvia.com</a>
                    </article>
                    <article>
                        <h4 className="text-3xl font-bold">Head Office</h4>
                        <p><span className="font-medium">Ipsum, Manomi;</span> 4 Lorem ipsum dolor sit, amet consectetur adipisicing .</p>
                        <p className='my-8'><span className="font-medium">Imuson, Lorem ;</span> 6 laborum numquam.</p>
                        <a href="mailto:greenalluvia@gmail.com" className='underline'>Send an Email</a>
                        <p className='underline'>Tel: +234 814 123 4567</p>
                        <p className='mb-2'>Office: +44 12 34 567890</p>
                        <ContactCard
                            city="Lorem Ipsum"
                            address="Lorem, 355, ameno bula corngh"
                        />
                        <div className="my-8" />
                        <ContactCard
                            city="Lorem Ipsum"
                            address="Lorem, 355, ameno bula cornghe"
                        />
                        <ContactCard 
                            city="Lorem Ipsum"
                            address="22 Ameno doretus Ipsum lorem labudjd."
                        />
                        <ContactCard 
                            city="Lorem Ipsum"
                            address="Lorem, 355, ameno bula corngh"
                        />
                        <ContactCard 
                            city="Lorem Ipsum"
                            address="Lorem, 355, ameno bula corngh"
                        />
                    </article>
                </div>
            </div>
        </main>
    )
}

export default Contact
