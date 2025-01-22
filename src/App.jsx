import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SideNavbar from "./components/partials/SideNavbar";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";
import Peoples from "./components/Peoples";
import DetailsMovie from "./components/DetailsMovie";
import DetailsTV from "./components/DetailsTV";
import DetailsPerson from "./components/DetailsPerson";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/partials/AboutUs";

const App = () => {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      {/* Sidebar */}
      <SideNavbar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/details/:id" element={<DetailsMovie />} />
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/tv/details/:id" element={<DetailsTV />} />
          <Route path="/peoples" element={<Peoples />} />
          <Route path="/person/details/:id" element={<DetailsPerson />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;




















// import React from 'react'
// import { Outlet, Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import SideNavbar from './components/partials/SideNavbar'
// import Trending from './components/Trending'
// import Popular from './components/Popular'
// import Movies from './components/Movies'
// import Tvshows from './components/Tvshows'
// import Peoples from './components/Peoples'
// import DetailsMovie from './components/DetailsMovie'
// import DetailsTV from './components/DetailsTV'
// import DetailsPerson from './components/DetailsPerson'
// import VideoPlayer from './components/partials/VideoPlayer'
// import ContactUs from './components/ContactUs'
// import AboutUs from './components/partials/AboutUs'

// const App = () => {
//   return (
//     <div className='bg-[#1F1E24] w-screen h-screen flex relative '>
//       <SideNavbar />
//       <Outlet />
//       <Routes>
//         <Route path='/' element={<Home />}  />
//         <Route path='/trending' element={<Trending />}  />
//         <Route path='/popular' element={<Popular />}  />

//         <Route path='/movies' element={<Movies />} />
//         <Route path='/movie/details/:id' element={<DetailsMovie />} />

//         <Route path='/tvshows' element={<Tvshows />} />
//         <Route path='/tv/details/:id' element={<DetailsTV />} />

//         <Route path='/peoples' element={<Peoples />}/>
//         <Route path='/person/details/:id' element={<DetailsPerson />} />

//         <Route path='/contactus' element={<ContactUs />}/>

//         <Route path='/aboutus' element={<AboutUs />}/>

//         {/* <Route path='/trailer' element={<VideoPlayer />} /> */}
//       </Routes>
//     </div>
//   )
// }

// export default App
