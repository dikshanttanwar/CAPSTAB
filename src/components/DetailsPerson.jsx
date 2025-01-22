import React, { useEffect} from 'react'
import { useLocation, useNavigate, useParams} from 'react-router-dom'
import { asyncLoadperson, removeperson } from '../store/actions/PersonActions';
import {useDispatch, useSelector} from 'react-redux'
import Loader from './Loader';
import image from '../../public/no-image.jpg'
import TrendingCard from './partials/TrendingCard';
import VideoPlayer from './partials/VideoPlayer';
import CastCards from './partials/CastCards';

const DetailsPerson = () => {
  const {pathname} = useLocation();
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {info} = useSelector((state)=>state.person);
  document.title=`CAPSTAB | Peoples | ${info ? info.details.name || info.details.title || info.details.original_title || info.details.original_name : ""} `;
  useEffect(()=>{
    dispatch(asyncLoadperson(id))
    return ()=>{
      dispatch(removeperson())
    }
  },[id])

  return info ? (
    <div className='relative pl-5 lg:pl-[18%] w-[100%]  p-5 overflow-hidden overflow-y-auto'>

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

        <div className='flex flex-col md:flex-row justify-between items-start md:items-center pr-10'>
          <div className='flex flex-col w-full'>
            <h1 className='text-4xl md:text-5xl font-black text-gray-200 w-full'>{info.details.name || info.details.title || info.details.original_title || info.details.original_name }</h1>
            <p className='text-lg font-semibold text-gray-400 tracking-wider'> {info.details.known_for_department} </p>
            {/* <sup className='font-black'>.</sup> */}
          </div>

          <div className='w-full flex justify-center md:justify-end'>
              {info.externalids.length>0 ? <div>
                <h1 className='text-sm font-bold tracking-widest text-gray-400 text-center '>SOCIAL LINKS</h1>
                <div className='flex justify-evenly text-3xl'>

                  {info.externalids.instagram_id ? <a className='text-gray-200' target='_blank' href={`https://www.instagram.com/${info.externalids.instagram_id}`}><i class="ri-instagram-line hover:text-[#6556cd] duration-200"></i></a> : ""}

                  {info.externalids.facebook_id ? <a className='text-gray-200' target='_blank' href={`https://www.facebook.com/${info.externalids.facebook_id}`}><i class="ri-facebook-box-line hover:text-[#6556cd] duration-200"></i></a> : "" }

                  {info.externalids.twitter_id ? <a className='text-gray-200' target='_blank' href={`https://x.com/${info.externalids.twitter_id}`}><i class="ri-twitter-x-line hover:text-[#6556cd] duration-200"></i></a> : "" }

                  { info.externalids.youtube_id ? <a className='text-gray-200' target='_blank' href={`https://www.youtube.com/@${info.externalids.youtube_id}`}><i class="ri-youtube-line hover:text-[#6556cd] duration-200"></i></a> : ""}

                </div>
              </div> : "" }

          </div>

        </div>
      </div>

      {/* poster & details div */}
      <div className='w-[100%] md:h-[45vh] lg:h-[70vh] py-5 flex md:flex-row flex-col gap-5 md:gap-2 items-center md:items-start overflow-hidden  '>

        <div className='rounded overflow-hidden w-[60%] sm:w-[40%] lg:w-[28%] h-[100%]  '>
          <img className='rounded h-full w-full object-cover hover:scale-[102%] duration-200 overflow-hidden' src={info.details.profile_path ? `https://image.tmdb.org/t/p/original/${info.details.profile_path || info.details.poster_path || info.details.backdrop_path})` : image} alt="" />
        </div>

        <div className='flex flex-col gap-3 justify-start w-full md:w-[70%] lg:w-[72%] '>
            <h1 className='text-5xl font-black text-gray-200 hidden md:block'>{info.details.name || info.details.title || info.details.original_title || info.details.original_name }</h1>
            <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
            <p className='text-lg font-bold text-gray-200 text-justify leading-5'> Gender : <span className='font-normal'>{info.details.gender === 1 ? "Female" : "Male"}</span> </p>
            <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
            <p className='text-lg font-bold text-gray-200 text-justify leading-5'> Born : <span className='font-normal'>{info.details.birthday}</span> </p>
            <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
            <p className='text-lg font-bold text-gray-200 text-justify leading-5'> Death : <span className='font-normal'>{info.details.deathday ? info.details.deathday : "Still Alive"}</span> </p>
            <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
            <p className='text-lg font-bold text-gray-200 text-justify leading-5'> Born Place : <span className='font-normal'>{info.details.place_of_birth ? info.details.place_of_birth : "Not Available!"}</span> </p>
            <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
            <p className='text-lg font-bold text-gray-200 text-justify leading-5'> Also Knowns As : <span className='font-normal tracking-wide'>{info.details.also_known_as ? info.details.also_known_as.map((e)=>(e)).join(" , ") : "Not Available!"}</span> </p>
            <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />
            <p className='text-lg font-bold text-gray-200 text-justify leading-5 h-32 pr-2 overflow-hidden overflow-y-scroll '> Biography : <span className='font-normal tracking-wide'>{info.details.biography ? info.details.biography : "Not Available!"}</span> </p>
        </div>

      </div>
      
      <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />

      {/* Similar content div */}
      <div className='mt-3 flex flex-col'>
        <TrendingCard type={"movie"}  data={info.movie_credits.cast ? info.movie_credits.cast : info.movie_credits.crew } heading={"Movies"} />
        <TrendingCard type={"tv"}  data={info.tv_credits.cast ? info.tv_credits.cast : info.tv_credits.crew } heading={"TV Shows"} />
      </div>

    </div>
  ): <Loader />;
} 

export default DetailsPerson
