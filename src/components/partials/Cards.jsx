import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  // console.log(data)
  return (
    <div className='w-full flex flex-wrap justify-center bg-[#1F1E24] '>
      {data.map((item,key)=>(

        <Link to={`/${item.media_type || title}/details/${item.id}`} className='w-[30vh] mr-[5%] mb-[5%] ' key={key}>
            
            <div className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] overflow-hidden'>
            <img className='h-[30vh] md:h-[45vh] object-cover hover:scale-105 duration-200 overflow-hidden'
                src={`https://image.tmdb.org/t/p/original/${ item.poster_path || item.backdrop_path || item.profile_path})`} alt="" />
            </div>
            
            <h1 className='text-lg font-bold text-white line-clamp-1 mt-2'>{ item.title|| item.name || item.original_title || item.original_name }</h1>

        </Link>
        
      ))}
    </div>
  )
}

export default Cards
