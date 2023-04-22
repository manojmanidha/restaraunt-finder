import React from 'react'
import Body from './Body/Body'
import SideMenu from './SideMenu/SideMenu'


const Component = () => {
  return (
    <div className='flex h-[95vh] item-center justify-center w-[vh] mt-2 rounded-md  overflow-hidden '>
     
       <SideMenu></SideMenu>
       <Body></Body>
    </div>
  )
}

export default Component