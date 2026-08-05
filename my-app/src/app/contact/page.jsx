import React from 'react'
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <div className='w-10/12 flex flex-col gap-5'>
                <h1 className='text-4xl font-bold'>Contact Us</h1>
                <p className='text-gray-600 w-1/2 '>Have a question, need support, or want to visit in personal? Here's how to reach <strong>MINICHRT</strong>.</p>
            </div>
            <div className='container flex flex-row gap-6 mt-4'>
                <div className='w-1/2 flex flex-col gap-4 pr-7'>
                    <div className="bg-gray-200 rounded-xl p-4 flex gap-4">
                        <FaMapMarkerAlt size={24} className="text-black mt-2" />
                        <div>
                            <h3 className="font-bold text-lg">Store Address</h3>
                            <p className="text-gray-600">
                                Blue Area, Jinnah Avenue, Islamabad, Pakistan
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-xl p-4 flex gap-4">
                        <FaPhoneAlt size={20} className="text-black mt-2" />
                        <div>
                            <h3 className="font-bold text-lg">Phone</h3>
                            <p className="text-gray-600">+92 304 5836804</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-xl p-4 flex gap-4">
                        <FaEnvelope size={20} className="text-black mt-2" />
                        <div>
                            <h3 className="font-bold text-lg">Email</h3>
                            <p className="text-gray-600">support@minicart.com</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-xl p-4 flex gap-4">
                        <FaClock size={20} className="text-black mt-2" />
                        <div>
                            <h3 className="font-bold text-lg">Store Hours</h3>
                            <p className="text-gray-600">Mon - Sat: 10:00 AM - 9:00 PM</p>
                        </div>
                    </div>



















































                </div>
                <div className='w-1/2'>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default Contact
