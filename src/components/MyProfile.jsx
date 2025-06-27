
import { use, useState } from "react";

import { toast } from "react-toastify";

import { AuthContext } from "../context/AuthContext";
import { Helmet } from "react-helmet";
import { CiCamera } from "react-icons/ci";


const MyProfile = () => {
  const { updateUser, setUser, setLoading, user } = use(AuthContext);

  const [color, setColor] = useState(true);

  const handleReserve = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    updateUser({ displayName: name, photoURL: photoUrl }).then(
      (currentUser) => {
        setColor(false);
        setLoading(false);
        setUser({ ...currentUser, displayName: name, photoURL: photoUrl });
        toast.success("Profile Update Success")
      }
    );
  };

  return (
     
   
     
    <div className="min-h-screen bg-gray-900  text-white flex flex-col items-center p-4">

      <Helmet>
          <title>Profile</title>
      </Helmet>
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-lg p-6">
        <div
          className="h-40 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url(https://picsum.photos/800/200)" }}
        ></div>

        <div className="relative flex flex-col items-center -mt-16">
          <div className="relative">
            <img
              src={user.photoURL}
              alt="Profile Photo"
              className="w-32 h-32 rounded-full border-4 border-gray-900 object-cover"
            />
            <label className="absolute bottom-0 right-0 bg-blue-600 p-1 rounded-full cursor-pointer">
                          
                          <CiCamera className="w-5 h-5" />
            </label>
          </div>
          <h1>{user.displayName}</h1>

            <p className="text-gray-400 mt-1">{ user.email}</p>

          <div className=" w-full mb-5 bg-gray-900 border-gray-200  timeline-card   p-4 rounded-xl  shadow-md">
            <h1 className="font-semibold md:text-3xl text-xl py-3 text-center">
              Change Your Name & Profile Photo
            </h1>
            <form onSubmit={handleReserve} className=" flex flex-col gap-5 ">
              <label className="label"> Your Name</label>
              <input
                className="contactInput"
                type="text"
                name="name"
                required
                placeholder="Name"
              />
              <label className="label">Your Profile Photo Url</label>
              <input
                className="contactInput"
                type="text "
                name="photoUrl"
                required
                placeholder="https//your/Profile/photo/url"
              />

              <button
                className={`${
                  color
                    ? "bg-orange-400 cursor-pointer hover:bg-orange-500 text-black rounded p-2"
                    : " bg-green-400 cursor-pointer text-black rounded p-2"
                }  `}
              >
                Update
              </button>
            </form>
          </div>
        </div>
    </div>
      </div>
  );
};
export default MyProfile;
