import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutUsPage = () => {
  return (
    <div className="bg-white mt-20 text-gray-800">
      {/* Hero Section */}
     <section
  className="bg-blue-50 bg-[url('https://i.ibb.co/qYDTBRGN/abstract-christmas-glitter-lights-background-blured-christmas-and-new-year-light-free-photo.jpg')] bg-no-repeat bg-cover bg-center w-full py-20 px-6 md:px-16 text-center"
>
  <Fade direction="up" triggerOnce>
    <h1 className="text-5xl font-bold mb-4 text-white">About RoomMateFinder</h1>
    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
      Connecting people to safe, reliable and compatible roommates in just a few clicks.
    </p>
  </Fade>
</section>


      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <Fade direction="left" triggerOnce>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to simplify the process of finding trusted roommates and affordable shared living spaces.
                We strive to build a community where co-living is safe, respectful, and mutually beneficial.
              </p>
            </div>
          </Fade>

          <Fade direction="right" delay={100} triggerOnce>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where moving to a new city or finding a home doesn’t come with anxiety or guesswork—
                just real people, real spaces, and real connections.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <Fade direction="up" triggerOnce>
            <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          </Fade>

          <div className="grid md:grid-cols-3 gap-10 text-left">
            <Fade cascade damping={0.2} direction="up" triggerOnce>
              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">1. Create Your Profile</h3>
                <p className="text-gray-600">
                  Set up a verified roommate profile that highlights your preferences, habits, and availability.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">2. Match & Connect</h3>
                <p className="text-gray-600">
                  We match you with compatible roommates based on lifestyle, location, and budget.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">3. Move In Confidently</h3>
                <p className="text-gray-600">
                  Chat, visit, and make arrangements securely through our platform until you're ready to move in.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <Fade direction="up" triggerOnce>
            <h2 className="text-3xl font-bold mb-12">Why Choose RoomMateFinder?</h2>
          </Fade>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <Fade cascade damping={0.2} direction="up" triggerOnce>
              <div className="bg-blue-50 rounded-2xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
                <p className="text-gray-600">
                  Every user goes through a verification process to ensure trust and transparency.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                <p className="text-gray-600">
                  Our algorithm matches based on shared interests, habits, and living preferences.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">User Support</h3>
                <p className="text-gray-600">
                  Have questions or concerns? Our support team is here to help you every step of the way.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
     
    </div>
  );
};

export default AboutUsPage;
