import React, { use } from "react";
import Card from "./Card";
import TitleHeader from "./TitleHeader";
import { Typewriter } from "react-simple-typewriter";
const data = fetch(
  "https://assignment-10-server-side-rho-six.vercel.app/parsonData"
).then((res) => res.json());
const PostCard = () => {
  const cardData = use(data);

  return (
    <div>
      {/* Featured Roommates */}
      <div className="w-full h-full mt-40 md:px-10 sm:px-5">
        <h1 className="font-semibold text-[#3d92e7] md:text-5xl text-3xl text-center">   <Typewriter
        words={['Hello!', 'Welcome to Featured Roommates section!', '!']}
        loop={true}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      /></h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-3  mb-40 mt-15 mx-auto w-[95%] gap-4">
          {cardData.map((card) => (
            <Card key={card._id} card={card}></Card>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default PostCard;
