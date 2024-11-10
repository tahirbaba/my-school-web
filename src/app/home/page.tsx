"use client";

import { useRouter } from "next/navigation";

export default function HomeSection() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Welcome to Our School</h2>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Our school is a place of inspiration and growth, where students are encouraged to explore, innovate, and achieve excellence. We foster a supportive environment that nurtures every learner's unique potential.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {/* Academic Excellence */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Academic Excellence</h3>
            <p className="text-sm text-gray-200">
              With a rich curriculum and skilled faculty, our school provides students with the tools they need to excel academically.
            </p>
          </div>

          {/* Holistic Development */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Holistic Development</h3>
            <p className="text-sm text-gray-200">
              We focus on developing well-rounded individuals, emphasizing social, emotional, and physical growth alongside academics.
            </p>
          </div>

          {/* Innovation and Creativity */}
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Innovation & Creativity</h3>
            <p className="text-sm text-gray-200">
              Through various programs, students are encouraged to think creatively, embrace innovation, and cultivate a love for learning.
            </p>
          </div>
        </div>

        <button
          onClick={() => router.push("/admissions")}
          className="mt-12 bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          Join Us Today
        </button>
      </div>
    </section>
  );
}
