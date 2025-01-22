import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactUs = () => {
  document.title = "CAPSTAB | Movies";
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f32c9e99-8795-45de-868d-d3ffe5c1c8b6");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message Sent Successfully!");
      setname("");
      setemail("");
      setmsg("");
    }
  };

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

      <div id="page5" className="w-full flex flex-col items-center gap-3 px-4 sm:px-8">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide text-center">
            CONTACT
          </h1>
        </div>
        <div className="w-[30px] h-1 bg-[#6556CD] rounded-full mx-auto" />
        <div className="w-full sm:w-[80%] lg:w-[60%] text-center">
          <h1 className="text-lg sm:text-2xl text-white font-thin">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.
          </h1>
        </div>
        <hr className="w-[80%] sm:w-[70%] lg:w-[60%] outline-none border-none h-[1px] bg-gray-200 rounded-full my-4" />

        {/* FORM */}
        <form onSubmit={onSubmit} className="w-full sm:w-[80%] lg:w-[50%] mt-2 flex items-center flex-col gap-6">
          <div className="w-full flex flex-col items-center relative">
            <input
              className="peer w-full h-10 bg-transparent text-white outline-none border border-zinc-400 rounded-md px-4 py-2"
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              required
              spellCheck="false"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <label
              className="absolute top-1/2 left-4 text-white transform -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:text-sm peer-focus:bg-[#1F1E24] peer-valid:top-0 peer-valid:text-sm peer-valid:bg-[#1F1E24]"
              htmlFor="name"
            >
              Your Name
            </label>
          </div>

          <div className="w-full flex flex-col items-center relative">
            <input
              className="peer w-full h-10 bg-transparent text-white outline-none border border-zinc-400 rounded-md px-4 py-2"
              type="email"
              name="email"
              id="email"
              required
              spellCheck="false"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label
              className="absolute top-1/2 left-4 text-white transform -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:text-sm peer-focus:bg-[#1F1E24] peer-valid:top-0 peer-valid:text-sm peer-valid:bg-[#1F1E24]"
              htmlFor="email"
            >
              Your Email
            </label>
          </div>

          <div className="w-full flex flex-col items-center relative h-full">
            <textarea
              className="peer w-full bg-transparent text-white outline-none border border-zinc-400 rounded-md px-4 py-2"
              spellCheck="false"
              name="message"
              id="textArea"
              required
              rows="8"
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
            ></textarea>
            <label
              className="absolute top-4 left-4 text-white transform -translate-y-1/2 transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:text-sm peer-focus:bg-[#1F1E24] peer-valid:top-0 peer-valid:text-sm peer-valid:bg-[#1F1E24]"
              htmlFor="textArea"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-[17%] gap-2 px-6 py-2 bg-[#7843e9] text-white rounded-[16px] overflow-hidden transition-all duration-200 ease-in-out active:scale-95 group"
          >
            <div className="svg-wrapper-1 group-hover:animate-fly">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="transform transition-transform origin-center group-hover:translate-x-4 group-hover:rotate-45 group-hover:scale-110"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-16">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;


































// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify";

// const ContactUs = () => {
//   document.title="CAPSTAB | Movies";
//     const navigate = useNavigate();
//     const [name,setname] = useState("");
//     const [email,setemail] = useState("");
//     const [msg,setmsg] = useState("");
    
//     const onSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
//         formData.append("access_key", "f32c9e99-8795-45de-868d-d3ffe5c1c8b6");
//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);

//         const res = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//             },
//             body: json
//         }).then((res) => res.json());

//         if (res.success) {
//             console.log("Success", res);
//             toast.success("Message Sent Successfully!")
//             setname("");
//             setemail("")
//             setmsg("")
//         }
//     };
//   return (
//     <div  className='absolute left-[17%] w-[83%] h-full overflow-hidden overflow-y-scroll'>
//         <div className='flex items-center justify-between p-5 '>
//           <button onClick={()=>navigate(-1)}  className='pl-2 pr-4 py-1 text-lg font-medium border-gray-300 border-[1px] rounded text-white '><i class="ri-arrow-left-s-line"></i>Back</button>
//         </div>

//         <div id="page5" className='w-full flex flex-col items-center gap-3 '>
//           <div>
//               <h1 className='text-5xl font-black text-white tracking-wide'>CONTACT</h1>
//           </div>
//           <div className='w-[30px] h-1 bg-[#6556CD] rounded-full'></div>
//           <div className='w-[60%] text-center'>
//               <h1 className='text-2xl text-white font-thin'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</h1>
//           </div>
//           {/* <div className='w-[80%] h-[2px] bg-[#6556CD] rounded-full'></div> */}
//           <hr className='w-[80%] outline-none border-none h-[1px] bg-gray-200 rounded-full' />  

//             {/* ---FORM----- */}
//             <form onSubmit={onSubmit} class="w-[30%] mt-2 h-full flex flex-col items-center gap-4" >

//                 <div class="w-full flex flex-col items-center relative">
//                     <input 
//                         class="peer w-full h-10 bg-transparent text-white outline-none border border-zinc-400 rounded-md px-4 py-2"
//                         type="text" 
//                         id="name" 
//                         name="name" 
//                         autocomplete="off" 
//                         required 
//                         spellcheck="false" 
//                         value={name}
//                         onChange={(e)=>setname(e.target.value)}
//                     />
//                     <label 
//                         class="absolute top-1/2 left-4 text-white transform -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:text-sm peer-focus:bg-[#1F1E24] peer-valid:top-0 peer-valid:text-sm peer-valid:bg-[#1F1E24]"
//                         for="name"
//                     >
//                         Your Name
//                     </label>
//                 </div>

//                 <div class="w-full flex flex-col items-center relative">
//                     <input 
//                         class="peer w-full h-10 bg-transparent text-white outline-none border border-zinc-400 rounded-md px-4 py-2"
//                         type="text" 
//                         name="email" 
//                         id="email" 
//                         required 
//                         spellcheck="false" 
//                         value={email}
//                         onChange={(e)=>setemail(e.target.value)}
//                     />
//                     <label 
//                         class="absolute top-1/2 left-4 text-white transform -translate-y-1/2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:text-sm peer-focus:bg-[#1F1E24] peer-valid:top-0 peer-valid:text-sm peer-valid:bg-[#1F1E24]"
//                         for="email"
//                     >
//                         Your Email
//                     </label>
//                 </div>

//                 <div class="w-full flex flex-col items-center relative h-full">
//                     <textarea 
//                         class="peer w-full bg-transparent text-white outline-none border border-zinc-400 rounded-md px-4 py-2" 
//                         spellcheck="false" 
//                         name="message" 
//                         id="textArea"  
//                         required 
//                         rows="10"
//                         value={msg}
//                         onChange={(e)=>setmsg(e.target.value)}
//                     ></textarea>
//                     <label 
//                         class="absolute top-4 left-4 text-white transform -translate-y-1/2 transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-base peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:text-sm peer-focus:bg-[#1F1E24] peer-valid:top-0 peer-valid:text-sm peer-valid:bg-[#1F1E24]"
//                         for="textArea"
//                     >
//                         Your Message
//                     </label>
//                 </div>

//                 {/* <button>Sumit</button> */}

//                 <button
//                     type="submit"
//                     className="flex items-center justify-center gap-2 px-6 py-2 bg-[#7843e9] text-white rounded-[16px] overflow-hidden transition-all duration-200 ease-in-out active:scale-95 group"
//                     >
//                     <div className="svg-wrapper-1 group-hover:animate-fly">
//                         <div className="svg-wrapper">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 24 24"
//                             width="24"
//                             height="24"
//                             className="transform transition-transform origin-center group-hover:translate-x-4 group-hover:rotate-45 group-hover:scale-110"
//                         >
//                             <path fill="none" d="M0 0h24v24H0z"></path>
//                             <path
//                             fill="currentColor"
//                             d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
//                             ></path>
//                         </svg>
//                         </div>
//                     </div>
//                     <span className="ml-1 transition-transform duration-300 group-hover:translate-x-16">Send</span>
//                 </button>

//                 <div id="result"></div>
//             </form>

//       </div>
//     </div>
//   )
// }

// export default ContactUs
