"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white flex flex-col">
      {/* Navbar */}
      <header className="bg-blue-800 shadow-lg py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Our School</h1>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => router.push("/home")}
              className="hover:text-gray-300 transition duration-200"
            >
              Home
            </button>
            <button
              onClick={() => router.push("/about")}
              className="hover:text-gray-300 transition duration-200"
            >
              About
            </button>
            <button
              onClick={() => router.push("/services")}
              className="hover:text-gray-300 transition duration-200"
            >
              Services
            </button>
            <button
              onClick={() => router.push("/admissions")}
              className="hover:text-gray-300 transition duration-200"
            >
              Admissions
            </button>
            <button
              onClick={() => router.push("/academics")}
              className="hover:text-gray-300 transition duration-200"
            >
              Academics
            </button>
            <button
              onClick={() => router.push("/events")}
              className="hover:text-gray-300 transition duration-200"
            >
              Events
            </button>
            <button
              onClick={() => router.push("/faculty")}
              className="hover:text-gray-300 transition duration-200"
            >
              Faculty
            </button>
            <button
              onClick={() => router.push("/news")}
              className="hover:text-gray-300 transition duration-200"
            >
              News
            </button>
            <button
              onClick={() => router.push("/gallery")}
              className="hover:text-gray-300 transition duration-200"
            >
              Gallery
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="hover:text-gray-300 transition duration-200"
            >
              Contact
            </button>
          </nav>
          <button className="md:hidden bg-blue-700 px-4 py-2 rounded">Menu</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to Our School</h2>
        <p className="text-lg max-w-2xl mb-10">
          Discover a place of learning, exploration, and growth. Explore our wide range of programs and join our vibrant school community.
        </p>
        <button
          onClick={() => router.push("/admissions")}
          className="bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          Start Your Journey
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 py-4">
        <div className="container mx-auto text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Our School. All rights reserved.
        </div>
      </footer>
    </div>
  );
}








// import React from 'react';

// export default function Page() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-blue-500 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
//           <p className="mt-4">A little about myself and what I do.</p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="bg-gray-100 py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
//           <p className="mt-4 text-gray-600">
//             I am a passionate web developer with experience in building dynamic and responsive websites...
//           </p>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//             {/* Project 1 */}
//             <div className="bg-gray-200 p-6 rounded-lg">
//               <h3 className="text-2xl font-semibold">Project One</h3>
//               <p className="mt-2">Description of project one goes here.</p>
//             </div>
//             {/* Add more projects as needed */}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="bg-gray-100 py-20">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-semibold text-gray-800">Skills</h2>
//           <ul className="list-disc mt-4 ml-6 text-gray-600">
//             <li>JavaScript</li>
//             <li>React</li>
//             <li>Next.js</li>
//             <li>Tailwind CSS</li>
//             {/* Add more skills as needed */}
//           </ul>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="bg-blue-500 text-white py-20">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-semibold">Contact Me</h2>
//           <p className="mt-4">Feel free to reach out to discuss potential opportunities or collaborations.</p>
//           <button className="mt-6 bg-white text-blue-500 py-2 px-4 rounded">
//             Send a Message
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }



















// "use client";

// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">
//         Welcome to Our School Website
//       </h1>

//       <nav className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
//         <button
//           onClick={() => router.push("/about")}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
//         >
//           Go to About Page
//         </button>

//         <button
//           onClick={() => router.push("/services")}
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
//         >
//           Go to Service Page
//         </button>

//         <button
//           onClick={() => router.push("/contact")}
//           className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-200"
//         >
//           Go to Contact Page
//         </button>

//         <button
//           onClick={() => router.push("/home")}
//           className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200"
//         >
//           Go to Home Page
//         </button>

//         <button
//           onClick={() => router.push("/admissions")}
//           className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200"
//         >
//           Go to Admissions Page
//         </button>

//         <button
//           onClick={() => router.push("/academics")}
//           className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200"
//         >
//           Go to Academics Page
//         </button>

//         <button
//           onClick={() => router.push("/events")}
//           className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-200"
//         >
//           Go to Events Page
//         </button>

//         <button
//           onClick={() => router.push("/faculty")}
//           className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-200"
//         >
//           Go to Faculty Page
//         </button>

//         <button
//           onClick={() => router.push("/news")}
//           className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-200"
//         >
//           Go to News Page
//         </button>

//         <button
//           onClick={() => router.push("/gallery")}
//           className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
//         >
//           Go to Gallery Page
//         </button>
//       </nav>
//     </div>
//   );
// }
















// "use client"

// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();
  
//   return (
//     <div>
//       <h1>Welcome to Our School Website</h1>
//       <br />
      
//       <button onClick={() => router.push("/about")}>Go to About Page</button>
//       <br />
      
//       <button onClick={() => router.push("/services")}>Go to Service Page</button>
//       <br />
      
//       <button onClick={() => router.push("/contact")}>Go to Contact Page</button>
//       <br />
      
//       <button onClick={() => router.push("/home")}>Go to Home Page</button>
//       <br />

//       <button onClick={() => router.push("/admissions")}>Go to Admissions Page</button>
//       <br />
      
//       <button onClick={() => router.push("/academics")}>Go to Academics Page</button>
//       <br />
      
//       <button onClick={() => router.push("/events")}>Go to Events Page</button>
//       <br />
      
//       <button onClick={() => router.push("/faculty")}>Go to Faculty Page</button>
//       <br />
      
//       <button onClick={() => router.push("/news")}>Go to News Page</button>
//       <br />

//       <button onClick={() => router.push("/gallery")}>Go to Gallery Page</button>
//     </div>
//   );
// }











// "use client"

// import Image from "next/image";
// import Link from "next/link";
// import {useRouter} from "next/navigation"

// export default function Home() {
//   const router = useRouter();
//   return (
//     <div>
//       <br />
//       <button onClick={()=>router.push("/about")}> Go to About Page </button>
//       <br />
//       <button onClick={()=>router.push("/services")}> Go to Service Page </button>
//       <br />
//       <button onClick={()=>router.push("/contact")}> Go to Contact Page </button>
//       <br />
//       <button onClick={()=>router.push("/home")}> Go to Home Page </button>
//     </div>
//   );
// }
