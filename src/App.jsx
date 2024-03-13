import './App.css'
import { RiMenu3Line } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import logo from './assets/logo.png'
import { IoPersonCircleOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useRef, useState } from 'react';
function App() {
  const[loading , setLoading]= useState(true)
  const [id, setId] = useState(1)
  const [menu, setMenu] = useState(false)
  const nav = useRef()

  const arr = [
    {
      id: 1,
      title: "Home",
      links: "home"
    },
    {
      id: 2,
      title: "About Mr.Arun",
      links: "about"
    },
    {
      id: 3,
      title: "Join Us Today",
      links: "joinus"

    },
    {
      id: 4,
      title: "Why Choose Us?",
      links: "choose"

    },
  ]
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 100) {
        nav.current.style.backgroundColor = "black"
      }
      else {
        nav.current.style.backgroundColor = "transparent"

      }
    })
  })
  useEffect(() => {
    window.innerWidth >= 1024 ? setMenu(true) : setMenu(false)
  }, [])
  let style = {}
  if (window.innerWidth >= 1024) {
    style = {
      backgroundColor: "white",
      color: "black"
    }
  }
  else {
    style = {
      backgroundColor: "black",
      color: "white"
    }
  }
  let p = new Promise((resolve , reject)=>{
     setTimeout(() => {
        resolve(false)
     }, 2000);
  })
  p.then((res)=>setLoading(res))
  if(loading){
    return <div className=' flex justify-center items-center fixed h-full w-full'><span class="loader"></span></div>
  }
  else{
    return (
      <>
        {/* navbar */}
        <nav className=' xl:flex xl:justify-center '>
          <div ref={nav} className='xl:w-[80rem] px-3 py-3 text-2xl  flex items-center justify-between text-white fixed w-full top-0 '>
            <h1 className=''>Logo</h1>
            <button className=' lg:hidden'>
              {menu ? <IoClose onClick={() => setMenu(false)} />
                : <RiMenu3Line onClick={() => setMenu(true)} />}
            </button>
            {menu && <ul className='fixed   w-[15rem] right-3 rounded top-11 lg:static lg:w-auto lg:h-auto listitems  lg:flex flex-col items-start lg:flex-row  lg:gap-6 text-lg lg:items-center bg-white lg:bg-transparent text-black lg:text-white'>
              {
                arr.map((item, index) => <a key={index} href={`#${item.links}`}><li onClick={() => setId(item.id)} style={id === item.id ? style : {}} className=' '>{item.title}</li></a>)
              }
  
  
              <li>
                <button className='lg:hidden bg-black text-white rounded px-2 py-2 text-base'>Enroll Now</button>
              </li>
            </ul>}
            <button className='hidden lg:block bg-white text-black rounded px-2 py-2 text-base'>Enroll Now</button>
          </div>
        </nav>
        {/* header section */}
        <header className='headersection  xl:flex xl:justify-center  ' id="home">
          <div className=' xl:w-[80rem]'>
            <div className='flex flex-col sm:w-[60%] md:w-[50%] h-[100vh] justify-center gap-3 md:gap-5 items-start px-3 text-white'>
              <h2 className=' font-bold text-2xl flex flex-col'>
                <span className=' text-5xl md:text-7xl xl:text-8xl'>WELCOME</span>
                <span className=' md:text-3xl'>to the journey</span>
                <span className=' md:text-3xl'>of Journalism Excellence</span>
              </h2>
              <p className=' font-semibold text-slate-400 lg:pr-20'>Are you passionate about uncovering the truth, telling compelling stories, and making a difference through your words? Embark on an enriching voyage into the realm of journalism with Mr. Arun, a seasoned journalist with decades of experience in the field.</p>
              <button className=' bg-white text-black lg:text-xl px-3 py-2 rounded '>Explore More</button>
            </div>
  
          </div>
  
        </header>
        {/* About section */}
        <section id="about" style={window.innerWidth < 640 ? { scrollMarginTop: "3rem" } : {}} className=' aboutsection  xl:flex xl:justify-center bg-[#000000] '>
          <div className=' xl:w-[80rem] sm:h-[100vh] flex flex-col justify-center sm:flex-row sm:items-center gap-4 py-4 sm:py-0 sm:gap-3 sm:justify-between  text-white px-3 '>
  
            <div className="events order-2 sm:order-1 flex flex-col items-start gap-2 sm:w-[50%] sm:gap-4 ">
              <h1 className=' text-2xl underline'>Upcoming Events</h1>
              <ul className='locationitems flex gap-4 sm:gap-6 lg:text-xl flex-wrap   mt-2'>
                <li><FaLocationDot />Lucknow</li>
                <li><FaLocationDot />Delhi</li>
                <li><FaLocationDot />Mumbai</li>
                <li><FaLocationDot />Gurgaon</li>
                <li><FaLocationDot />Shimla</li>
                <li><FaLocationDot />Gujarat</li>
                <li><FaLocationDot />Chandigarh</li>
                <li><FaLocationDot />Assam</li>
                <li><FaLocationDot />Pune</li>
                <li><FaLocationDot />Indore</li>
                <li><FaLocationDot />Indore</li>
                <li><FaLocationDot />Goa</li>
  
  
              </ul>
              <button className=' bg-white text-black rounded px-3 py-2 text-lg'>Book Tickets</button>
            </div>
            <div className="description  flex flex-col items-start gap-2 sm:w-[50%] order-1 sm:order-2">
              <img src={logo} alt="" className=' w-28 h-28 bg-black rounded-full' />
              <p className=' lg:text-xl'>   Meet Mr. Arun, a distinguished figure in the world of journalism, whose illustrious career spans over [XX] years. With a keen eye for detail and a relentless pursuit of truth, Mr. Arun has covered some of the most significant events of our time, from political upheavals to humanitarian crises.</p>
              <div className='flex gap-2'>
                <button className='lg:text-xl  bg-white text-black px-4 py-2 rounded font-medium'>Know More</button>
                <button className='lg:text-xl   text-white border-white border-2 border-solid  px-3 py-2 rounded font-medium'>Book a Appointment</button>
              </div>
  
            </div>
          </div>
        </section>
        {/* Join us section */}
        <section id="joinus" style={window.innerWidth < 640 ? { scrollMarginTop: "1rem" } : {}} className=' my-6 joinussection xl:flex xl:justify-center'>
          <div className=' xl:w-[80rem]  h-[100vh] flex items-center justify-center  px-3 sm:px-0'>
            <div className='  flex flex-col items-center w-full sm:w-[50%] sm:px-3'>
              <IoPersonCircleOutline className=' text-5xl text-purple-400' />
              <h1 className=' text-2xl'>Login / Signup</h1>
              <form className='  w-full'>
                <div className='flex flex-col my-3'>
                  <label htmlFor="">Email Address</label>
                  <input type="text" className=' border-[1px] rounded border-slate-300 outline-purple-400 pl-2 py-1' />
                </div>
                <div className='flex flex-col my-3' >
                  <label htmlFor="">Password</label>
                  <input type="text" className=' border-[1px] rounded border-slate-300 outline-purple-400 pl-2 py-1' />
                </div>
                <div className="remembermeandforgetpassword text-base flex justify-between items-center text-purple-600">
                  <div className="rememberbox flex items-center gap-1">
                    <input type="checkbox" className=' ' />
                    <label htmlFor="" >Remember Me</label>
                  </div>
                  <div className="forget">
                    <p>Forget Password?</p>
                  </div>
                </div>
                <button className=' bg-purple-600 text-white w-full mt-3 rounded-2xl py-1'>Login</button>
              </form>
              <p className=' my-3 text-purple-600'>or connect with</p>
              <div className="googlefacebook flex gap-2 text-2xl">
                <FaFacebook className=' text-blue-600' />
                <FcGoogle />
              </div>
              <div className="donthaveanaccount flex items-center gap-1 mt-7">
                <p>Don't have an account ?</p>
                <p className='text-purple-600'>Sign up</p>
              </div>
            </div>
            <div className=" signup rounded  hidden sm:block  h-full w-[50%]">
              <div className=' bg-[#0000ff24] sm:flex gap-2 lg:px-5 text-center sm:flex-col sm:justify-center sm:items-center h-full'>
                <h1 className=' text-3xl font-semibold'>Join Us Today</h1>
                <p className=' text-gray-200'>Unlock the doors to a world of journalistic excellence and embark on a transformative journey with Mr. Arun. Enroll now to secure your spot in our upcoming course and take the first step towards realizing your dreams in journalism.</p>
                <button className=' bg-black text-white rounded px-3 py-2'>Enroll Now</button>
              </div>
  
            </div>
          </div>
  
        </section>
        {/* choose us section */}
        <section id="choose" className='my-6 chooseus xl:flex xl:justify-center'>
          <div className='  xl:w-[80rem]  h-[100vh] px-3 sm:px-0 flex items-center'>
            <div className='chooseusbg hidden rounded sm:block sm:w-[50%] h-full'>
            </div>
            <div className='flex flex-col items-center px-4 w-full sm:w-[50%]'>
              <h1 className=' flex flex-col items-center text-2xl lg:text-4xl'>
                <span>Why Choose</span>
                <span>Mr. Arun's Event</span>
              </h1>
              <Accordion type="single" collapsible className="w-full ">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Expert Guidance</AccordionTrigger>
                  <AccordionContent>
                    Learn from the best in the industry with personalized guidance and feedback from Mr. Arun himself.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Flexible Learning:</AccordionTrigger>
                  <AccordionContent>
                    Access course materials at your own pace, from anywhere in the world, with our convenient online platform.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Community Support</AccordionTrigger>
                  <AccordionContent>
                    Join a vibrant community of like-minded journalists, share ideas, and collaborate on projects to enhance your learning experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Lifetime Access</AccordionTrigger>
                  <AccordionContent>
                    Enjoy lifetime access to course materials, updates, and resources to support your ongoing journey in journalism.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Expert Guidance</AccordionTrigger>
                  <AccordionContent>
                    Learn from the best in the industry with personalized guidance and feedback from Mr. Arun himself.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Flexible Learning:</AccordionTrigger>
                  <AccordionContent>
                    Access course materials at your own pace, from anywhere in the world, with our convenient online platform.
                  </AccordionContent>
                </AccordionItem>
  
              </Accordion>
            </div>
          </div>
        </section>
        <footer className=' xl:flex xl:justify-center bg-[#212121] text-white py-5'>
          <div className=' xl:w-[80rem] px-3 lg:px-0 flex flex-col sm:flex-row sm:justify-between '>
            <div className=' firstitem'>
              <h2 className=' font-medium text-lg  lg:text-2xl md:mt-0 mb-4'>Learn More</h2>
              <ul className=' text-gray-500'>
                <li className=' mb-2 md:text-sm lg:text-lg'>About Mr. Arun</li>
                <li className=' mb-2 md:text-sm lg:text-lg'>Press Releses</li>
                <li className=' mb-2 md:text-sm lg:text-lg'>Environment</li>
                <li className=' mb-2 md:text-sm lg:text-lg'>Privacy Policy</li>
                <li className=' mb-2 md:text-sm lg:text-lg'>Contact Us</li>
              </ul>
            </div>
            <div className=' firstitem'>
              <h2 className=' font-medium text-lg lg:text-2xl mt-7 md:mt-0 mb-4'>Our Community</h2>
              <ul className=' text-gray-500'>
                <li className=' mb-2 md:text-sm lg:text-lg'>Foundation</li>
                <li className=' mb-2 md:text-sm lg:text-lg'>Events</li>
                <li className=' mb-2 md:text-sm lg:text-lg'></li>
              </ul>
            </div>
            <div className="contactus">
              <h2 className=' font-medium text-lg mt-7 md:mt-0 mb-4'>Contact Us</h2>
              <ul className=' text-gray-500'>
                <li className=' mb-2 md:text-sm lg:text-lg'>Admin Officer: <b className='ml-2'>123-456-7890</b></li>
                <li className=' mb-2 md:text-sm lg:text-lg'>Email Officer:  <b className='ml-2'>avaesa@gmail.com</b></li>
              </ul>
            </div>
            <div className="social">
              <h2 className=' font-medium text-lg lg:text-2xl mt-7 md:mt-0 mb-4'>Social</h2>
              <ul className=' flex '>
                <li className='mr-4'><FaFacebook className=' text-2xl' /></li>
                <li className='mr-4'><FaSquareInstagram className=' text-2xl' /></li>
                <li className='mr-4'><FaTwitter className=' text-2xl' /></li>
                <li className='mr-4'><FaYoutube className=' text-2xl' /></li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    )
  }
  
}

export default App
