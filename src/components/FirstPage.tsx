import React from "react";
import { Fade } from "react-reveal";

const FirstPage = () => {
  return (
    <section className="w-full">
      <header>
        <img src="/Header@2x.png" alt="" />
      </header>
      <div className="hero-section flex justify-center mt-[-5px] py-[80px]">
        <div>
          <Fade bottom delay={100}>
            <p className=" text-white text-center text-2xl md:text-4xl lg:text-5xl mb-10">
              TRIPPRO - AN ECOMMERCE SOLUTION
            </p>
          </Fade>
          <div>
            <Fade bottom delay={200}>
              <p className="text-white px-[70px] text-center text-base mb-10">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
            </Fade>
          </div>
            <Fade bottom delay={300}>
            <div className="flex gap-5 items-center justify-center">
            <div className="flex items-center gap-5">
              <p className="text-xl font-bold text-white">Built for:</p>
              <div>
                <img src="/responsive.png" alt="" />
              </div>
              <div className="w-[2px] h-[60px] bg-[#fff]"></div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <p className="text-xl text-white">Technologies:</p>
                <p className="text-xl font-bold text-white">Built for:</p>
              </div>
              <div>
                <img src="/wordpress-development-logo-banner.png" alt="" />
              </div>
              <div className="w-[2px] h-[60px] bg-[#fff]"></div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <p className="text-xl text-white">Industry:</p>
                <p className="text-xl font-bold text-white">Ecommerce</p>
              </div>
              <div>
                {/* <img src="/wordpress-development-logo-banner.png" alt="" /> */}
                <img src="/shopping-cart.png" alt="" />
              </div>
            </div>
          </div>
            </Fade>
        </div>
      </div>
      <div>
        <Fade delay={400} bottom>
        <div className="flex justify-center mt-[-115px]">
          <div className="relative overflow-hidden">
            <img
              src="/Laptop@2x.png"
              className="relative  overflow-hidden"
              width={600}
              height={600}
              alt=""
            />
            <img
              className="absolute top-[21px] left-[73px]"
              src="/devwp.visibleone.net_tripprohk_@2x.png"
              width={455}
              height={444}
              alt=""
            />
          </div>
        </div>
        </Fade>
      </div>
    </section>
  );
};

export default FirstPage;
