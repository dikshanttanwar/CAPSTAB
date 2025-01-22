import React from 'react'
import axios from '../../Utils/axios'
import { Link } from 'react-router-dom'

const Header = ({data,category}) => {
  // console.log(category)
  // console.log(data)
  return (
    <div 
        style={{
            background:` linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.7)),
            url(https://image.tmdb.org/t/p/original/${ data.backdrop_path || data.profile_path|| data.poster_path})`, backgroundPosition:"center top-[0%]", backgroundSize:"cover",backgroundRepeat:"no-repeat"
        }} className=' relative w-full h-[55vh] flex flex-col justify-end gap-2 px-[5%] py-[3%] z-0'>

        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000ca] transparent flex flex-col justify-end gap-3 px-[3%] py-[3%]'>

            <h1 className='text-5xl font-black text-white'>{data.name || data.title || data.original_title || data.original_name }</h1>

            <p className='text-base font-normal line-clamp-2 text-white'>{data.overview.slice(0,250)}<Link to={`/${category}/details/${data.id}`} className='text-blue-400'>..more</Link></p>

            <p className='font-semibold text-gray-400'><i class="ri-megaphone-fill"></i> {data.release_date || "No Information"} {"  ||  "} <i class="ri-album-fill"></i> {data.media_type.toUpperCase()}  </p>

            <Link to={`/${category}/details/${data.id}`} className='bg-[#6556CD] w-fit px-3 py-2 rounded font-semibold text-white'>Watch Trailer</Link>

        </div>
        

    </div>
  )
}

export default Header
