const Navbar = () => {
  return (
    <div className="flex justify-between items-center md:p-4 p-2  ">
      <div className="flex items-center md:ml-[5rem]">
        <div className="text-xl ">
          {/* Add 'md:mr-4' for medium (md) and larger screens */}
          <img className="h-[75px] w-[80px]" src="/icon.png"></img>
        </div>
        <div
          className="ml-2 font-bold"
          style={{
            color: "#DB0000",
            fontFamily: "Libre Bodoni",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Lifelink
        </div>
      </div>
      <div className="flex md:mr-[2.5rem]">
        <button className="bg-gray-300 md:mr-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-full border-2 border-gray-300 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray active:bg-gray-500">
          Login
        </button>
        <button
          className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full border-2 border-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700"
          style={{
            boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.20)",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
