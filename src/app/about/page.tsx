"use client";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Our School</h2>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Our school is dedicated to providing a nurturing and inclusive environment where every student can thrive academically and personally. We emphasize a holistic approach to education, fostering curiosity, creativity, and character.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Our Mission */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-left">
            <img
              src="/images/mission.jpg" // Replace with actual image path
              alt="Our Mission"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-sm text-gray-300">
              To empower students with the knowledge, skills, and values needed to succeed in a rapidly changing world.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-left">
            <img
              src="/images/vision.jpg" // Replace with actual image path
              alt="Our Vision"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-sm text-gray-300">
              To be a model of educational excellence, inspiring students to realize their full potential and make meaningful contributions to society.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-left">
            <img
              src="/images/values.jpg" // Replace with actual image path
              alt="Core Values"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Core Values</h3>
            <p className="text-sm text-gray-300">
              Integrity, Respect, and Responsibility are at the heart of everything we do, guiding students towards lifelong learning and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}













// "use client";

// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import Image from 'next/image';

// const About = () => {
//     const router = useRouter();

//     return (
//         <div className="bg-gray-100 py-16 px-8">
//             <div className="max-w-4xl mx-auto text-center">
//             <section className="about">
//     <h1 className="text-3xl font-bold mb-4">About Us</h1>
//     <p className="text-lg mb-4 size-text 100px" >
//         At Litlle Scholar Islamic School, we strive for excellence in education, empowering students to achieve their fullest potential. Our dedicated staff and rigorous curriculum inspire a passion for learning and foster integrity. Join us in shaping future leaders who are prepared to excel in a competitive world.
//     </p>
// </section>
//                 <Image
// src="/images/Little_Scholar_Islamic_School_Logo.jpg"  // or the exact name you used
//     alt="About Us"
//     width={400}
//     height={300}
//     className="rounded-lg shadow-md mx-auto mb-6"
// />

//                 <br />
//                 <button
//                     onClick={() => router.push("/")}
//                     className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
//                 >
//                     Go to Home Page
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default About;
