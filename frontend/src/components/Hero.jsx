import { useState, useEffect } from "react";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effectd only once

  return (
    <>
      {isSmallScreen ? (
        <>
          <div>CIRCULAR IMAGE IN THIS DIV IN MOBILE VIEW</div>
        </>
      ) : (
        <>
          <section className="flex justify-center align-center ">
            <div className="m-8">
              <aside className="m-8 mt-[18rem]">
                <p className="p-2 text-black font-Gowun-Batang text-5xl font-bold">
                  Be a Hero
                </p>
                <p className="p-2 text-black font-Gowun-Batang text-4xl  font-normal">
                  Your blood can save a precious life.
                </p>
              </aside>
              <button className="lg:h-[50px] lg:w-[315px] bg-[#FF1616;] ml-[2rem] mt-[4rem]">
                <p className="text-white font-Gowun-Batang text-lg font-bold">
                  Find the nearest donation centers
                </p>
              </button>
            </div>
            <section className="flex  text-white">
              <div className="flex m-8">
                <div className="w-[240px] h-[240px] rounded-full bg-[#FF2323] flex flex-col justify-center items-center relative lg:left-[13rem] lg:top-10">
                  <p className="text-white font-Gowun-Batang text-[2.2rem] font-normal text-center">
                    Every Drop
                  </p>
                  <p className="text-white font-IBM-Plex-Sans-Condensed text-[2.8rem] italic font-bold text-center mt-2">
                    Counts !
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-full sm:w-1/2 md:w-1/3 lg:h-[720px] lg:w-[650px]  "
                  src="./ellipse1.png"
                  alt="Ellipsis"
                />
              </div>
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default Hero;
