import React from 'react';
import Lottie from "lottie-react";
import animation from "../assets/Loading.json";

function Loader() {
  return (
    <div className='container text-center my-auto'>
        <Lottie
              animationData={animation}
              loop={true}
/>
        </div>
  );
}

export default Loader;
