"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from 'next/image';

const Services = () => {
    const router = useRouter();
    return (
        <section className="bg-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Services</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Service 1: Schooling Study */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Priority </h3>
                        <p className="text-gray-600 mb-4">
                            Our comprehensive schooling curriculum ensures a strong academic foundation for all students.
                        </p>
                        <Image
                            src="/images/schooling-study.jpg" // Replace with your image path
                            alt="Schooling Study"
                            width={300}
                            height={200}
                            className="rounded-lg shadow-md mx-auto"
                        />
                    </div>

                    {/* Service 2: AC Classes */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">AC Classes</h3>
                        <p className="text-gray-600 mb-4">
                            Enjoy a comfortable learning environment with our air-conditioned classrooms.
                        </p>
                        <Image
                            src="/images/ac-classes.jpg" // Replace with your image path
                            alt="AC Classes"
                            width={300}
                            height={200}
                            className="rounded-lg shadow-md mx-auto"
                        />
                    </div>

                    {/* Service 3: Development Skills */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Development Skills</h3>
                        <p className="text-gray-600 mb-4">
                            We provide hands-on training to develop essential skills for personal and professional growth.
                        </p>
                        <Image
                            src="/images/development-skills.jpg" // Replace with your image path
                            alt="Development Skills"
                            width={300}
                            height={200}
                            className="rounded-lg shadow-md mx-auto"
                        />
                    </div>

                    {/* Service 4: Computer Lab */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Computer Lab</h3>
                        <p className="text-gray-600 mb-4">
                            Our state-of-the-art computer lab is equipped with the latest technology for hands-on learning.
                        </p>
                        <Image
                            src="/images/computer-lab.jpg" // Replace with your image path
                            alt="Computer Lab"
                            width={300}
                            height={200}
                            className="rounded-lg shadow-md mx-auto"
                        />
                    </div>

                    {/* Service 5: Nazra Quran */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Nazra Quran</h3>
                        <p className="text-gray-600 mb-4">
                            We offer dedicated classes for learning Nazra Quran, focusing on proper recitation.
                        </p>
                        <Image
                            src="/images/nazra-quran.jpg" // Replace with your image path
                            alt="Nazra Quran"
                            width={300}
                            height={200}
                            className="rounded-lg shadow-md mx-auto"
                        />
                    </div>

                    {/* Service 6: Hifz Quran */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hifz Quran</h3>
                        <p className="text-gray-600 mb-4">
                            Our Hifz Quran program is designed to help students memorize the Quran with proper tajweed.
                        </p>
                        <Image
                            src="/images/hifz-quran.jpg" // Replace with your image path
                            alt="Hifz Quran"
                            width={300}
                            height={200}
                            className="rounded-lg shadow-md mx-auto"
                        />
                    </div>
                </div>

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
}

export default Services;
