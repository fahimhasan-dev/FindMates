// import { logoIconsList } from "../../public";


// const LogoIcon = ({ icon }) => {
//   return (
//     <div className="flex-none flex-center marquee-item">
//       <img src={`${icon.imgPath}`} alt={`{icon.name}`} />
//     </div>
//   )
// };

// const LogoShowcase = () => (
//   <div className="md:my-20 my-10 relative">
//     <div className="gradient-edge" />
//     <div className="gradient-edge" />

//     <div className="marquee h-52">
//       <div className="marquee-box md:gap-12 gap-5">
//         {logoIconsList.map((icon, index) => (
//           <LogoIcon key={index} icon={icon} />
//         ))}

//         {logoIconsList.map((icon, index) => (
//           <LogoIcon key={index} icon={icon} />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default LogoShowcase;
import React from 'react';
import TitleHeader from './TitleHeader';
import Marquee from 'react-fast-marquee';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

const LogoShowcase = () => {
  return (
    <div className="pt-40   ">
      <div className='pb-10'>
        
       
<Fade direction="up" triggerOnce duration={1500}>
          <h1 className="font-semibold text-[#3d92e7] md:text-5xl text-3xl text-center">Trusted by the world’s best .
                <Typewriter
                              words={['Hostinger',  'vercel', '!']}
                              loop={true}
                              cursor
                              cursorStyle='|'
                              typeSpeed={70}
                              deleteSpeed={50}
                              delaySpeed={1000}
                            />
   
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
