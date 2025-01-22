import React, { useEffect} from 'react'
import { useLocation, useNavigate, useParams} from 'react-router-dom'
import { asyncLoadtv, removetv } from '../store/actions/tvActions';
import {useDispatch, useSelector} from 'react-redux'
import Loader from './Loader';
import TrendingCard from './partials/TrendingCard';
import VideoPlayer from './partials/VideoPlayer';
import image from '../../public/no-image.jpg'
import CastCards from './partials/CastCards';


const DetailsTV = () => {
  const {pathname} = useLocation();
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {info} = useSelector((state)=>state.tv);
  document.title=`CAPSTAB | TV Shows | ${info ? info.details.name || info.details.title || info.details.original_title || info.details.original_name : ""} `;
  useEffect(()=>{
    dispatch(asyncLoadtv(id))
    return ()=>{
      dispatch(removetv())
    }
  },[id])
  return info ? (

    <div className='relative pl-5 lg:pl-[18%] w-[100%] h-full p-5 overflow-hidden overflow-y-auto'>

      {/* top details div */}
      <div className='flex flex-col w-full gap-5'>
        <div className='flex items-center justify-between '>
          <button onClick={()=>navigate(-1)}  className='ml-16 lg:ml-0 pl-2 pr-4 py-1 text-lg font-medium border-gray-300 border-[1px] rounded text-white '><i class="ri-arrow-left-s-line"></i>Back</button>

          <div className='flex gap-4'>
            <a target='_blank' className='text-white text-lg' href={info.details.homepage}><i class="ri-external-link-fill"></i></a>

            <a target='_blank' className='text-white text-lg'href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`} ><i class="ri-earth-fill"></i></a>

            <a target='_blank' className='text-white text-lg' href={`https://www.imdb.com/title/${info.externalids.imdb_id}`}>imdb</a>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-start lg:items-center gap-5'>
          <div className='flex flex-col w-full '>
            <h1 className='text-5xl font-black text-gray-200'>{info.details.name || info.details.title || info.details.original_title || info.details.original_name }</h1>
            <p className='text-base font-semibold text-gray-400 tracking-wide mt-2'>{info.details.tagline}</p>
            <p className='text-base font-semibold text-gray-400'>{pathname.includes("movie") ? "Movie" : "TV Series"} <sup className='font-black'>.</sup> {info.details.first_air_date.split("-")[0]} {"-"} {info.details.last_air_date && info.details.last_air_date.split("-")[0]} <sup className='font-black'>{info.details.episode_run_time.length>0 && "."}</sup> {info.details.episode_run_time[0]} {info.details.episode_run_time.length>0 &&"mins"}</p>
          </div>

          <div className='flex gap-3 w-full justify-center md:justify-end'>
              <div>
                <h1 className='text-sm font-bold tracking-widest text-gray-400 text-center '>SEASONS</h1>
                <p className='text-gray-200 text-2xl font-bold text-center'>{info.details.number_of_seasons}</p>
              </div>
              <div>
                <h1 className='text-sm font-bold tracking-widest text-gray-400 text-center '>EPISODES</h1>
                <p className='text-gray-200 text-2xl font-bold text-center'>{info.details.number_of_episodes}</p>
              </div>
              <div>
                <h1 className='text-sm font-bold tracking-widest text-gray-400 text-center '>AVG RATING</h1>
                <p className='text-gray-200 text-2xl font-bold'><i class="text-[#f6ca2a]  ri-star-fill"></i> {info.details.vote_average.toFixed(1)} <small className='text-gray-400 text-xl'>/10</small></p>
              </div>
          </div>

        </div>
      </div>

      {/* poster & trailer div */}
      <div className='w-[100%] py-5 flex md:flex-row flex-col gap-5 md:gap-2 h-full md:h-[35%] lg:h-[70%] items-center'>

        <div className='rounded overflow-hidden min-h-[60%] md:h-[100%] w-[80%] sm:w-[40%] md:w-[33%] flex items-center justify-center'>
          <img className='rounded h-full w-full object-cover hover:scale-[102%] duration-200 overflow-hidden' src={`https://image.tmdb.org/t/p/original/${ info.details.poster_path || info.details.backdrop_path || info.details.profile_path})`} alt="" />
        </div>

        <div 
        style={{
          background:` linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),
          url(https://image.tmdb.org/t/p/original/${ info.details.backdrop_path || info.details.poster_path || info.details.profile_path})`, backgroundPosition:"center top-[0%]", backgroundSize:"cover",backgroundRepeat:"no-repeat"
        }}
        className='w-full h-full rounded overflow-hidden bg-gray-300'>

          {info.videos ? <VideoPlayer id={info.videos.key} backgroundImage={`https://image.tmdb.org/t/p/original/${ info.details.backdrop_path || info.details.poster_path || info.details.profile_path}`} /> : ""}

        </div>

      </div>



      {/* Bottom Info and Streaming div*/}

      <div className='mb-3'>
        {/* genres column div */}
        <div className='flex flex-wrap gap-3'>
          {info.details.genres.map((e,k)=>(
            <h1 key={k} className='cursor-pointer px-4 py-1 border-[1px] border-gray-200 text-gray-200 font-medium text-sm rounded-full'>{e.name}</h1>
          ))}
        </div>

          {/* Bottom Info and Streaming */}
        <div className='flex flex-col md:flex-row gap-5 py-5 justify-start'>
          {/* Information Corner */}
          <div className='flex flex-col gap-2 py-5 w-full md:w-full'>
            {info.details.created_by.length>0 ? <p className='font-bold text-gray-200 text-justify leading-5'> Creator : <span className='font-normal'>{info.details.created_by.map((e)=>(e.name)).join(", ")}</span> </p> : ""}
            {info.details.created_by.length>0 ? <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full'/> : ""}         
            <p className='font-bold text-gray-200 text-justify leading-5'> Overview : <span className='font-normal'>{info.details.overview}</span> </p>
            <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
            <p className='font-bold text-gray-200 text-justify leading-5'> Translations : <span className='font-normal'>{info.translations.join(", ")}</span> </p>
            <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
            <p className='font-bold text-gray-200 text-justify leading-5'> Release Date : <span className='font-normal'>{info.details.first_air_date}</span> </p>
            <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
            <p className='font-bold text-gray-200 text-justify leading-5'> Production Companies : <span className='font-normal'>{info.details.production_companies.map((e)=>(e.name)).join(", ")}</span> </p>
          </div>
          
          {/* streaming corner */}

          {info.watchprovider ?
          <div className='flex flex-row gap-6 w-full md:max-w-fit md:flex-col justify-evenly'>
            <div className='flex flex-col gap-2'>
              <h1 className='font-semibold text-[#f6ca2a] text-justify tracking-wider'>STREAMING AT</h1>
              <div className='flex gap-2 rounded overflow-hidden'> 
                {info.watchprovider.flatrate ? info.watchprovider.flatrate.map((item,key)=>(
                  <img key={key} className=' cursor-pointer w-8 h-8 object-cover rounded hover:scale-105 duration-200 overflow-hidden'
                  src={`https://image.tmdb.org/t/p/original/${ item.logo_path})`} alt="" title={item.provider_name} /> 
                )) : <h1 className='font-semibold text-gray-200 text-justify leading-5'>Not available!</h1>} 
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h1 className='font-semibold text-[#f6ca2a] text-justify tracking-wider'>BUY AT</h1>
              <div className='flex gap-2 rounded overflow-hidden'> 
                {info.watchprovider.buy ? info.watchprovider.buy.map((item,key)=>(
                  <img key={key} className=' cursor-pointer w-8 h-8 object-cover rounded hover:scale-105 duration-200 overflow-hidden'
                  src={`https://image.tmdb.org/t/p/original/${ item.logo_path})`} alt="" title={item.provider_name} /> 
                )) : <h1 className='font-semibold text-gray-200 text-justify leading-5'>Not available!</h1>} 
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h1 className='font-semibold text-[#f6ca2a] text-justify tracking-wider'>RENT AT</h1>
              <div className='flex gap-2 rounded overflow-hidden'> 
                {info.watchprovider.rent ? info.watchprovider.rent.map((item,key)=>(
                  <img key={key} className=' cursor-pointer w-8 h-8 object-cover rounded hover:scale-105 duration-200 overflow-hidden'
                  src={`https://image.tmdb.org/t/p/original/${ item.logo_path})`} alt="" title={item.provider_name} /> 
                )) : <h1 className='font-semibold text-gray-200 text-justify leading-5'>Not available!</h1>} 
              </div>
            </div> 
          </div>
          : <h1 className='font-semibold text-[#f6ca2a] text-justify tracking-wider'>Streaming Partners not available!</h1>}

        </div>
          
      </div>
      
      <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />

      {/* Similar content div */}
      <div className='mt-3 flex flex-col '>
        
        <div className='w-full h-[395px] flex gap-3 flex-col py-3'>
          <h1 className='text-gray-400 font-bold text-2xl'>Seasons</h1>
          <div className='w-full h-[390px] flex gap-3 overflow-x-auto utility overflow-y-hidden'>
            {info.details.seasons && info.details.seasons.map((item,key)=>(
              <div key={key} className='group relative min-w-56 max-w-52 h-80 rounded border-[1px] border-gray-500 duration-200 overflow-hidden cursor-pointer'>
                <img src={item.backdrop_path || item.profile_path|| item.poster_path ? `https://image.tmdb.org/t/p/original/${ item.poster_path ||item.backdrop_path || item.profile_path})` : image} className='w-full h-full object-cover' alt="" />

                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#00000059] transparent flex-col justify-end  px-[4%] py-[4%] flex opacity-0 group-hover:opacity-100 duration-200 `}>
                  <h1 className='text-lg font-black text-white line-clamp-1'>{item.name || item.title || item.original_title || item.original_name }</h1>   
                </div>

              </div>
            ))}
          </div>
        </div>

        {info.credits.cast.length>0 ? <CastCards data={info.credits.cast} title={"Cast"} /> : "" }
        {info.credits.crew.length>0 ? <CastCards data={info.credits.crew} title={"Crew"} /> : "" }

        {info.recommendations.length>0 || info.similar.length>0 ? <TrendingCard  data={info.recommendations.length>0 ? info.recommendations : info.similar } type={"tv"} heading={"More content like this"} /> : "" }
        
      </div>

    </div>
  ): <Loader />;
}

export default DetailsTV
