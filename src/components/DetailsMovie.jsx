import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncLoadMovie, removeMovie } from '../store/actions/MovieActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import TrendingCard from './partials/TrendingCard';
import VideoPlayer from './partials/VideoPlayer';
import CastCards from './partials/CastCards';

const DetailsMovie = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);

  document.title = `CAPSTAB | Movies | ${info ? info.details.name || info.details.title || info.details.original_title || info.details.original_name : ""}`;

  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, [id]);

  return info ? (
    <div className="relative pl-5 lg:pl-[18%] w-[100%] h-full p-5 overflow-hidden overflow-y-auto">
      
      {/* Top details div */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="ml-16 lg:ml-0 pl-2 pr-4 py-1 text-lg font-medium border-gray-300 border-[1px] rounded text-white">
            <i className="ri-arrow-left-s-line"></i>Back
          </button>
          <div className="flex gap-4">
            <a target="_blank" className="text-white text-lg" href={info.details.homepage}><i className="ri-external-link-fill"></i></a>
            <a target="_blank" className="text-white text-lg" href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`}><i className="ri-earth-fill"></i></a>
            <a target="_blank" className="text-white text-lg" href={`https://www.imdb.com/title/${info.externalids.imdb_id}`}>IMDb</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start lg:items-center gap-5">

          <div className="flex flex-col w-full  ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-200">{info.details.name || info.details.title || info.details.original_title || info.details.original_name}</h1>
            <p className="text-base font-semibold text-gray-400 tracking-wide mt-2">{info.details.tagline}</p>
            <p className="text-base font-semibold text-gray-400">
              {pathname.includes("movie") ? "Movie" : "TV Series"} <sup className="font-black">.</sup> {info.details.release_date.split("-")[0]} <sup className="font-black">.</sup> {info.details.runtime} mins
            </p>
          </div>

          <div className="flex flex-col items-center md:min-w-fit md:items-end ">
            <h1 className="text-sm font-semibold text-gray-400 uppercase tracking-widest text-center mb-1">Avg Rating</h1>
            <p className="text-gray-200 text-3xl font-extrabold">
              <i className="text-[#f6ca2a] ri-star-fill"></i> {info.details.vote_average.toFixed(1)} <small className="text-gray-400 text-lg">/10</small>
            </p>
          </div>
          
        </div>


      </div>

      {/* Poster & Trailer div */}
      <div className="w-[100%] py-5 flex md:flex-row flex-col gap-5 md:gap-2 h-full md:h-[50vh] lg:h-[70vh] items-center">

        <div className="rounded overflow-hidden min-h-[55%] md:min-h-[60%] md:h-[100%] w-[90%] sm:w-[40%] md:w-[33%] flex items-center justify-center ">
          <img className="rounded h-full w-full object-cover hover:scale-105 transition duration-200" src={`https://image.tmdb.org/t/p/original/${info.details.poster_path || info.details.backdrop_path || info.details.profile_path}`} alt="" />
        </div>

        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path || info.details.poster_path || info.details.profile_path})`,
            backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat"
          }}
          className="w-full h-full rounded overflow-hidden bg-gray-300"
        >
          {info.videos && info.videos.key ? (
            <VideoPlayer id={info.videos.key} backgroundImage={`https://image.tmdb.org/t/p/original/${info.details.backdrop_path || info.details.poster_path || info.details.profile_path}`} />
          ) : ""}

        </div>

      </div>

      {/* Genres and Bottom Info */}
      <div className="mb-3">
        {/* Genres */}
        <div className="flex flex-wrap gap-3">
          {info.details.genres.map((e, k) => (
            <h1 key={k} className="cursor-pointer px-4 py-1 border-[1px] border-gray-200 text-gray-200 font-medium text-sm rounded-full">{e.name}</h1>
          ))}
        </div>

        {/* Bottom Information */}
        <div className="flex flex-col md:flex-row gap-5 py-5 justify-start">
          {/* Information Column */}
          <div className="flex flex-col gap-2 py-5 w-full md:w-full">
            <p className="font-bold text-gray-200 text-justify leading-5">Overview: <span className="font-normal">{info.details.overview}</span></p>
            <hr className="my-2 h-[1px] bg-gray-600 rounded-full" />
            <p className="font-bold text-gray-200 text-justify leading-5">Translations: <span className="font-normal">{info.translations.join(", ")}</span></p>
            <hr className="my-2 h-[1px] bg-gray-600 rounded-full" />
            <p className="font-bold text-gray-200 text-justify leading-5">Release Date: <span className="font-normal">{info.details.release_date}</span></p>
            <hr className="my-2 h-[1px] bg-gray-600 rounded-full" />
            <p className="font-bold text-gray-200 text-justify leading-5">Production Companies: <span className="font-normal">{info.details.production_companies.map((e) => e.name).join(", ")}</span></p>
          </div>

          {/* Streaming Providers */}
          {info.watchprovider ? (
            <div className="flex flex-row gap-6 w-full md:max-w-fit md:flex-col justify-evenly ">
              {/* STREAMING AT */}
              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-semibold text-[#f6ca2a] tracking-wider">Streaming At</h1>
                <div className="flex gap-4 flex-wrap">
                  {info.watchprovider.flatrate ? info.watchprovider.flatrate.map((item, key) => (
                    <img
                      key={key}
                      className="w-8 h-8 lg:w-10 lg:h-10 object-cover rounded-lg hover:scale-105 transition duration-200"
                      title={item.provider_name}
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt={item.provider_name}
                    />
                  )) : <h1 className="text-gray-200">Not available!</h1>}
                </div>
              </div>

              {/* BUY AT */}
              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-semibold text-[#f6ca2a] tracking-wider">Buy At</h1>
                <div className="flex gap-4 flex-wrap">
                  {info.watchprovider.buy ? info.watchprovider.buy.map((item, key) => (
                    <img
                      key={key}
                      className="w-8 h-8 lg:w-10 lg:h-10 object-cover rounded-lg hover:scale-105 transition duration-200"
                      title={item.provider_name}
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt={item.provider_name}
                    />
                  )) : <h1 className="text-gray-200">Not available!</h1>}
                </div>
              </div>

              {/* RENT AT */}
              <div className="flex flex-col gap-3">
                <h1 className="text-xl font-semibold text-[#f6ca2a] tracking-wider">Rent At</h1>
                <div className="flex gap-4 flex-wrap">
                  {info.watchprovider.rent ? info.watchprovider.rent.map((item, key) => (
                    <img
                      key={key}
                      className="w-8 h-8 lg:w-10 lg:h-10 object-cover rounded-lg hover:scale-105 transition duration-200"
                      title={item.provider_name}
                      src={`https://image.tmdb.org/t/p/original/${item.logo_path}`}
                      alt={item.provider_name}
                    />
                  )) : <h1 className="text-gray-200">Not available!</h1>}
                </div>
              </div>
            </div>
          ) : (
            <h1 className="font-semibold text-[#f6ca2a] text-lg">Streaming Partners Not Available!</h1>
          )}
        </div>
      </div>

      <hr className="my-3 h-[1px] bg-gray-600 rounded-full" />

      {/* Similar Content */}
      <div className="mt-3">
        {info.credits.cast.length > 0 && <CastCards data={info.credits.cast} title={"Cast"} />}
        {info.credits.crew.length > 0 && <CastCards data={info.credits.crew} title={"Crew"} />}
        {(info.recommendations.length > 0 || info.similar.length > 0) && (
          <TrendingCard data={info.recommendations.length > 0 ? info.recommendations : info.similar} type={"movie"} heading={"More content like this"} />
        )}
      </div>
    </div>
  ) : <Loader />;
};

