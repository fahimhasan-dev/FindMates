import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdatePostForm = () => {
  const {
    email,
    profilePhoto,
    roomPhoto,
    location,
    _id,
    title,
    Age,
    names,
    description,
    rentAmount,
    contactInfo,
    availability,
    lifestylePreferences,
    roomType,
  } = useLoaderData();

  const handlePostUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedPost = Object.fromEntries(formData.entries());
    console.log(updatedPost);
    // send update Post to the db
    fetch(
      `https://assignment-10-server-side-rho-six.vercel.app/parsonData/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your Post Update SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            title: "You don't change AnyValue?",
            text: "If you want to Update Your Post! Please Change Your Post Data?",
            icon: "question",
          });
        }
      });
  };
  return (
    <div>
      <div className="my-10 mx-auto md:w-[95%] xl:w-[90%] 2xl-[82%]">
        <div className=" pt-4  ">
          <div className="md:p-12 bg-[#f8fafb] border montserrat border-[#dddddd] shadow-sm md:rounded-t-xl text-center space-y-4">
            <h1 className="lg:text-6xl text-[#0f5e87] md:text-3xl   pt-4 md:pt-0  text-2xl font-bold">
              Update Your Find Roommate Post{" "}
            </h1>
          </div>
          <form
            onSubmit={handlePostUpdate}
            className=" shadow-sm bg-[#f8fafb] border border-[#dddddd] rounded-b-xl "
          >
            <div className="grid grid-cols-1  py-12  md:grid-cols-2 lg:px-24 md:px-8 gap-6 mx-auto w-full">
              <fieldset className="fieldset p-2">
                <label className="label  montserrat text-xl">User Name</label>
                <input
                  type="text"
                  name="names"
                  className="input w-full text-[#0c0c0cbe]"
                  value={names}
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
                  value={email}
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
                  value={profilePhoto}
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
                  defaultValue={roomPhoto}
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
                  defaultValue={title}
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
                  defaultValue={location}
                  placeholder="Enter Your Location"
                  required
                />
              </fieldset>
              <fieldset className="fieldset p-2">
                <label className="label  text-xl">Select a Room Type</label>

                <select
                  placeholder="Pick a Room Type"
                  className="select w-full "
                  defaultValue={roomType}
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
                  className="select w-full"
                  placeholder="Pick a Lifestyle Preferences"
                  defaultValue={lifestylePreferences}
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
                <label className="label text-[17px]  md:text-xl">
                  Select Availability or Not Availability
                </label>
                <select
                  placeholder="Pick a Lifestyle Preferences"
                  defaultValue={availability}
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
                  defaultValue={contactInfo}
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
                  defaultValue={Age}
                  placeholder="Phone Number/email/etc"
                  className="input w-full"
                />
              </fieldset>{" "}
              <fieldset className="fieldset p-2">
                <label className="label text-xl ">Rent Amount$</label>
                <input
                  type="text"
                  name="rentAmount"
                  defaultValue={rentAmount}
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
                defaultValue={description}
                placeholder="Short Description"
                required
              ></textarea>
            </fieldset>
            <div className="pb-12  flex justify-center ">
              <button
                className="w-[90%] mx-auto bg-[#3d92e7] hover:bg-[#3d92e7ee]  cursor-pointer text-black rounded   font-semibold  text-2xl"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePostForm;
