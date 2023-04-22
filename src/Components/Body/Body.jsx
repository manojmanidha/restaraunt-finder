import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BsPlus} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {MdMonetizationOn} from 'react-icons/md'
import {GiPathDistance} from 'react-icons/gi'
// import cato img
import pizza from '../Assets/pizza.png'
import asian from '../Assets/asian.png'
import bar from '../Assets/bar.png'
import barger from '../Assets/barger.png'
import cafe from '../Assets/cafe.png'
// Restaurant images
import res1 from '../Assets/res1.jpg'
import res2 from '../Assets/res2.jpg'
import res3 from '../Assets/res3.jpg'
import res4 from '../Assets/res4.jpg'
const Body = () => {
  return (
    <div className='bg-bodyBg h-[100%] w-[100%] basis-80 p-8'>
      {/* top section */}

      <div className='flex items-center justify-between '>
        <div className=' flex items-center border-b-2 pb-2 basis-1/2 gap-2'>
        <AiOutlineSearch className='text-hoverColor text-[20px] cursor-pointer'/>
        <input type="text" placeholder='Search your favourite' className='border-none outline-none placeholder:text-sm focus:outline-none'/>
        </div>

        <div className='flex gap-4 items-center'>
            <AiOutlineAppstoreAdd className='text-hoverColor cursor-pointer text-[50px] hover:text-[40px] transition-all'/>
            <button className='bg-sideMenuBg cursor-pointer text-bodyBg font-semibold py-1 px-3 rounded-[5px] hover:bg-[#55545e] transition-all'>Go Premium</button>
        </div>
        </div>

        {/* title div */}
        <div className='flex items-center justify-between mt-8'>
          <div className='title'>
            <h1 className='text-[35px] text-titleColor tracking-[1px] font-black'>Find the best place</h1>
            <span><strong className='text-[16px] opacity-70'>249 Restaurants ,</strong> choose yours</span>
          </div>

          <div>

          <div className='flex items-center justify-between'>
              <div className='specials px-4 text-center border-r-2'>
                <h3 className='text-[20px] font-bold text-titleColor'>95</h3>
                <small className='text-[16px] opacity-70'>Specials</small>
              </div>

              <div className='Deliveries px-4 text-center '>
                <h3 className='text-[20px] font-bold text-titleColor'>90</h3>
                <small className='text-[16px] opacity-70'>Deliveries</small>
              </div>
            </div>

          </div>

        </div>

 {/* catagories div  */}
        <div className='flex mt-8  items-center gap-6'>

          <div className='singleCategory grid item-center justify-between text-center'>

            <div className='imgDiv h-[40px] w-[40px] bg-[#5F9EA0] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={pizza} alt="food image" className='w-[70%] flex justify-center m-auto'/>
            </div>

            <span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
              Italian
            </span>

          </div>

          <div className='singleCategory grid item-center justify-between text-center'>

            <div className='imgDiv h-[40px] w-[40px] bg-[#FFF8DC] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={asian} alt="food image" className='w-[70%] flex justify-center m-auto'/>
            </div>

            <span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
              Asian 
            </span>

          </div>


         


          <div className='singleCategory grid item-center justify-between text-center'>

            <div className='imgDiv h-[40px] w-[40px] bg-[#B8860B] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={bar} alt="food image" className='w-[70%] flex justify-center m-auto'/>
            </div>

            <span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
              Bars
            </span>

          </div>


          <div className='singleCategory grid item-center justify-between text-center'>

            <div className='imgDiv h-[40px] w-[40px] bg-[#DEB887] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={barger} alt="food image" className='w-[70%] flex justify-center m-auto'/>
            </div>

            <span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
               burger
            </span>

          </div>


          <div className='singleCategory grid item-center justify-between text-center'>

            <div className='imgDiv h-[40px] w-[40px] bg-[#A9A9A9] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={cafe} alt="food image" className='w-[70%] flex justify-center m-auto'/>
            </div>

            <span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
              Cafe 
            </span>

          </div>

          <div className='singleCategory grid item-center justify-between text-center'>

            <div className='imgDiv h-[40px] w-[40px] bg-[#E9967A] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={asian} alt="food image" className='w-[70%] flex justify-center m-auto'/>
            </div>

            <span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
              pubs
            </span>

          </div>
           <div className='singleCategory grid item-center justify-between text-center'>

            <div className='imgDiv h-[40px] w-[40px] bg-[#696969] rounded-full flex items-center justify-center m-auto p-1'>
            <img src={asian} alt="food image" className='w-[70%] flex justify-center m-auto'/>
            </div>

            <span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
              sea 
            </span>

          </div>

          <div className='singleCategory grid item-center justify-between text-center'>

<div className='imgDiv h-[40px] w-[40px] bg-[#808080] rounded-full flex items-center justify-center m-auto p-1'>
<img src={asian} alt="food image" className='w-[70%] flex justify-center m-auto'/>
</div>

<span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
  vegin 
</span>

</div>

<div className='singleCategory grid item-center justify-between text-center'>

<div className='imgDiv h-[40px] w-[40px] bg-[#FF7F50] rounded-full flex items-center justify-center m-auto p-1'>
<img src={bar} alt="food image" className='w-[70%] flex justify-center m-auto'/>
</div>

<span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
  hotdog
</span>

</div>

<div className='singleCategory grid item-center justify-between text-center'>

<div className='imgDiv h-[40px] w-[40px] bg-[#FAEBD7] rounded-full flex items-center justify-center m-auto p-1'>
<img src={asian} alt="food image" className='w-[70%] flex justify-center m-auto'/>
</div>

<span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
  BBQ 
</span>

</div>


<div className='singleCategory grid item-center justify-between text-center'>

<div className='imgDiv h-[40px] w-[40px] bg-[#F0E68C] rounded-full flex items-center justify-center m-auto p-1'>
<BsPlus className='text-center flex justify-center m-auto text-[25px] hover:scale-[1.5] transition-all cursor-pointer'/>
{/* <img src={asian} alt="food image" className='w-[70%] flex justify-center m-auto'/> */}
</div>

<span className='uppercase  text-[12px] font-medium opacity-50 pt-2'>
  more 
</span>

</div>

        </div>



{/* Restaurants Section */}
<div className='restaurant mt-8'>
  <div className='flex items-center justify-between'>
    <div className='title'>
      <h1 className='text-[25px] font-bold text-titleColor'>New Restaurants</h1>
      <span className='text-[16px] opacity-70'><strong >9 restaurants ,</strong> have been opened up in town</span>
    </div>

    <div className='flex gap-4 items-center '>
            {/* <AiOutlineAppstoreAdd className='text-hoverColor cursor-pointer text-[50px] hover:text-[20px] transition-all'/> */}
            <button className=' flex align-center gap-2 bg-[#FFF8DC] cursor-pointer text-titleColor font-semibold py-1 px-3 rounded-[5px] hover:bg-[#55545e] hover:text-bodyBg transition-all'>View All <BsArrowRightShort className='text-[25px]'/></button>
     </div>

  </div>

  <div className='restaurantContainer py-8 flex items-center justify-between'>

    <div className='singleRestaurant w-[220px]  bg-colorOne p-3 rounded-[10px]'>
      <div className='imgDiv h-[130px] w-full overflow-hidden  rounded-md'>
        <img src={res1} alt="" className='w-full h-full object-cover' />
      </div>
      <h1 className=' text-center font-bold pt-4 opacity-90'>Molef Ulif</h1>
      <small className=' block text-center text-[#606060] font-medium '>Asian Restaurant</small>

      <div className='info mt-5 flex justify-center items-center'>
        <div className='singleInfo  grid px-3'>
          <AiFillStar className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>3.7</h4>
        </div>

        <div className='singleInfo border-x-2 grid px-3'>
          <MdMonetizationOn className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>30</h4>
        </div>

        <div className='singleInfo grid px-3'>
          <GiPathDistance className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>0.7</h4>
        </div>

      </div>

    </div>

    <div className='singleRestaurant w-[220px]  bg-colorTwo p-3 rounded-[10px]'>
      <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
        <img src={res2} alt="" className='w-full h-full object-cover' />
      </div>
      <h1 className=' text-center font-bold pt-4 opacity-90'>La face</h1>
      <small className=' block text-center text-[#606060] font-medium '>Sea food</small>

      <div className='info mt-5 flex justify-center items-center'>
        <div className='singleInfo  grid px-3'>
          <AiFillStar className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>4.3</h4>
        </div>

        <div className='singleInfo border-x-2 grid px-3'>
          <MdMonetizationOn className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>50</h4>
        </div>

        <div className='singleInfo grid px-3'>
          <GiPathDistance className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>2.7</h4>
        </div>

      </div>

    </div>

    <div className='singleRestaurant w-[220px]  bg-colorThree p-3 rounded-[10px]'>
      <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
        <img src={res3} alt="" className='w-full h-full object-cover' />
      </div>
      <h1 className=' text-center font-bold pt-4 opacity-90'>Royal</h1>
      <small className=' block text-center text-[#606060] font-medium '>Ice cream</small>

      <div className='info mt-5 flex justify-center items-center'>
        <div className='singleInfo  grid px-3'>
          <AiFillStar className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>4.9</h4>
        </div>

        <div className='singleInfo border-x-2 grid px-3'>
          <MdMonetizationOn className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>80</h4>
        </div>

        <div className='singleInfo grid px-3'>
          <GiPathDistance className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>4.8</h4>
        </div>

      </div>

    </div>

    <div className='singleRestaurant w-[220px]  bg-colorThree p-3 rounded-[10px]'>
      <div className='imgDiv h-[130px] w-full overflow-hidden rounded-md'>
        <img src={res4} alt="" className='w-full h-full object-cover' />
      </div>
      <h1 className=' text-center font-bold pt-4 opacity-90'>Pizzaria</h1>
      <small className=' block text-center text-[#606060] font-medium '>pizza food restaraunt </small>

      <div className='info mt-5 flex justify-center items-center'>
        <div className='singleInfo  grid px-3'>
          <AiFillStar className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>4.6</h4>
        </div>

        <div className='singleInfo border-x-2 grid px-3'>
          <MdMonetizationOn className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>95</h4>
        </div>

        <div className='singleInfo grid px-3'>
          <GiPathDistance className='flex mt-auto jusfity-center items-center'/>
          <h4 className='font-semibold text-[#4f4d58]'>0.8</h4>
        </div>

      </div>

    </div>


  </div>



</div>

    </div>
  )
}

export default Body