export default DetailsMovie;






















// import React, { useEffect} from 'react'
// import { useLocation, useNavigate, useParams} from 'react-router-dom'
// import { asyncLoadMovie, removeMovie } from '../store/actions/MovieActions';
// import {useDispatch, useSelector} from 'react-redux'
// import Loader from './Loader';
// import TrendingCard from './partials/TrendingCard';
// import VideoPlayer from './partials/VideoPlayer';
// import CastCards from './partials/CastCards';

// const DetailsMovie = () => {
//   const {pathname} = useLocation();
//   const {id} = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {info} = useSelector((state)=>state.movie);
//   document.title=`CAPSTAB | Movies | ${info ? info.details.name || info.details.title || info.details.original_title || info.details.original_name : ""} `;
//   console.log(info)
//   useEffect(()=>{
//     dispatch(asyncLoadMovie(id))
//     return ()=>{
//       dispatch(removeMovie())
//     }
//   },[id])

//   return info ? (
//     <div className='absolute left-[17%] w-[83%] h-full p-5 overflow-hidden overflow-y-auto'>

//       {/* top details div */}
//       <div className='flex flex-col w-full gap-5'>
//         <div className='flex items-center justify-between '>
//           <button onClick={()=>navigate(-1)}  className='pl-2 pr-4 py-1 text-lg font-medium border-gray-300 border-[1px] rounded text-white '><i class="ri-arrow-left-s-line"></i>Back</button>

