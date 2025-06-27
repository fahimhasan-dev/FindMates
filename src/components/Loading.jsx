import Lottie from "lottie-react";
import React from "react";
import lottieLoading from "../../public/loading.json";
const Loading = () => {
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <Lottie
          animationData={lottieLoading}
          style={{ width: "150px", height: "full" }}
        ></Lottie>
      </div>
    </div>
  );
};

export default Loading;
