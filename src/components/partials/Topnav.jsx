import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../Utils/axios";
import image from "../../../public/no-image.jpg";

const Topnav = () => {
  const [value, setValue] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const getSearches = async () => {
    try {
      if (value.trim() === "") return;
      const { data } = await axios.get(`/search/multi?query=${value}`);
      setMovieData(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getSearches();
    }, 500); // Add debounce delay to reduce API calls
    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  return (
    <div className="relative w-full h-[10vh] flex justify-center items-center px-4 md:px-8 z-10 bg-[#1F1E24] border-b border-gray-700">
      {/* Search Icon */}
      <i className="text-2xl text-zinc-400 ri-search-line"></i>

      {/* Search Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)} // Delay hiding for link click
        placeholder="Search anything here..."
        className="placeholder:font-normal w-[50%] text-zinc-200 text-medium font-normal px-4 py-2 mx-5 outline-none border-[1px] bg-transparent border-zinc-400 rounded focus:border-[#6556CD] transition duration-200"
        spellCheck={false}
      />

      {/* Clear Button */}
      <div className="w-5 h-5 flex justify-center items-center">
        <i
          onClick={() => setValue("")}
          className={`cursor-pointer text-2xl text-zinc-400 ri-close-fill ${
            value.length > 0 ? "flex" : "hidden"
          }`}
        ></i>
      </div>

      {/* Search Results Dropdown */}
      <div
        className={`absolute w-[90%] md:w-[47%] max-h-96 border border-zinc-700 top-[100%] left-[5%] md:left-[27%] md:right-8 flex flex-col gap-2 overflow-auto pr-2 ${
          isSearchFocused && value.length > 0 ? "block" : "hidden"
        } bg-[#1F1E24] rounded-lg shadow-md z-20`}
      >
        {movieData &&
          movieData.map((e, i) => (
            <Link
              to={`/${e.media_type}/details/${e.id}`}
              key={i}
              className="px-5 py-3 text-white font-medium flex items-center border-b border-zinc-600 last:border-b-0 hover:bg-[#17161b] duration-200"
            >
              {/* Thumbnail */}
              <div className="w-16 h-16 bg-fuchsia-200 rounded-full mr-3">
                <img
                  src={
                    e.poster_path || e.backdrop_path || e.profile_path
                      ? `https://image.tmdb.org/t/p/w500${
                          e.profile_path || e.poster_path || e.backdrop_path
                        }`
                      : image
                  }
                  className="w-full h-full object-cover rounded"
                  alt={e.name || e.title || "Thumbnail"}
                />
              </div>
              {/* Title */}
              <h1 className="text-zinc-400 font-normal text-lg line-clamp-1">
                {e.name || e.title || e.original_title || e.original_name}
              </h1>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Topnav;


































// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "../../Utils/axios";
// import image from '../../../public/no-image.jpg'

// const Topnav = () => {
//   const [value, setValue] = useState("");
//   const [movieData, setMovieData] = useState(null);
  
//   const getSearches = async () => {
//     try {
//       const {data} = await axios.get(`/search/multi?query=${value}`);
//       setMovieData(data.results);
//     } catch (error) {
//       console.log("Error : ", error);
//     }
//   };

//   useEffect(() => {
//     getSearches();
//   }, [value]);

//   return (
//     <div className="relative w-full h-[10vh] flex justify-center items-center py-3 z-10">

//       <i class="text-2xl text-zinc-400 ri-search-line"></i>

//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         placeholder="Search anything here..."
//         className="placeholder:font-normal w-[50%] text-zinc-200 text-medium font-normal px-4 py-2 mx-5 outline-none border-[1px] bg-transparent border-zinc-400 rounded"
//         spellCheck={false}
//       />

//       <div className="w-5 h-5 flex justify-center items-center">
//         <i onClick={() => setValue("")} class={`cursor-pointer text-2xl text-zinc-400 ri-close-fill ${value.length > 0 ? "flex" : "hidden"}`}></i>
//       </div>

//       <div className={`absolute w-[47%] max-h-96 border-[10px] border-[#1F1E24] top-[100%] flex flex-col gap-2 overflow-auto pr-2 ${ value.length > 0 ? "inline-block" : "hidden"} bg-[#1F1E24] `} >

//         {movieData && movieData.map((e,i) => (
//             <Link to={`/${e.media_type}/details/${e.id}`} key={i} className="px-5 py-3 text-white font-medium flex items-center border-[1px] border-zinc-600 rounded hover:bg-[#17161b] duration-200">
//               <div className="w-16 h-16 bg-fuchsia-200 rounded-full mr-3">
//                 <img
//                   src={e.poster_path || e.backdrop_path || e.profile_path ? `https://image.tmdb.org/t/p/w500${ e.profile_path|| e.poster_path || e.backdrop_path}` : image}
//                   className="w-full h-full object-cover rounded"
//                   alt=""
//                 />
//               </div>
//               <h1 className="text-zinc-400 font-normal text-lg line-clamp-1 ">
//                 {e.name || e.title || e.original_title || e.original_name }
//               </h1>
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Topnav;
