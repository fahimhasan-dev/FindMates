import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const TableTr = ({ post }) => {
  const { availability, roomType, rentAmount, _id, roomPhoto } = post;
  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-side-rho-six.vercel.app/parsonData/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Post has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <tr className="text-sm md:text-base bg-white ">
      <td className="border p-2 ">
        <div className="avatar">
          <div className="w-20 border-5 border-[#000000a4] rounded">
            <img className="border-2 border-[#999898a4]" src={roomPhoto} />
          </div>
        </div>
      </td>
      <td className="border p-2">{availability}</td>
      <td className="border p-2">{roomType}</td>
      <td className="border p-2">{rentAmount}$</td>
      <td className="border p-2 whitespace-nowrap ">
        <div className=" flex">
          <Link to={`/updatePostForm/${_id}`}>
            {" "}
            <button className="text-blue-500 mr-2 py-2 px-3 btn hover:bg-[#242223] h-13 bg-[#3C393B] rounded flex gap-1.5 ">
              {" "}
              <FaEdit size={20} color="white" />
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="text-white flex mr-2 h-13  gap-1 items-center rounded bg-[#EA4744] hover:bg-red-500 btn "
          >
            <MdDeleteForever size={22} color="white" />
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableTr;