//           <div className='flex gap-4'>
//             <a target='_blank' className='text-white text-lg' href={info.details.homepage}><i class="ri-external-link-fill"></i></a>

//             <a target='_blank' className='text-white text-lg'href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`} ><i class="ri-earth-fill"></i></a>

//             <a target='_blank' className='text-white text-lg' href={`https://www.imdb.com/title/${info.externalids.imdb_id}`}>imdb</a>
//           </div>
//         </div>

//         <div className='flex justify-between items-center pr-10'>
//           <div className='flex flex-col'>
//             <h1 className='text-5xl font-black text-gray-200'>{info.details.name || info.details.title || info.details.original_title || info.details.original_name }</h1>
//             <p className='text-base font-semibold text-gray-400 tracking-wide mt-2'>{info.details.tagline}</p>
//             <p className='text-base font-semibold text-gray-400'>{pathname.includes("movie") ? "Movie" : "TV Series"} <sup className='font-black'>.</sup> {info.details.release_date.split("-")[0]} <sup className='font-black'>.</sup> {info.details.runtime} {"mins"}</p>
//           </div>

//           <div>
//               <div>
//                 <h1 className='text-sm font-bold tracking-widest text-gray-400 text-center '>AVG RATING</h1>
//                 <p className='text-gray-200 text-2xl font-bold'><i class="text-[#f6ca2a]  ri-star-fill"></i> {info.details.vote_average.toFixed(1)} <small className='text-gray-400 text-xl'>/10</small></p>
//               </div>
//           </div>

//         </div>
//       </div>

//       {/* poster & trailer div */}
//       <div className='w-[100%] py-5 flex gap-2 h-[70%]'>

//         <div className='rounded overflow-hidden w-[33%]'>
//           <img className='rounded h-full w-full object-cover hover:scale-[102%] duration-200 overflow-hidden' src={`https://image.tmdb.org/t/p/original/${ info.details.poster_path || info.details.backdrop_path || info.details.profile_path})`} alt="" />
//         </div>

//         <div 
//         style={{
//           background:` linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),
//           url(https://image.tmdb.org/t/p/original/${ info.details.backdrop_path || info.details.poster_path || info.details.profile_path})`, backgroundPosition:"center top-[0%]", backgroundSize:"cover",backgroundRepeat:"no-repeat"
//         }}
//         className='w-full h-full rounded overflow-hidden bg-gray-300'>

//           {info.videos ? <VideoPlayer id={info.videos.key} backgroundImage={`https://image.tmdb.org/t/p/original/${ info.details.backdrop_path || info.details.poster_path || info.details.profile_path}`} /> : ""}

//         </div>

//       </div>



//       {/* Bottom Info and Streaming div*/}

//       <div className='mb-3'>
//         {/* genres column div */}
//         <div className='w-full flex gap-3'>
//           {info.details.genres.map((e,k)=>(
//             <h1 key={k} className='cursor-pointer px-4 py-1 border-[1px] border-gray-200 text-gray-200 font-medium text-sm rounded-full'>{e.name}</h1>
//           ))}
//         </div>

