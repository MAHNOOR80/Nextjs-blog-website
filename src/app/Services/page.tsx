import React from 'react'

const Services = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-black h-96 pt-20">
        <h1 className="font-bold text-white text-5xl text-center mr-10 p-12">Services</h1>
        <div>
          <p className="text-white text-lg text-center px-4 leading-relaxed mx-auto max-w-screen-lg">
            &quot;We&rsquo;re committed to providing valuable insights and resources to help you excel in your journey. Whether you&rsquo;re looking for expert tips, creative ideas, or step-by-step guides, our blog delivers high-quality resources. Explore our services, including personalized consultations, project reviews, and skill-building resources designed to empower you in achieving your goals. Let us be your partner in success!&quot;
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col mt-12">
        <h2 className="text-xl text-[#da7509] font-semibold text-center px-4 leading-relaxed mx-auto max-w-screen-lg">Our Services</h2>
        <h1 className="font-bold text-3xl text-center text-gray-800 px-4 leading-relaxed mx-auto max-w-screen-lg mb-8">What We Offer</h1>
        <p className="font-serif text-2xl text-gray-800 text-center px-4 leading-relaxed mx-auto max-w-screen-lg mb-12">
          We offer a diverse selection of stylish and durable furniture designed to elevate your living and working spaces. From modern sofas to functional office pieces, our collection combines comfort, quality, and timeless design.
        </p>
      </div>

      {/* Service Cards Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Service Card 1 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-gray-50 bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#ff942269] text-[#da7509] mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Interior Revamp</h2>
                <p className="leading-relaxed text-base">Breathe new life into your home with expert tips and designs for transforming spaces into stylish and cozy retreats.</p>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-gray-50 bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#ff942269] text-[#da7509] mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx={6} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Dining Elegance</h2>
                <p className="leading-relaxed text-base">Elevate your dining experience with creative table settings, elegant cutlery ideas, and personalized decor touches.</p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-gray-50 bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#ff942269] text-[#da7509] mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Seasonal Decor</h2>
                <p className="leading-relaxed text-base">Stay trendy with curated seasonal themes designed to match every celebration, mood, or festivity.</p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-gray-50 bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#ff942269] text-[#da7509] mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Space Optimization</h2>
                <p className="leading-relaxed text-base">Make the most of your home with layout suggestions and clever storage tips for better organization.</p>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-gray-50 bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#ff942269] text-[#da7509] mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Lighting Magic</h2>
                <p className="leading-relaxed text-base">Add warmth and sophistication to your spaces with expert advice on lighting design and placement.</p>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:bg-gray-50 bg-white">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[#ff942269] text-[#da7509] mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Custom Themes</h2>
                <p className="leading-relaxed text-base">Discover unique decor themes like rustic charm or modern minimalism to suit your personal style.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
