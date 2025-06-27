import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const AboutOurWebSite = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 mt-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <Fade direction="up" triggerOnce duration={1500}>
        <h1 className="font-semibold text-3xl md:text-5xl text-blue-600 dark:text-blue-400">
          How it works?{" "}
          <Typewriter
            words={["Sign up...", "Post...", "Like...", "Contact..."]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1></Fade>
      </div>

      {/* Content Box */}
      <div className="w-full max-w-8xl mx-auto bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 p-6 sm:p-8 md:p-12 rounded-xl space-y-12 shadow-lg transition-colors">
        {/* Sign Up */}
        <Fade direction="up" triggerOnce>
          <div>
            <h2 className="font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-2">
              🔐 Sign Up
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Join our growing community by creating a free account. Signing up
              gives you access to thousands of roommate profiles and vacant
              rooms available for rent. By setting up your own roommate profile,
              our intelligent algorithm will instantly begin matching you with
              others who share similar lifestyles, living preferences, and
              goals. The more details you provide, the more accurate your
              matches will be! With just a few steps, you’ll have a personalized
              roommate feed showing your top prospects first. You can even apply
              advanced filters to narrow down the listings based on your exact
              needs.
            </p>
          </div>
        </Fade>

        {/* Like or Message */}
        <Fade direction="up" triggerOnce delay={200}>
          <div>
            <h2 className="font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-2">
              💙 Like or Message
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Once you've set up your profile, start exploring other profiles
              that match your preferences. See someone you’re interested in?
              Just hit the “Like” button. If they like you back — it’s a Match,
              and you can start chatting freely! Want to speed things up? No
              need to wait for a match — send an Instant Message to introduce
              yourself right away. You can also receive likes and messages from
              others who find your profile interesting.
            </p>
          </div>
        </Fade>

        {/* Contact */}
        <Fade direction="up" triggerOnce delay={400}>
          <div>
            <h2 className="font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400 mb-2">
              📞 Contact
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Once you and your match feel comfortable, you can move beyond
              in-app messaging and share personal contact details — safely and
              at your own pace. All your conversations are securely stored in
              one place, making it easy to manage and revisit anytime. Whether
              you're finding a roommate or being found, connecting has never
              been easier.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutOurWebSite;
