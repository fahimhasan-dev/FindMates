
import React from 'react';
import TitleHeader from './TitleHeader';
import Marquee from 'react-fast-marquee';
import { Fade } from 'react-awesome-reveal';


const LogoShowcase = () => {
  return (
    <div className="pt-40   ">
      <div className='pb-10'>
        
       
<Fade direction="up" triggerOnce duration={1500}>
          <h1 className="md:text-5xl text-3xl heading-text">Trusted by the world’s best company .
               
   
  </h1>
</Fade>
    
      </div>
      <div className=" ">
      <Marquee speed={70} pauseOnHover={true}  className="grid p-4 cursor-pointer pt-20  grid-cols-2 md:grid-cols-4 mt-8 gap-4  mx-auto   rounded-xl ">
       
          <div className='flex gap-5'>
            

            <img src="https://i.ibb.co/8LSgd923/company-logo-10.png" alt="" />
            
          

            <img src="https://i.ibb.co/RrszX24/company-logo-2.png" alt="" />
            
            <img src="https://i.ibb.co/NdFwGv21/company-logo-1.png" alt="" />
            <img src="https://i.ibb.co/cXvxHNgj/company-logo-9.png" alt="" />
            <img src="https://i.ibb.co/S46NFLHs/company-logo-11.png" alt="" />
            <img src="https://i.ibb.co/jvLXPbky/company-logo-7.png" alt="" />
            <img src="https://i.ibb.co/qYv5P1vw/company-logo-5.png" alt="" />
</div>



      </Marquee>
    </div></div>
  );
};

export default LogoShowcase;
