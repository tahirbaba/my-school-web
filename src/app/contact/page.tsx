"use client";

// src/app/contact/page.tsx

import React from "react";
import { useRouter } from "next/navigation";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const Contact = () => {
    const router = useRouter(); // Initialize router for navigation

    return (
        <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-12 px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                
                {/* Contact Info Section */}
                <div className="flex flex-col sm:flex-row justify-center gap-8 mb-6">
                    <div className="flex items-center gap-2 text-gray-700">
                        <MapPinIcon className="h-6 w-6 text-blue-500" />
                        <span>123 Main Street, Hometown, Country</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <PhoneIcon className="h-6 w-6 text-blue-500" />
                        <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                        <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                        <span>contact@example.com</span>
                    </div>
                </div>

                {/* Contact Form Section */}
                <form className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mt-6">
                    <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Path for icon */}
                        </svg>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Path for icon */}
                        </svg>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            {/* Path for icon */}
                        </svg>
                    </a>
                </div>

                {/* Go to Home Page Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => router.push("/")}
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Go to Home Page
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;


// // src/app/contact/page.tsx

// // src/app/contact/page.tsx

// import React from "react";
// import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"; // Corrected import path for Heroicons v2

// const Contact = () => {
//     return (
//         <div className="p-6 bg-gray-100 rounded-lg">
//             <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//             <div className="flex items-center mb-3">
//                 <MapPinIcon className="w-6 h-6 text-blue-500 mr-2" />
//                 <span>123 Main Street, Hometown, Country</span>
//             </div>
//             <div className="flex items-center mb-3">
//                 <PhoneIcon className="w-6 h-6 text-blue-500 mr-2" />
//                 <span>(123) 456-7890</span>
//             </div>
//             <div className="flex items-center mb-3">
//                 <EnvelopeIcon className="w-6 h-6 text-blue-500 mr-2" />
//                 <span>contact@example.com</span>
//             </div>
//         </div>
//     );
// };

// export default Contact;

// import React from "react";
// // @ts-ignore
// import { PhoneIcon, MailIcon, LocationMarkerIcon } from "@heroicons/react";

// const Contact = () => {
//     return (
//         <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-8">
//             <div className="max-w-4xl mx-auto text-center">
//                 <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
//                 <p className="text-lg text-gray-700 mb-12">
//                     Have any questions? We’re here to help! Reach out to us through the form or using the contact details below.
//                 </p>

//                 {/* Contact Info */}
//                 <div className="flex justify-center gap-8 mb-12">
//                     <div className="flex items-center gap-2 text-gray-700">
//                         <PhoneIcon className="h-6 w-6 text-blue-500" />
//                         <span>(123) 456-7890</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-700">
//                         <MailIcon className="h-6 w-6 text-blue-500" />
//                         <span>info@yourschool.com</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-700">
//                         <LocationMarkerIcon className="h-6 w-6 text-blue-500" />
//                         <span>123 School St, City, Country</span>
//                     </div>
//                 </div>

//                 {/* Contact Form */}
//                 <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                         {/* Name Field */}
//                         <div>
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                                 Name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 className="shadow-sm border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300"
//                                 placeholder="Your name"
//                                 required
//                             />
//                         </div>

//                         {/* Email Field */}
//                         <div>
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 className="shadow-sm border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300"
//                                 placeholder="Your email address"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Message Field */}
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//                             Message
//                         </label>
//                         <textarea
//                             id="message"
//                             rows={4}
//                             className="shadow-sm border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300"
//                             placeholder="Your message"
//                             required
//                         ></textarea>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="text-center">
//                         <button
//                             type="submit"
//                             className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-transform transform hover:scale-105"
//                         >
//                             Send Message
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section>
//     );
// }

// export default Contact;



// "use client"

// import React from "react";
// import Link from "next/link";
// import {useRouter} from "next/navigation"

// const contact = () => {
//     const router = useRouter();
//     return (
//         <div>
//         <h1> Contact Page </h1>
//         <Link href="/"> Go to Home Page </Link>
//         <br />
//         <button onClick={()=>router.push("/")}> Go to Home Page Button </button>
//         </div>
//     )
// }

// export default contact