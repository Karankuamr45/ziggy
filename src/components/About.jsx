import React from 'react';
import Footer from './Footer';

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to our amazing company. Learn more about who we are and what
            we do!
          </p>
        </div>
      </header>

      {/* Mission and Vision */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 px-2">Our Mission</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat
                nisl magna.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 px-2">Our Vision</h2>
              <p className="text-gray-700">
                Nullam feugiat, turpis at pulvinar vulputate, erat libero
                tristique tellus, nec bibendum odio risus sit amet ante.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 ">
            <div>
              <h2 className="text-3xl font-bold mb-4 px-2">Our Products</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat
                nisl magna.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 px-2">Our Policy</h2>
              <p className="text-gray-700">
                Nullam feugiat, turpis at pulvinar vulputate, erat libero
                tristique tellus, nec bibendum odio risus sit amet ante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Repeat this block for each team member */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://i.pinimg.com/originals/8e/d4/04/8ed4040e06e68818a07c3e15ac7c18dc.jpg"
                alt="Team Member"
                className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://www.shutterstock.com/shutterstock/photos/2320286455/display_1500/stock-vector-young-man-anime-style-character-vector-illustration-design-face-young-man-anime-style-character-2320286455.jpg"
                alt="Team Member"
                className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>


            <div className="bg-white p-6 rounded-md shadow-md">
              <img
                src="https://www.shutterstock.com/image-vector/young-man-anime-style-character-260nw-2320286507.jpg"
                alt="Team Member"
                className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>



          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700">
                Have questions or want to get in touch? Feel free to contact
                us.
              </p>
            </div>
            <div>
              {/* Add a contact form or contact information here */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    <Footer/>
    </div>
  );
};

export default About;
