import React from 'react'
import Image from 'next/image'
import mypic1 from '@/app/assests/picture.jpg'
import mypic2 from '@/app/assests/skillpic.jpg'

const About = () => {
  return (
    <div>
      <section className="bg-black text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Welcome to <span className="text-orange-500 font-semibold">BlogMN</span>! We are a team of passionate individuals dedicated to 
            sharing knowledge, ideas, and creativity. Our mission is to provide insightful articles, helpful tutorials, and inspiring 
            content for readers eager to learn and grow. From web development tips to innovative solutions, we strive to make technology 
            accessible and enjoyable for everyone. Join us on this journey as we explore, create, and inspire together!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition">
            Learn More
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-36">
        <div>
          <h1 className="text-3xl text-center font-bold">About Me</h1>
          <p className="ml-9 mt-7 text-lg">
            Hi, I&apos;m Mahnoor, a passionate UI developer with a love for creating
            visually appealing and user-friendly web experiences. With a background
            in web development and a keen eye for design, I focus on delivering
            pixel-perfect interfaces that engage users. This blog is a reflection of
            my interests and expertise, where I share insights on furniture, design
            trends, and the latest in the world of interiors. Whether you&apos;re here for
            inspiration or tips, I hope you find something that sparks your
            creativity!
          </p>
        </div>
        <div className="overflow-hidden">
          <Image
            src={mypic1}
            width={500}
            height={600}
            alt="pic"
            className="object-cover transform transition-transform duration-700 ease-out hover:scale-105 hover:-translate-y-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-24">
        <div className="overflow-hidden">
          <Image
            src={mypic2}
            alt="pic"
            height={500}
            width={500}
            className="object-cover ml-9 transform transition-transform duration-700 ease-out hover:scale-105 hover:-translate-y-2"
          />
        </div>
        <div>
          <h1 className="text-3xl text-center font-bold">Skills</h1>
          <p className="ml-8 mt-7 text-lg">
            &quot;I&apos;m a UI developer with a strong foundation in HTML, CSS, JavaScript, and
            TypeScript. My expertise lies in creating clean, responsive, and visually
            engaging web experiences. I am passionate about ensuring seamless
            interactions, focusing on accessibility, and following the latest web
            design trends. With a keen eye for detail, I aim to deliver user-friendly
            interfaces that are both functional and aesthetically pleasing.&quot;
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
