import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute left-0 w-full lg:left-[17%] lg:w-[83%] h-full overflow-hidden overflow-y-scroll">
      <div className="flex items-center justify-between p-5">
        <button
          onClick={() => navigate(-1)}
          className="ml-16 lg:ml-0 pl-2 pr-4 py-1 text-lg font-medium border-gray-300 border-[1px] rounded text-white"
        >
          <i className="ri-arrow-left-s-line"></i>Back
        </button>
      </div>

      <div className="px-4 sm:px-8 lg:px-10">
        {/* About Us Section */}
        <div className="flex flex-col gap-4 py-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">About Us</h1>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide">
            Welcome to <span className="font-bold">CAPSTAB</span>, your ultimate destination for exploring the captivating world of movies and the stars who bring them to life. Our platform is dedicated to movie enthusiasts who crave in-depth insights, thrilling trailers, and the stories behind the magic of cinema.
          </p>
        </div>

        <hr className="outline-none border-none h-[1px] bg-gray-600 rounded-full my-6" />

        {/* What We Offer Section */}
        <div className="flex flex-col gap-4 py-5">
          <h1 className="text-2xl sm:text-3xl text-white font-bold">What We Offer</h1>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide text-justify">
            <span className="font-bold">• Comprehensive Movie Information: </span>Discover detailed information about your favorite movies, from plot summaries and genre classifications to release dates and ratings.
          </p>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide text-justify">
            <span className="font-bold">• Trailers and Sneak Peeks: </span>Watch engaging trailers to get a glimpse of upcoming blockbusters or relive the excitement of timeless classics.
          </p>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide text-justify">
            <span className="font-bold">• Cast and Crew Details: </span>Dive into the profiles of popular actors, actresses, directors, and other creative minds who make cinematic magic happen.
          </p>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide text-justify">
            <span className="font-bold">• Latest and Popular Picks: </span>Stay up-to-date with trending movies and explore curated lists of must-watch films.
          </p>
        </div>

        <hr className="outline-none border-none h-[1px] bg-gray-600 rounded-full my-6" />

        {/* Our Inspiration Section */}
        <div className="flex flex-col gap-4 py-5">
          <h1 className="text-2xl sm:text-3xl text-white font-bold">Our Inspiration</h1>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide">
            At <span className="font-bold">CAPSTAB</span>, we are passionate about connecting movie lovers with the content they cherish. Powered by the robust API from{' '}
            <a target="_blank" href="https://www.themoviedb.org/" className="hover:underline font-medium">
              The Movie Database (TMDb)
            </a>, our platform ensures accurate and comprehensive movie data, keeping you informed and entertained.
          </p>
        </div>

        <hr className="outline-none border-none h-[1px] bg-gray-600 rounded-full my-6" />

        {/* Why Choose CAPSTAB Section */}
        <div className="flex flex-col gap-4 py-5">
          <h1 className="text-2xl sm:text-3xl text-white font-bold">Why Choose CAPSTAB?</h1>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide text-justify">
            <span className="font-bold">• User-Friendly Design: </span>Navigate effortlessly through a sleek and responsive interface designed with your experience in mind.
          </p>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide text-justify">
            <span className="font-bold">• Reliable Information: </span>Access high-quality, verified data sourced directly from TMDb, a trusted name in the movie information industry.
          </p>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide text-justify">
            <span className="font-bold">• Personalized Experience: </span>Find recommendations tailored to your tastes and explore a dynamic range of cinematic content.
          </p>
        </div>

        <hr className="outline-none border-none h-[1px] bg-gray-600 rounded-full my-6" />

        {/* Our Mission Section */}
        <div className="flex flex-col gap-4 py-5">
          <h1 className="text-2xl sm:text-3xl text-white font-bold">Our Mission</h1>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide">
            Our mission is simple — to bring the magic of movies to your fingertips. CAPSTAB is built to ignite your passion for cinema, whether you're a casual viewer or a dedicated cinephile.
          </p>
          <p className="text-lg sm:text-xl text-white font-light leading-8 tracking-wide">
            Thank you for choosing <span className="font-bold">CAPSTAB</span> as your go-to movie hub. Sit back, relax, and let us take you on a journey through the fascinating world of film!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;























// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const AboutUs = () => {
    
//   const navigate = useNavigate();

//   return (
//     <div  className='absolute left-[17%] w-[83%] h-full overflow-hidden overflow-y-scroll'>
//         <div className='flex items-center justify-between p-5 '>
//           <button onClick={()=>navigate(-1)}  className='pl-2 pr-4 py-1 text-lg font-medium border-gray-300 border-[1px] rounded text-white '><i class="ri-arrow-left-s-line"></i>Back</button>
//         </div>

//         <div className='px-10'>
//             <div className='flex flex-col gap-3 py-5'>
//                 <h1 className='text-4xl text-white font-bold'>About Us</h1>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide'>Welcome to <span className='font-bold'>CAPSTAB</span>, your ultimate destination for exploring the captivating world of movies and the stars who bring them to life. Our platform is dedicated to movie enthusiasts who crave in-depth insights, thrilling trailers, and the stories behind the magic of cinema.</p>
//             </div>

//             <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />

//             <div className='flex flex-col gap-3 py-5'>
//                 <h1 className='text-3xl text-white font-bold'>What We Offer</h1>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide text-justify'><span className='font-bold'>• Comprehensive Movie Information: </span>Discover detailed information about your favorite movies, from plot summaries and genre classifications to release dates and ratings.</p>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide text-justify'><span className='font-bold'>• Trailers and Sneak Peeks: </span>Watch engaging trailers to get a glimpse of upcoming blockbusters or relive the excitement of timeless classics.</p>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide text-justify'><span className='font-bold'>• Cast and Crew Details: </span>Dive into the profiles of popular actors, actresses, directors, and other creative minds who make cinematic magic happen.</p>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide text-justify'><span className='font-bold'>• Latest and Popular Picks: </span>Stay up-to-date with trending movies and explore curated lists of must-watch films.</p>
//             </div>

//             <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />

//             <div className='flex flex-col gap-3 py-5'>
//                 <h1 className='text-3xl text-white font-bold'>Our Inspiration</h1>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide'>At <span className='font-bold'>CAPSTAB</span>, we are passionate about connecting movie lovers with the content they cherish. Powered by the robust API from <a target='_blank' href="https://www.themoviedb.org/" className='hover:underline font-medium'>The Movie Database (TMDb)</a>, our platform ensures accurate and comprehensive movie data, keeping you informed and entertained.</p>
//             </div>

//             <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />

//             <div className='flex flex-col gap-3 py-5'>
//                 <h1 className='text-3xl text-white font-bold'>Why Choose CAPSTAB?</h1>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide text-justify'><span className='font-bold'>• User-Friendly Design: </span>Navigate effortlessly through a sleek and responsive interface designed with your experience in mind.</p>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide text-justify'><span className='font-bold'>• Reliable Information: </span>Access high-quality, verified data sourced directly from TMDb, a trusted name in the movie information industry.</p>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide text-justify'><span className='font-bold'>• Personalized Experience: </span>Find recommendations tailored to your tastes and explore a dynamic range of cinematic content.</p>
//             </div>

//             <hr className='outline-none border-none h-[1px] bg-gray-600 rounded-full' />

            
//             <div className='flex flex-col gap-3 py-5'>
//                 <h1 className='text-3xl text-white font-bold'>Our Mission</h1>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide'>At Our mission is simple — to bring the magic of movies to your fingertips. CAPSTAB is built to ignite your passion for cinema, whether you're a casual viewer or a dedicated cinephile.</p>
//                 <p className='text-xl text-white font-light leading-8 tracking-wide'>Thank you for choosing <span className='font-bold'>CAPSTAB</span> as your go-to movie hub. Sit back, relax, and let us take you on a journey through the fascinating world of film!

// </p>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default AboutUs