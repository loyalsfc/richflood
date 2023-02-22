import React from 'react'
import ContactCard from '../components/ContactCard'

function Contact() {
    return (
        <main>
            <div className="max-w-5xl mx-auto">
                <div className='grid grid-cols-2'>
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
                            city="United States"
                            address='416192 Coastal Hwy, Lewes, DE, USA'
                        />
                        <ContactCard
                            city='United Kingdom'
                            address="71-75 Shelton Street, Covent Garden, London, WC2H 9JQ"
                        />
                        <a href='mailto:info@richflood.com' className='text-2xl font-semibold text-textColor'>Get in touch; info@richflood.com</a>
                    </article>
                </div>
            </div>
        </main>
    )
}

export default Contact
