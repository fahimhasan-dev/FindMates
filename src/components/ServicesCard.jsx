import React, { useRef } from 'react';
import CountUp from 'react-countup';

const ServicesCard = ({ data, index }) => {
  const { thumbnail, name, end } = data;
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty('--start', angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="group relative transition-all duration-300 transform hover:scale-105 rounded-2xl w-full max-w-sm mx-auto bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] shadow-xl p-[1px]"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center">
        <img
          src={thumbnail}
          alt={name}
          className="w-20 h-20 object-contain mb-4"
        />
        <div className="flex items-center justify-center text-4xl font-extrabold text-[#3d92e7]">
          <CountUp end={end} enableScrollSpy scrollSpyDelay={200} />
          <span className="ml-1">+</span>
        </div>
        <p className="mt-2 text-gray-700 dark:text-gray-300 text-base font-medium">
          {name}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