//           {/* Bottom Info and Streaming */}
//         <div className='w-full flex gap-3'>
//           {/* Information Corner */}
//           <div className='flex flex-col gap-3 py-5 w-[75%]'>
//             <p className='font-bold text-gray-200 text-justify leading-5'> Overview : <span className='font-normal'>{info.details.overview}</span> </p>
//             <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
//             <p className='font-bold text-gray-200 text-justify leading-5'> Translations : <span className='font-normal'>{info.translations.join(", ")}</span> </p>
//             <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
//             <p className='font-bold text-gray-200 text-justify leading-5'> Release Date : <span className='font-normal'>{info.details.release_date}</span> </p>
//             <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
//             <p className='font-bold text-gray-200 text-justify leading-5'> Production Companies : <span className='font-normal'>{info.details.production_companies.map((e,i)=>(e.name)).join(", ")}</span> </p>
//           </div>
          
//           {/* streaming corner */}

//           {info.watchprovider ?
//           <div className='flex flex-col gap-4 p-3'>
//             <div className='flex flex-col gap-2'>
//               <h1 className='font-semibold text-[#f6ca2a] text-justify tracking-wider'>STREAMING AT</h1>
//               <div className='flex gap-2 rounded overflow-hidden'> 
//                 {info.watchprovider.flatrate ? info.watchprovider.flatrate.map((item,key)=>(
//                   <img key={key} className=' cursor-pointer w-8 h-8 object-cover rounded hover:scale-105 duration-200 overflow-hidden' title={item.provider_name}
//                   src={`https://image.tmdb.org/t/p/original/${ item.logo_path})`} alt="" /> 
//                 )) : <h1 className='font-semibold text-gray-200 text-justify leading-5'>Not available!</h1>} 
//               </div>
//             </div>

//             <div className='flex flex-col gap-2'>
//               <h1 className='font-semibold text-[#f6ca2a] text-justify tracking-wider'>BUY AT</h1>
//               <div className='flex gap-2 rounded overflow-hidden'> 
//                 {info.watchprovider.buy ? info.watchprovider.buy.map((item,key)=>(
//                   <img key={key} className=' cursor-pointer w-8 h-8 object-cover rounded hover:scale-105 duration-200 overflow-hidden' title={item.provider_name}
//                   src={`https://image.tmdb.org/t/p/original/${ item.logo_path})`} alt="" /> 
//                 )) : <h1 className='font-semibold text-gray-200 text-justify leading-5'>Not available!</h1>} 
//               </div>
//             </div>

//             <div className='flex flex-col gap-2'>
//               <h1 className='font-semibold text-[#f6ca2a] text-justify tracking-wider'>RENT AT</h1>
//               <div className='flex gap-2 rounded overflow-hidden'> 
//                 {info.watchprovider.rent ? info.watchprovider.rent.map((item,key)=>(
//                   <img key={key} className=' cursor-pointer w-8 h-8 object-cover rounded hover:scale-105 duration-200 overflow-hidden' title={item.provider_name}
//                   src={`https://image.tmdb.org/t/p/original/${ item.logo_path})`} alt="" /> 
//                 )) : <h1 className='font-semibold text-gray-200 text-justify leading-5'>Not available!</h1>} 
//               </div>
//             </div> 
//           </div>
//           : <h1 className='font-semibold text-[#f6ca2a] text-justify tracking-wider'>Streaming Partners not available!</h1>}

//         </div>
          
//       </div>
      
//       <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />

//       {/* Similar content div */}
//       <div className='mt-3'>
//         {info.credits.cast.length>0 ? <CastCards data={info.credits.cast} title={"Cast"} /> : "" }
//         {info.credits.crew.length>0 ? <CastCards data={info.credits.crew} title={"Crew"} /> : "" }

//         {info.recommendations.length>0 || info.similar.length>0 ? <TrendingCard  data={info.recommendations.length>0 ? info.recommendations : info.similar } type={"movie"} heading={"More content like this"} /> : "" }
//       </div>

//     </div>
//   ): <Loader />;
// } 

// export default DetailsMovie
