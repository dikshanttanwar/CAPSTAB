import React, { useEffect, useState } from "react";
import Topnav from "./partials/Topnav";
import axios from "../Utils/axios";
import Header from "./partials/Header";
import TrendingCard from "./partials/TrendingCard";
import Loader from "./Loader";

const Home = () => {
  document.title = "CAPSTAB | Home";
  const [wallpaper, setWallpaper] = useState("");
  const [trending, setTrending] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popularMovie, setPopularMovie] = useState(null);
  const [popularTv, setPopularTv] = useState(null);
  const [category, setCategory] = useState("movie");
  const [wallCategory, setWallCategory] = useState("");

  const getTrendingWallpaper = async () => {
    try {
      const wallpaperCategory = Math.random() > 0.5 ? "movie" : "tv";
      setWallCategory(wallpaperCategory);
      const { data } = await axios.get(`/trending/${wallpaperCategory}/day`);
      const randomData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const getTrendingMovie = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const getUpcomingMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming`
      );
      setUpcoming(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular`
      );
      setPopularMovie(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getPopularTV = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/popular`
      );
      setPopularTv(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!wallpaper) getTrendingWallpaper();
    getTrendingMovie();
    getUpcomingMovies();
    getPopularMovies();
    getPopularTV();
  }, [category]);

  return wallpaper && trending ? (
    <div className="relative lg:ml-[17%] w-full lg:w-[83%] h-full">
      <Topnav />
      <Header data={wallpaper} category={wallCategory} />
      <div className="px-3 md:px-6 space-y-6">
        {/* Trending Section */}
        <TrendingCard px="px-3" py="py-3" data={trending} title={category} heading="Trending" func={(e) => setCategory(e.target.value)}
        />
        {/* Upcoming Movies */}
        <TrendingCard px="px-3" py="py-3" filter={true} data={upcoming} heading="Upcoming Movies" type="movie"/>

        {/* Popular Movies */}
        <TrendingCard px="px-3" py="py-3" filter={true} data={popularMovie} heading="Popular Movies" type="movie" />

        {/* Popular TV Shows */}
        <TrendingCard px="px-3" py="py-3" filter={true} data={popularTv} heading="Popular TV Shows" type="tv" />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;




















// import React, { useEffect, useState } from 'react'
// import SideNavbar from './partials/SideNavbar'
// import Topnav from './partials/Topnav'
// import axios from '../Utils/axios'
// import Header from './partials/Header'
// import TrendingCard from './partials/TrendingCard'
// import Loader from './Loader'

// const Home = () => {
//     document.title="CAPSTAB | Home";
//     const [wallpaper, setWallpaper] = useState("");
//     const [trending, settrending] = useState(null)
//     const [upcoming, setupcoming] = useState(null)
//     const [popularMovie, setpopularMovie] = useState(null)
//     const [popularTv, setpopularTv] = useState(null)
//     const [category, setcategory] = useState("movie")
//     const [wallCategory,setwallCategory] = useState("");
//     const getTrendingWallpaper = async()=>{
//         try {
//             const wallpaperCategory = Math.random() > 0.5 ? 'movie' : 'tv';
//             setwallCategory(wallpaperCategory);
//             const {data} = await axios.get(`/trending/${wallpaperCategory}/day`);
//             const randomData = data.results[Math.floor(Math.random() * data.results.length)];
//             setWallpaper(randomData);
//         } catch (error) {
//             console.log("Error : ", error)
//         }
//     }
//     const getTrendingMovie = async()=>{
//         try {
//             const {data} = await axios.get(`/trending/${category}/day`);
//             settrending(data.results);
//         } catch (error) {
//             console.log("Error : ", error)
//         }
//     }

//     const getUpcomingMovies = async()=>{
//         try {
//             const {data} = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`);
//             setupcoming(data.results);
//             console.log(data.results)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const getPopularMovies = async()=>{
//         try {
//             const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular`);
//             setpopularMovie(data.results);
//             console.log(data.results)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const getPopularTV = async()=>{
//         try {
//             const {data} = await axios.get(`https://api.themoviedb.org/3/tv/popular`);
//             setpopularTv(data.results);
//             console.log(data.results)
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     useEffect(()=>{
//         !wallpaper && getTrendingWallpaper();
//         getTrendingMovie();
//         getUpcomingMovies();
//         getPopularMovies();
//         getPopularTV();
//         // categoryTrendingSetter();
//     },[category])
    

//   return wallpaper && trending ? (
//     <>
//         {/* <SideNavbar /> */}
//         <div className='relative left-[17%] w-[83%] h-full'>
//             <Topnav />
//             <Header  data={wallpaper} category={wallCategory} />
//             <TrendingCard px={"px-3"} py={"py-3"} data={trending} title={category} heading={"Trending"} func={((e)=>setcategory(e.target.value))} />
//             <TrendingCard px={"px-3"} py={"py-3"} filter={true} data={upcoming && upcoming} heading={"Upcoming Movies"} type={"movie"}/>
//             <TrendingCard px={"px-3"} py={"py-3"} filter={true} data={popularMovie && popularMovie} heading={"Popular Movies"} type={"movie"}/>
//             <TrendingCard px={"px-3"} py={"py-3"} filter={true} data={popularTv && popularTv} heading={"Popular TV Shows"} type={"tv"}/>
//         </div>
//     </>
//   ) : <Loader />
// }

// export default Home
