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
                            city="United States"
                            address='416192 Coastal Hwy, Lewes, DE, USA'
                        />
                        <ContactCard
                            city='United Kingdom'
                            address="71-75 Shelton Street, Covent Garden, London, WC2H 9JQ"
                        />
                        <a href='mailto:info@greenalluvia.com' className='text-2xl font-semibold text-textColor'>Get in touch; info@greenalluvia.com</a>
                    </article>
                    <article>
                        <h4 className="text-3xl font-bold">Head Office</h4>
                        <p><span className="font-medium">Abuja, Nigeria;</span> 4 Justice Chukwudifo Oputa Street, Asokoro.</p>
                        <p className='my-8'><span className="font-medium">Lagos, Nigeria ;</span> 6 Chevron Drive, Lekki.</p>
                        <a href="mailto:greenalluvia@gmail.com" className='underline'>Send an Email</a>
                        <p className='underline'>Tel: +234 814 524 5247</p>
                        <p>Office: +44 78 97 073559</p>
                        <ContactCard
                            city="West Africa"
                            address="H140 Forest Avenue, Accra, Ghana."
                        />
                        <div className="my-8" />
                        <ContactCard
                            city="East Africa"
                            address="Plot No. 6418, Avenue Du Commerce
                            Kigali, Rwanda"
                        />
                        <ContactCard 
                            city="South Africa"
                            address="22 Wellingthon Road, Parktown, 2193 South Africa."
                        />
                        <ContactCard 
                            city="North Africa"
                            address="Masaken Sheraton, 11799 Cairo, Egypt."
                        />
                        <ContactCard 
                            city="Central Africa"
                            address="DR Congo."
                        />
                    </article>
                </div>
            </div>
        </main>
    )
}

export default Contact
