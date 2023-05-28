import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { Fade } from "react-reveal";

const ApiIntegratePage = () => {
  const [data, setData] = useState<any[]>();
  const [recordPerPage, setRecordPerPage] = useState<number>(4);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [active, setActive] = useState<string | number>();

  async function httpGetPost() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  }

  const getData = useCallback(async () => {
    let res: any;
    res = await httpGetPost();
    if (res.status == 200) {
      setData(res.data);
      setIsLoading(false);
    }
  }, [recordPerPage]);

  useEffect(() => {
    getData();
  }, [getData]);

  function viewMore(): void {
    setIsLoading(true);
    setTimeout(() => {
      setRecordPerPage((prev: number) => {
        return prev + 3;
      });
    }, 1000);
  }

  function Active(val: string | number): void {
    setActive(val);
  }

  return (
    <div className="py-[95px] mx-auto lg:w-[1024px] 2xl:w-[1600px] ">
      <Fade delay={120} bottom>
        <div className="flex gap-5 justify-end items-center mb-12">
          <p className=" text-xl font-bold">
            OUR <span className="text-[#2DC4EA]">CHALLENGES</span>
          </p>
          <p className="text-xs text-red-500 mb-[-19px] font-bold w-[390px] ">
            I bind the the data with title field when you click the viewmore
            each api call can get the 3 api scroll and watch , can select
          </p>
        </div>
      </Fade>
      <div className="grid grid-cols-1  lg:grid-cols-2">
          <Fade delay={30} >
          <div className="relative z-[-10] ">
          <img src="/cube.png" alt="" />
        </div>
          </Fade>
        <div className="relative">
          <div
            className={`max-h-[400px]  px-5  overflow-x-hidden relative z-50 ${
              recordPerPage > 5 && "overflow-y-scroll"
            }`}
          >
            {data?.slice(0, recordPerPage)?.map((item, index) => {
              return (
                <div>
                   <Fade delay={150 + index} bottom>
                   <div
                    onClick={() => Active(item.id)}
                    key={item.id}
                    className={`py-5 px-4 shadow-lg mb-7 rounded flex items-center gap-4  cursor-pointer hover:scale-[1.1] ease-in-out transition-all duration-500 ${
                      active == item.id ? "button text-white" : ""
                    }`}
                  >
                    <p className="text-xl font-bold text-[#2DC4EA]">
                      {index + 1 >= 10 ? <>{index + 1}</> : <>0{index + 1}</>}
                    </p>
                    <p className="text-sm capitalize">
                      {item?.title?.length > 40 ? (
                        <>{item?.title?.substring(0, 30)}...</>
                      ) : (
                        <>{item?.title}</>
                      )}{" "}
                    </p>
                  </div>
                   </Fade>
                </div>
              );
            })}
            <div></div>
          </div>
          <div className="absolute z-[500] bottom-[5%] left-[40%]">
            {isLoading && (
              <>
                <LoadingSpinner />
              </>
            )}
          </div>
          <div className="mt-4">
            <button
              onClick={viewMore}
              className=" text-white font-[500] px-10 py-3 rounded-full button"
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiIntegratePage;
