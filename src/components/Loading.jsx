import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        {/* <span className="loading loading-bars loading-xl"></span> */}
        {/* <span className="loading loading-spinner loading-xl text-accent"></span> */}
        <span className="loading loading-dots loading-xl text-[green]" ></span>
      </div>
    </div>
  );
};

export default Loading;
