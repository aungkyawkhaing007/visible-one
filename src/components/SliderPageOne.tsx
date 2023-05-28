import React,{useState} from "react";
import Slider from "react-slick";

const SliderPageOne = () => {
  
    const [change,setIsChange] = useState('desktop');

    function handelChange(val:string){
           setIsChange(val) 
    }


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
    ltr : true
  };
  return (
    <div>
        
        {
            change ==="desktop" &&    <div>
            <Slider {...settings}>
            <div className="py-[60px]">
              <div className="flex justify-center flex-wrap lg:flex-nowrap relative">
                <div className="relative    ">
                <div className="">
                  <div className="relative translate-x-0 lg:translate-x-[30%]">
                    <img src="/desktop.svg" width={750} height={750} className="w-[400px] xs:w-[400px] sm:w-[400px] md:w-[400px] lg:w-[890px] " alt="" />
                    <img
                      src="/frame.svg"
                      className="absolute top-[75px]  left-0 rounded-[20px]"
                      alt=""
                    />
                    <img
                      src="/frame.svg"
                      className="absolute top-[1px]  left-0 rounded-[20px]"
                      alt=""
                    />
                    <div className="absolute top-[19px] left-0 px-4">
                      <img className="w-full h-[100%]" src="/tri.png" alt="" />
                    </div>
                    <div className="w-full absolute bg-[#C5CDD3] h-[60px] rounded-b-[20px] bottom-[71px]"></div>
                    <div className="absolute h-[25px] bg-[#58595B] w-[25px] rounded-full bottom-[20%] left-[50%] translate-x-[-50%] translate-y-[-20%]"></div>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-[50px] left-[-40px]">
                  <img src="/trippro.com.hk_(iPhone X).png" width={150} alt="" />
                </div>
                </div>
                <div className="button py-[30px] pl-[200px] pr-[50px]">
                  <div>
                    <p className="text-3xl text-white font-[600] mb-[40px]">
                      Their Old Website & Problems
                    </p>
                    <div>
                      <div className="mb-[25px]">
                        <div className="flex gap-5">
                          <div>
                            <img src="/arrow-pointing-to-right.svg" alt="" />
                          </div>
                          <div className="mt-[-5px]">
                            <p className="text-sm text-white">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-[25px]">
                        <div className="flex gap-5">
                          <div>
                            <img src="/arrow-pointing-to-right.svg" alt="" />
                          </div>
                          <div className="mt-[-5px]">
                            <p className="text-sm text-white">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-[25px]">
                        <div className="flex gap-5">
                          <div>
                            <img src="/arrow-pointing-to-right.svg" alt="" />
                          </div>
                          <div className="mt-[-5px]">
                            <p className="text-sm text-white">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                            </p>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-4">
                    <div>
                      <img src="/left.svg" alt="" />
                    </div>
                    <div>
                      <img src="/right.svg" alt="" />
                    </div>
                  </div>
                  <div className="mt-10">
                    <button 
                        onClick={()=>handelChange('mobile')}
                    className="button-re border border-white rounded-full px-10 py-2 flex gap-4 items-center text-white text-lg font-[500]">
                      Desktop{" "}
                      <div className="w-[20px] h-[20px] mb-[-5px] rounded-full bg-white"></div>{" "}
                    </button>
                  </div>
                </div>
               
              </div>
            </div>
            <div className="py-[60px]">
              <div className="flex justify-center flex-wrap lg:flex-nowrap relative">
                <div className="relative    ">
                <div className="">
                  <div className="relative translate-x-0 lg:translate-x-[30%]">
                    <img src="/desktop.svg" width={750} height={750} className="w-[400px] xs:w-[400px] sm:w-[400px] md:w-[400px] lg:w-[890px] " alt="" />
                    <img
                      src="/frame.svg"
                      className="absolute top-[75px]  left-0 rounded-[20px]"
                      alt=""
                    />
                    <img
                      src="/frame.svg"
                      className="absolute top-[1px]  left-0 rounded-[20px]"
                      alt=""
                    />
                    <div className="absolute top-[19px] left-0 px-4">
                      <img className="w-full h-[100%]" src="/tri.png" alt="" />
                    </div>
                    <div className="w-full absolute bg-[#C5CDD3] h-[60px] rounded-b-[20px] bottom-[71px]"></div>
                    <div className="absolute h-[25px] bg-[#58595B] w-[25px] rounded-full bottom-[20%] left-[50%] translate-x-[-50%] translate-y-[-20%]"></div>
                  </div>
                </div>
                <div className="hidden lg:block absolute top-[50px] left-[-40px]">
                  <img src="/trippro.com.hk_(iPhone X).png" width={150} alt="" />
                </div>
                </div>
                <div className="button py-[30px] pl-[200px] pr-[50px]">
                  <div>
                    <p className="text-3xl text-white font-[600] mb-[40px]">
                      Their Old Website & Problems
                    </p>
                    <div>
                      <div className="mb-[25px]">
                        <div className="flex gap-5">
                          <div>
                            <img src="/arrow-pointing-to-right.svg" alt="" />
                          </div>
                          <div className="mt-[-5px]">
                            <p className="text-sm text-white">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-[25px]">
                        <div className="flex gap-5">
                          <div>
                            <img src="/arrow-pointing-to-right.svg" alt="" />
                          </div>
                          <div className="mt-[-5px]">
                            <p className="text-sm text-white">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-[25px]">
                        <div className="flex gap-5">
                          <div>
                            <img src="/arrow-pointing-to-right.svg" alt="" />
                          </div>
                          <div className="mt-[-5px]">
                            <p className="text-sm text-white">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                            </p>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-4">
                    <div>
                      <img src="/left.svg" alt="" />
                    </div>
                    <div>
                      <img src="/right.svg" alt="" />
                    </div>
                  </div>
                  <div className="mt-10">
                    <button 
                        onClick={()=>handelChange('mobile')}
                    className="button-re border border-white rounded-full px-10 py-2 flex gap-4 items-center text-white text-lg font-[500]">
                      Desktop{" "}
                      <div className="w-[20px] h-[20px] mb-[-5px] rounded-full bg-white"></div>{" "}
                    </button>
                  </div>
                </div>
               
              </div>
            </div>
          </Slider>
            </div>
        }

         {/* mobile */}
        {
           change === "mobile" &&    <div>
           <Slider {...settings}>
           <div className="py-[60px]">
             <div className="flex justify-center flex-wrap lg:flex-nowrap relative">
               <div className="relative    ">
               <div className="">
     
                   <div className="relative translate-x-0 lg:translate-x-[55%]">
                   <img src="/phone.svg"   className="relative z-[4]  w-[400px] xs:w-[400px] sm:w-[400px] md:w-[400px] lg:w-[400px] " alt="" />
                      
                       <img src="/phoneFrame.svg" className="absolute top-[25px] left-[27.5px] z[-1]" alt="" />
                       <img src="/trippro.com.hk_(iPhone X).png"  className="absolute top-[84px] z-[5] left-[28px] w-[246px] h-[288px]  " alt="" />
                 </div>
               </div>
               <div className="hidden lg:block absolute top-[50px] left-[-40px]">
                 <img src="/trippro.com.hk_(iPhone X).png" width={150} alt="" />
               </div>
               </div>
               <div className="button py-[30px] pl-[200px] pr-[50px]">
                 <div>
                   <p className="text-3xl text-white font-[600] mb-[40px]">
                     Their Old Website & Problems
                   </p>
                   <div>
                     <div className="mb-[25px]">
                       <div className="flex gap-5">
                         <div>
                           <img src="/arrow-pointing-to-right.svg" alt="" />
                         </div>
                         <div className="mt-[-5px]">
                           <p className="text-sm text-white">
                             Lorem ipsum dolor sit amet, consetetur sadipscing
                             elitr, sed diam nonumy eirmod tempor invidunt ut
                             labore et dolore magna aliquyam erat, sed diam
                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="mb-[25px]">
                       <div className="flex gap-5">
                         <div>
                           <img src="/arrow-pointing-to-right.svg" alt="" />
                         </div>
                         <div className="mt-[-5px]">
                           <p className="text-sm text-white">
                             Lorem ipsum dolor sit amet, consetetur sadipscing
                             elitr, sed diam nonumy eirmod tempor invidunt ut
                             labore et dolore magna aliquyam erat, sed diam
                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="mb-[25px]">
                       <div className="flex gap-5">
                         <div>
                           <img src="/arrow-pointing-to-right.svg" alt="" />
                         </div>
                         <div className="mt-[-5px]">
                           <p className="text-sm text-white">
                             Lorem ipsum dolor sit amet, consetetur sadipscing
                             elitr, sed diam nonumy eirmod tempor invidunt ut
                             labore et dolore magna aliquyam erat, sed diam
                           </p>
                         </div>
                       </div>
                     </div>
                     <div></div>
                   </div>
                 </div>
                 <div className="flex gap-5 mt-4">
                   <div>
                     <img src="/left.svg" alt="" />
                   </div>
                   <div>
                     <img src="/right.svg" alt="" />
                   </div>
                 </div>
                 <div className="mt-10">
                   <button
                    onClick={()=> handelChange('desktop')}
                   className="button-re border border-white rounded-full px-10 py-2 flex gap-4 items-center text-white text-lg font-[500]">
                   <div className="w-[20px] h-[20px] mb-[-5px] rounded-full bg-white"></div>{" "}
                     <img src="/phone.svg" width={20} height={20} alt="" />
                      Mobile{" "}

                   </button>
                 </div>
               </div>
              
             </div>
           </div>
           <div className="py-[60px]">
             <div className="flex justify-center flex-wrap lg:flex-nowrap relative">
               <div className="relative    ">
               <div className="">
     
                   <div className="relative translate-x-0 lg:translate-x-[55%]">
                   <img src="/phone.svg"   className="relative z-[4]  w-[400px] xs:w-[400px] sm:w-[400px] md:w-[400px] lg:w-[400px] " alt="" />
                      
                       <img src="/phoneFrame.svg" className="absolute top-[25px] left-[27.5px] z[-1]" alt="" />
                       <img src="/trippro.com.hk_(iPhone X).png"  className="absolute top-[84px] z-[5] left-[28px] w-[246px] h-[288px]  " alt="" />
                 </div>
               </div>
               <div className="hidden lg:block absolute top-[50px] left-[-40px]">
                 <img src="/trippro.com.hk_(iPhone X).png" width={150} alt="" />
               </div>
               </div>
               <div className="button py-[30px] pl-[200px] pr-[50px]">
                 <div>
                   <p className="text-3xl text-white font-[600] mb-[40px]">
                     Their Old Website & Problems
                   </p>
                   <div>
                     <div className="mb-[25px]">
                       <div className="flex gap-5">
                         <div>
                           <img src="/arrow-pointing-to-right.svg" alt="" />
                         </div>
                         <div className="mt-[-5px]">
                           <p className="text-sm text-white">
                             Lorem ipsum dolor sit amet, consetetur sadipscing
                             elitr, sed diam nonumy eirmod tempor invidunt ut
                             labore et dolore magna aliquyam erat, sed diam
                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="mb-[25px]">
                       <div className="flex gap-5">
                         <div>
                           <img src="/arrow-pointing-to-right.svg" alt="" />
                         </div>
                         <div className="mt-[-5px]">
                           <p className="text-sm text-white">
                             Lorem ipsum dolor sit amet, consetetur sadipscing
                             elitr, sed diam nonumy eirmod tempor invidunt ut
                             labore et dolore magna aliquyam erat, sed diam
                           </p>
                         </div>
                       </div>
                     </div>
                     <div className="mb-[25px]">
                       <div className="flex gap-5">
                         <div>
                           <img src="/arrow-pointing-to-right.svg" alt="" />
                         </div>
                         <div className="mt-[-5px]">
                           <p className="text-sm text-white">
                             Lorem ipsum dolor sit amet, consetetur sadipscing
                             elitr, sed diam nonumy eirmod tempor invidunt ut
                             labore et dolore magna aliquyam erat, sed diam
                           </p>
                         </div>
                       </div>
                     </div>
                     <div></div>
                   </div>
                 </div>
                 <div className="flex gap-5 mt-4">
                   <div>
                     <img src="/left.svg" alt="" />
                   </div>
                   <div>
                     <img src="/right.svg" alt="" />
                   </div>
                 </div>
                 <div className="mt-10">
                   <button
                    onClick={()=> handelChange('desktop')}
                   className="button-re border border-white rounded-full px-10 py-2 flex gap-4 items-center text-white text-lg font-[500]">
                   <div className="w-[20px] h-[20px] mb-[-5px] rounded-full bg-white"></div>{" "}
                     <img src="/phone.svg" width={20} height={20} alt="" />
                      Mobile{" "}

                   </button>
                 </div>
               </div>
              
             </div>
           </div>
         
         </Slider>
           </div>
        }
    </div>
  );
};

export default SliderPageOne;
