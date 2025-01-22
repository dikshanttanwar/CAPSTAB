import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import image from '../../../public/no-image.jpg'

const TrendingCard = ({data,func,title,type,filter,heading,px,py}) => {
  // console.log(data)
  return (
    <div className={`w-full h-[${filter ? "25vh" : "25vh"}] md:h-[${filter ? "32vh" : "35vh"}] flex flex-col gap-3 ${px} ${py}`}>

      <div className='w-full flex items-center justify-between'>
        <h1 className='text-gray-400 font-bold text-2xl'>
            {heading}
        </h1>
        {title ? <Dropdown func={func} title="Filter" options={["movie","tv"]}  /> : ""}
      </div>

      <div className='w-full flex gap-3 overflow-x-auto utility overflow-y-hidden'>

        {data && data.map((item,key)=>(

            <Link key={key} to={`/${item.media_type || type}/details/${item.id}`}>
                <div className={`group relative min-w-56 h-36 rounded border-[1px] border-gray-500 duration-200 overflow-hidden`}>
                    
                    <img src={item.backdrop_path || item.profile_path|| item.poster_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path|| item.poster_path})` : image} className='w-full h-full object-cover' alt="" />

                    <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000ca] transparent flex-col justify-end  px-[4%] py-[4%] flex opacity-100 md:opacity-0 group-hover:opacity-100 duration-200 `}>

                        <h1 className='text-lg font-black text-white line-clamp-1'>{item.name || item.title || item.original_title || item.original_name }</h1>
                        
                        <p className='text-xs font-normal line-clamp-2 text-white'>{item.overview.slice(0,50)}<Link className='text-blue-400'>..more</Link></p>
        
                    </div>
                     
                </div>
            </Link>

        ))}
      </div>
    </div>
  )
}

export default TrendingCard
