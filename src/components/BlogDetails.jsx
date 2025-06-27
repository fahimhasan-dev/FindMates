// BlogDetails.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const BlogDetails = () => {
  const categories = [
    { name: 'Trading', count: 33 },
    { name: 'Exchange', count: 77 },
    { name: 'Guide', count: 49 },
    { name: 'Blockchain', count: 70 },
    { name: 'Crypto', count: 33 },
    { name: 'Lending', count: 38 },
  ];

  const latestPosts = [
    { title: '5 reasons why your website', img: 'https://i.ibb.co/9mXYc9qd/banner3.png' },
    { title: '6 reasons why you website', img: 'https://i.ibb.co/fdJp1h8/banner2.png' },
    { title: '7 reasons why you website', img: 'https://i.ibb.co/fdJp1h8/banner2.png' },
    { title: '8 reasons why you website', img: 'https://i.ibb.co/fdJp1h8/banner2.png' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:flex gap-10">
      {/* Left: Blog Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-2/3"
      >
        <img
          src="https://i.ibb.co/9mXYc9qd/banner3.png"
          alt="blog"
          className="rounded-lg mb-6"
        />
        <p className="text-sm text-gray-500">21 Aug, 2019 &nbsp; | &nbsp; By Admin</p>
        <h1 className="text-3xl font-bold mt-2 mb-4">
          5 reasons why your website needs more whitespace
        </h1>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora
          ipsam hic, error aperiam similique recusandae maiores labore non velit
          accusamus cumque et cum ipsum esse quod!
        </p>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quisquam ut
          accusamus nulla, pariatur tempore tenetur, reiciendis saepe, libero ullam
          neque sequi est labore dignissimos numquam! Exercitationem, porro,
          explicabo deleniti, provident tempora dolorem.
        </p>
        <div className="bg-gray-100 p-4 border-l-4 border-blue-600 mb-6">
          <p className="font-semibold text-gray-700">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            assumenda voluptatum maiores iure blanditiis reprehenderit!"
          </p>
        </div>
      </motion.div>

      {/* Right: Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/3 mt-10 md:mt-0 space-y-8"
      >
        {/* Categories */}
        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat, i) => (
              <li key={i} className="flex justify-between text-gray-700">
                <span>{cat.name}</span>
                <span className="bg-blue-600 text-white text-xs rounded-full px-2">
                  {cat.count}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest Posts */}
        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Latest Post</h2>
          <ul className="space-y-4">
            {latestPosts.map((post, i) => (
              <li key={i} className="flex items-center gap-4">
                <img src={post.img} alt="" className="w-12 h-12 object-cover rounded" />
                <p className="text-sm text-gray-700 font-medium">{post.title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-white rounded-lg shadow p-5">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Newsletter</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded mb-4 text-sm"
          />
          <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
            Subscribe <FaArrowRight />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
