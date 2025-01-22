import React, { useEffect, useState } from "react";
import Topnav from "./partials/Topnav";
import axios from "../Utils/axios";
import Cards from "./partials/Cards";
import Loader from "./Loader";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
  document.title = "CAPSTAB | Movies";
  const [movies, setmovies] = useState([]);
  const [category, setcategory] = useState("top_rated");
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const [scroll, setscroll] = useState(true);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setmovies((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refreshHandler = () => {
    if (movies.length === 0) {
      getMovies();
    } else {
      setpage(1);
      setmovies([]);
      getMovies();
    }
  };

  const scrollFunc = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset <= 500) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movies.length > 0 ? (
    <div className="absolute lg:pl-[17%] lg:w-[100%] w-full h-full">
      <Topnav />

      {/* Scroll to Top Button */}
      <div
        onClick={scrollFunc}
        className={`fixed bottom-8 right-8 cursor-pointer w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-lg ${
          scroll ? "hidden opacity-0" : "flex opacity-100"
        } transition-opacity duration-200`}
      >
        <i className="text-3xl text-[#6556CD] ri-arrow-up-s-line"></i>
      </div>

      <div className="flex flex-col gap-5 p-4 sm:p-8">
        {/* Header with Dropdown */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <h1 className="text-white text-2xl sm:text-3xl font-bold">Movies</h1>
          <div className="w-full sm:w-auto flex justify-end">
            <Dropdown
              func={(e) => setcategory(e.target.value)}
              title="Category"
              options={["top_rated", "popular", "now_playing", "upcoming"]}
            />
          </div>
        </div>

        {/* Movies List with Infinite Scroll */}
        <InfiniteScroll
          dataLength={movies.length}
          next={getMovies}
          hasMore={hasmore}
          loader={<Loader width={"5%"} />}
          style={{ overflow: "visible" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.map((movie, index) => (
              <Cards key={index} data={[movie]} title="movie" />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Movies;

























// import React, { useEffect, useState } from 'react'
// import Topnav from './partials/Topnav'
// import axios from '../Utils/axios';
// import Cards from './partials/Cards';
// import Loader from './Loader';
// import Dropdown from './partials/Dropdown';
// import InfiniteScroll from 'react-infinite-scroll-component';

// const Movies = () => {
//     document.title="CAPSTAB | Movies";
//   const [movies,setmovies] = useState([]);
//   const [category,setcategory] = useState("top_rated");
//   const [page,setpage] = useState(1);
//   const [hasmore, sethasmore] = useState(true)
//   const [scroll,setscroll] = useState(true);

//   const getMovies = async()=>{

//       try {
//           const {data} = await axios.get(`/movie/${category}?page=${page}`);
//           if(data.results.length > 0){
//               setmovies((prev)=>[...prev,...data.results]);
//               setpage(page + 1);
//           }
//           else{
//               sethasmore(false);
//           }
//       } catch (error) {
//           console.log("Error : ", error)
//       }
//   }

//   const refreshHandler = ()=>{
//       if(movies.length === 0){
//         getMovies();
//       }
//       else{
//           setpage(1);
//           setmovies([]);
//           getMovies();
//       }
//   }

//   const scrollFunc = ()=>{
//       window.scrollTo(0,0)
//   }

//   window.addEventListener("scroll",()=>{
//       if(window.pageYOffset <= 500){
//           setscroll(true);
//       }
//       else{
//           setscroll(false);
//       }
//   })

//   useEffect(()=>{
//       refreshHandler();
//   },[category])


// return movies.length>0 ? (
//   <div className='absolute left-[17%] w-[83%] h-full '>
//       <Topnav />

//       <div onClick={scrollFunc} className={`fixed top-[85%] left-[94%] cursor-pointer w-14 h-14 bg-white rounded-full justify-center items-center ${scroll ? "hidden opacity-0" : "flex opacity-100"} duration-200`}><i class="text-4xl text-[#6556CD] ri-arrow-up-s-line"></i></div>
      
//       <div className= 'flex flex-col gap-5 overflow-visible '>

//           <div className='px-5 w-full flex justify-between'>
//               <h1 className='text-white text-3xl font-bold'>Movies</h1>
//               <div className='flex gap-5'>
//                   <Dropdown  func={(e)=>setcategory(e.target.value)} title="Category" options={["top_rated","popular","now_playing","upcoming"]}  />
//               </div>
//           </div>

//           <InfiniteScroll
//               dataLength={movies.length}
//               next={getMovies}
//               hasMore={hasmore}
//               loader={<Loader width={"5%"} />}
//               style={{ overflow: 'visible' }}
//           >
//               < Cards data={movies} title='movie' />
//           </InfiniteScroll>


//       </div>
//   </div>
// ) : <Loader />
// }

// export default Movies
