"use client"
import React, { useState } from 'react';

// Define types for form data and error state
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required!');
      return;
    }

    // Reset error if form is valid
    setError('');

    // Here you can handle the form submission (e.g., send data to an API)
    alert('Form submitted! We will get in touch with you soon.');

    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Header Section */}
      <div className='bg-gradient-to-r from-black to-[#1a1a1a] h-96 flex items-center justify-center'>
        <div className="text-center">
          <h1 className='font-bold text-white text-5xl drop-shadow-lg'>Contact</h1>
          <p className='text-white text-lg px-6 mt-4 leading-relaxed'>
            &quot;Have questions, suggestions, or a project in mind? We&rsquo;d love to hear from you! Feel free to reach out via the form below, or drop us an email. Whether it&rsquo;s feedback, collaboration opportunities, or just a hello, we&rsquo;re here to connect and assist. Let&rsquo;s work together to bring your ideas to life!&quot;
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 rounded-md"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  Our Studio
                </h2>
                <p className="mt-1">
                  Elegant Decor Studio, Portland – Where inspiration meets style.
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">mahno9248@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-4 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              We Value Your Thoughts
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Share your feedback with us! Let us know how our decor ideas inspired your space. Your input helps us improve and bring you even better ideas.
            </p>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#da7509] focus:ring-2 focus:ring-[#da7509] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out hover:shadow-md"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#da7509] focus:ring-2 focus:ring-[#da7509] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out hover:shadow-md"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#da7509] focus:ring-2 focus:ring-[#da7509] h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out hover:shadow-md"
                />
              </div>
              <button type="submit" className="text-white bg-[#da7509] border-0 py-2 px-6 focus:outline-none hover:bg-[#da7509d6] hover:scale-105 rounded text-lg w-full transition-transform duration-200">
                Submit
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
