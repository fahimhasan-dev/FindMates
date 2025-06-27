import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
const PostField = () => {
  const { user } = use(AuthContext);
  console.log(user);
  const [color, setColor] = useState(false);
  const handlePostSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    userData.likes = 0;
    fetch("https://assignment-10-server-side-rho-six.vercel.app/parsonData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "add SuccessFull  ",
            showConfirmButton: false,
            timer: 1500,
          });
          setColor(true);
          form.reset();
        }
        setColor(false);
      });
  };
  return (
    <div className="my-10 mx-auto mt-20 w-[60%]">
      <div className=" pt-4  ">
        <div className="md:p-12 bg-[#f8fafb] border montserrat border-[#dddddd] shadow-sm md:rounded-t-xl text-center space-y-4">
          <h1 className="lg:text-3xl text-[#0f5e87] md:text-2xl   pt-4 md:pt-0  text-2xl font-bold">
            Fill the form for easy to Find Roommate{" "}
          </h1>
          <p className="  text-sm  mx-auto montserrat text-center px-3 md:px-5  w-[70%] pb-6 md:pb-0">
            Looking for someone to share your space? Just fill out a quick form
            and get matched with compatible roommates. It’s simple, fast, and
            designed to help you live better together.
          </p>
        </div>
        <form
          onSubmit={handlePostSubmit}
          className=" shadow-sm bg-[#f8fafb] border border-[#dddddd] rounded-b-xl "
        >
          <div className="grid grid-cols-1  py-12  md:grid-cols-2 lg:px-24 md:px-8 gap-6 mx-auto w-full">
            <fieldset className="fieldset p-2">
              <label className="label  montserrat text-xl">User Name</label>
              <input
                type="text"
                name="names"
                className="input w-full text-[#0c0c0cbe]"
                value={`${user?.displayName}`}
                readOnly
                placeholder="Enter Your Name"
                required
              />
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label  text-xl">User Email</label>
              <input
                type="email"
                name="email"
                className="input w-full  text-[#0c0c0cbe]"
                value={`${user?.email}`}
                readOnly
                placeholder="Email"
                required
              />
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label  text-xl">Profile Photo URL</label>
              <input
                type="text"
                name="profilePhoto"
                className="input w-full text-[#0c0c0cbe]"
                value={`${user?.photoURL}`}
                readOnly
                placeholder="Profile Photo Url"
                required
              />
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label  text-xl">
                Your Shear Room Photo URL
              </label>
              <input
                type="text"
                name="roomPhoto"
                className="input w-full"
                placeholder="Your Room Photo"
                required
              />
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label  text-xl">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                defaultValue={`Looking for a roommate in NYC`}
                placeholder="Looking for a roommate in NYC"
                required
              />
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label  text-xl">Location</label>
              <input
                type="text"
                name="location"
                className="input w-full"
                placeholder="Enter Your Location"
                required
              />
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label  text-xl">Select a Room Type</label>

              <select
                placeholder="Pick a Room Type"
                className="select w-full "
                name="roomType"
                required
              >
                <option disabled={true}>Pick a Room Type</option>
                <option>Single</option>
                <option>Shared</option>
                <option>etc</option>
              </select>
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label  text-xl">
                Select a Lifestyle Preferences
              </label>
              <select
                placeholder="Pick a Lifestyle Preferences"
                className="select w-full"
                name="lifestylePreferences"
                required
              >
                <option disabled={true}>Pick a Lifestyle Preferences</option>
                <option>Pets</option>
                <option>Smoking</option>
                <option>Night Owl</option>
                <option>etc</option>
              </select>
            </fieldset>
            <fieldset className="fieldset p-2">
              <label className="label  text-xl">
                Select Availability or Not Availability
              </label>
              <select
                placeholder="Pick a Lifestyle Preferences"
                className="select w-full"
                name="availability"
                required
              >
                <option disabled={true}>
                  Select Available or Not Available"
                </option>
                <option>Available</option>
                <option>Not Available </option>
              </select>
            </fieldset>{" "}
            <fieldset className="fieldset p-2">
              <label className="label  text-xl">Contact Info </label>
              <input
                type="text"
                name="contactInfo"
                placeholder="Phone Number/email/etc"
                className="input w-full"
                required
              />
            </fieldset>{" "}
            <fieldset className="fieldset p-2">
              <label className="label  text-xl">Age</label>
              <input
                type="number"
                name="Age"
                placeholder="Phone Number/email/etc"
                className="input w-full"
              />
            </fieldset>{" "}
            <fieldset className="fieldset p-2">
              <label className="label text-xl ">Rent Amount$</label>
              <input
                type="text"
                name="rentAmount"
                className="input w-full text-[#0c0c0cbe]"
                placeholder="Enter Rent Amount"
                required
              />
            </fieldset>
          </div>

          <fieldset className="fieldset mb-4  w-[85%] mx-auto">
            <label className="label  text-xl">Description</label>
            <textarea
              className=" bg-white border-2 text-[#0c0c0cbe]  border-[#dfdadaec] rounded p-4"
              rows={6}
              name="description"
              placeholder="Short Description"
              required
            ></textarea>
          </fieldset>
          <div className="pb-12  flex justify-center ">
            {color ? (
              <button
                className="w-[90%] mx-auto bg-green-400 cursor-pointer text-black rounded font-bold  text-2xl"
                type="submit"
              >
                Add
              </button>
            ) : (
              <button
                className="w-[90%] mx-auto bg-[#3d92e7] hover:bg-[#3d92e7ee]  cursor-pointer text-black rounded   font-semibold  text-2xl"
                type="submit"
              >
                Add
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostField;
