import React from 'react'
import loader from '../../public/Loading.svg'

const Loader = ({width}) => {
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center'>
      <img className={`w-[${width ? width : "30%"}]`} src={loader} alt="" />
    </div>
  )
}

export default Loader
