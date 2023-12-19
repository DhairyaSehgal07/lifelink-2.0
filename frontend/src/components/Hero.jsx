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
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      {isSmallScreen ? (
        <>
          <div>CIRCULAR IMAGE IN THIS DIV IN MOBILE VIEW</div>
        </>
      ) : (
        <>
          <section className="flex justify-center align-center bg-gray-200">
            <div className="m-2">this is the left side</div>
            <section className="flex m-8 bg-black text-white">
              <div className="flex m-8">
                <div
                  style={{ flexShrink: 0, borderRadius: "50%" }}
                  className="w-[240px] h-[240px] rounded-full bg-[#FF2323] flex flex-col justify-center align-center"
                >
                  <p>Every Drop</p> <br />
                  <p>COUNTS!</p>
                </div>
              </div>
              <div>This is the right of right section</div>
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default Hero;
