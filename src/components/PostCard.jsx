import React, { use } from "react";
import Card from "./Card";
import { Fade, Zoom } from "react-awesome-reveal";
// import TitleHeader from "./TitleHeader";
// import { Typewriter } from "react-simple-typewriter";
const data = fetch(
  "https://assignment-10-server-side-rho-six.vercel.app/parsonData"
).then((res) => res.json());
const PostCard = () => {
  const cardData = use(data);

  return (
    <div>
      {/* Featured Roommates */}
      <div className="w-full h-full mt-40 md:px-10 sm:px-5">
        <Fade direction="up" triggerOnce duration={1500}>
          <h1 className=" text-[#3d92e7]  text-3xl  heading-text">Featured Roommates section </h1></Fade>
        
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
