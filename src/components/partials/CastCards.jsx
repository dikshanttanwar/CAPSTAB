import React from "react";
import { Link } from "react-router-dom";
import image from '../../../public/no-image.jpg'

const CastCards = ({ data,title }) => {
//   console.log(data);
  return (
    <div className="w-full h-[395px] flex gap-3 flex-col py-3">
      <h1 className="text-gray-400 font-bold text-2xl">{title}</h1>

      <div className="w-full h-[390px] flex gap-3 overflow-x-auto utility overflow-y-hidden">

        {data && data.map((item,key)=>(
            <Link to={`/person/details/${item.id}`} key={key}>
                <div className="group relative w-56 h-80 rounded border-[1px] border-gray-500 duration-200 overflow-hidden cursor-pointer">
                <img src={item.backdrop_path || item.profile_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path || item.profile_path})`: image} className="w-full h-full object-cover" alt=""/>
    
                <div
                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0000007c] transparent flex-col justify-end flex opacity-100 md:opacity-0 group-hover:opacity-100 duration-200 `}>
                    <div className="w-full bg-gradient-to-t from-[#0000008a] transparent px-[4%] py-[4%] ">
                        <h1 className='text-xl font-bold text-white line-clamp-1'>{item.name ||  item.original_name }</h1> 
                        {item.character && <h1 className='text-base font-light text-white line-clamp-1 tracking-wide'>{item.character}</h1> }
                    </div>  
                </div>

          </div>
            </Link>
        ))}

      </div>
    </div>
  );
};

export default CastCards;
