import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useLoaderData } from "react-router";
import TableTr from "../components/TableTr";

const MyRoommatePosts = () => {
  const [noData, setNoData] = useState(true);
  const { user } = useContext(AuthContext);
  const tableData = useLoaderData();

  // ✅ ফিল্টার করে যেসব পোস্ট ইউজারের, সব বের করো
  const userPosts = tableData.filter((data) => data.email === user.email);

  useEffect(() => {
    if (userPosts.length > 0) {
      setNoData(false);
    }
  }, [userPosts]);

  return (
    <div>
      {noData ? (
        <div className="flex justify-center text-center mx-auto min-h-[calc(100vh-300px)]  flex-col  ">
          <div className="flex justify-center items-center">
            <img
              className="w-[20%]"
              src="https://i.ibb.co/9HmP24Wz/Nopost-Photo.png"
              alt=""
            />
          </div>

          {/* <h1 className="text-4xl font-extrabold text-red-500">
            You haven't posted anything.
          </h1>
          <p className="text-xl font-semibold mt-3">
            Oops! The Page you're looking for doesn't exist
          </p> */}
          <Link to="/findRoommate">
            <div>
              <button className="btn mt-5 bg-[#56b92f] rounded-sm p-3 text-white font-bold hover:bg-[#498147] ">Go back to posting.</button>
            </div>
          </Link>
        </div>
      ) : (
        <div className="p-4 min-h-screen">
          <h2 className="text-xl font-bold mb-4 text-[#3d92e7ef]">
            My Roommate Posts
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full mx-auto border border-collapse">
              <thead>
                <tr className="bg-gray-100 text-sm md:text-base">
                  <th className="border p-2 text-left">Room Photo</th>
                  <th className="border p-2 text-left">Availability</th>
                  <th className="border p-2 text-left">Room Type</th>
                  <th className="border p-2 text-left">Rent Amount</th>
                  <th className="border p-2 text-left">
                    Update or Delete Your Post
                  </th>
                </tr>
              </thead>
              <tbody>
                {userPosts.map((post) => (
                  <TableTr key={post._id} post={post} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRoommatePosts;
