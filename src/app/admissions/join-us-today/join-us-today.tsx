// src/pages/admissions.tsx

export default function Admissions() {
    return (
      <section className="bg-gradient-to-br from-green-900 to-teal-900 text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us Today</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10">
            Welcome to the admissions page! We’re thrilled that you’re interested in joining our school community. Below, you'll find the steps to apply and some key information about our programs.
          </p>
          
          <div className="mt-10 space-y-8 text-left">
            <div className="bg-green-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Application Process</h3>
              <p className="text-sm text-gray-200">
                Start by filling out our application form. Ensure you have all the necessary documents ready for submission.
              </p>
            </div>
            
            <div className="bg-green-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Programs Offered</h3>
              <p className="text-sm text-gray-200">
                Explore a wide range of academic and extracurricular programs designed to foster growth and excellence.
              </p>
            </div>
            
            <div className="bg-green-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-200">
                Have questions? Reach out to our admissions team via email or phone for further assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  