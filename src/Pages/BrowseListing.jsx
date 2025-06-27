import React, { Suspense, useEffect, useState } from "react";
import PostCardForBL from "../components/PostCardForBL";

import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";

const BrowseListing = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState([]);

  useState(() => {
    if (cardData?.length > 0) {
      setIsLoading(false);
      setCardData(cardData);
    }
  }, [cardData]);

  const [sortOrder, setSortOrder] = useState("desc"); // 🆕 sort order state

  const fetchData = async () => {
    try {
      setIsLoading(true); // optional: show loading when sort changes
      const res = await fetch(
        `https://assignment-10-server-side-rho-six.vercel.app/posts?sort=${sortOrder}`
      );
      const data = await res.json();
      setCardData(data);
    } catch (err) {
      toast("Failed to fetch data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // 🆕 Re-fetch when sortOrder changes
  }, [sortOrder]);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-500 mx-auto"></div>
          <p className="text-xl primary-text font-semibold mt-4">
            Loading Apply List...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[100px] w-[98%] mx-auto ">
           <section
        className="bg-blue-50 bg-[url('https://i.ibb.co/YFqDBfq7/360-F-1513784691-Kuef-KRWAKBy-Lv-Y9-L9-H2-C1-PAkq-Yi-BEI5l.jpg')] bg-no-repeat bg-cover bg-center w-full py-20 px-6 md:px-16 text-center"
      >
        <Fade direction="up" triggerOnce>
          <h1 className="text-5xl font-bold mb-4 text-shadow-lg text-white">Sing Up for More Explore </h1>
          <p className="text-lg text-gray-800 text-shadow-lg max-w-3xl mx-auto">
            Connecting people to safe, reliable and compatible roommates in just a few clicks.
          </p>
        </Fade>
      </section>
      <div className="flex justify-end lg:pr-5 mb-6">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-3 mt-2  card-bg py-2 rounded-md primary-text"
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 md:gap-10 my-10 gap-y-10 md:my-10 lg:grid-cols-2 lg:w-[85%] lg:gap-y-15 xl:grid-cols-3 xl-w[85%] 2xl:grid-cols-4 ">
        <Suspense fallback={Loading}>
          {cardData.map((data) => (
            <PostCardForBL key={data._id} data={data}></PostCardForBL>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default BrowseListing;
