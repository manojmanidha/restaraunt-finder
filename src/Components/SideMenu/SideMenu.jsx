import React from 'react'
import {GiHamburger} from 'react-icons/gi'
import AdminImage from '../Assets/manoj.jpj.jpg'
import {AiFillHome} from 'react-icons/ai'
import {BiRestaurant} from 'react-icons/bi'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
// simple map dev image
import mapImage from '../Assets/map.png'

const SideMenu = () => {
  return (
    <div className='bg-sideMenuBg relative h-[100%] w-[100%] basis-60 p-4'>

      {/* // logo div // */}
      <div className='logo mt-4 gap-2 text-[white] flex items-center justify-center m-auto'>

         <GiHamburger className='text-[20Px]'/>
         <h1 className='text-[20px] align-center justify-center font-black'>Foodie</h1>
      </div>

{/*  // user div // */}
      <div className=' flex  items-center justify-center text-[white] flex-col mt-[3rem] admin'>
        <img src={AdminImage} alt="Admin Image" className='h-[90px] w-[90px] border-red-300 border-[4px] object-cover rounded-full hover:translate-y-1 hover:transition duration-300' />
        <span className='mt-2 text-white font-medium'>Welcome,</span>
        <h3 className='font-bold text-[white]'>manidha</h3>
      </div>

      {/* simple Menu */}
      <div className='m-auto grid justify-center mt-4'>

      <li className='flex pt-3 pb-3 pl-1 gap-2 hover:opacity-100 items-center'>
        <AiFillHome className='text-white'/> 
        <span className='text-textColor'>Home</span>
      </li>

      <li className='flex pt-3 pb-3 pl-1 gap-2 hover:opacity-100 items-center'>
        <BiRestaurant className='text-white'/> 
        <span className='text-textColor'>Catogaries</span>
      </li>

      <li className='flex pt-3 pb-3 pl-1 gap-2 hover:opacity-100 items-center'>
        <BsBookmarkCheckFill className='text-white'/> 
        <span className='text-textColor'>Reservationsa</span>
      </li>

      <li className='flex pt-3 pb-3 pl-1 gap-2 hover:opacity-100 items-center'>
        <AiFillHeart className='text-white'/> 
        <span className='text-textColor'>Favourites</span>
      </li>
      </div>

      {/* // side map div */}

      <div className='mt-5 h-[14rem] w-full rounded-x1 overflow-hidden'>
        <img src={mapImage} alt="map image" className='object-cover h-[100%]' />
      </div>

    </div>
    
  )
}

export default SideMenu
