import Link from 'next/link';
import React from 'react'
import { IoPersonOutline,IoFingerPrintSharp,IoPeopleOutline,IoSettingsOutline} from "react-icons/io5";
import { SlWrench } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";

import User from '../user/user'
const menuItems=[  
            {
                title:"Profile",
                path:'/dashboard/profile',
                icon:<IoPersonOutline />
            },
            {
                title:"Attendance",
                path:'/dashboard/attendance',
                icon:<IoFingerPrintSharp />
            },
            {
                title:"Member Management",
                path:'/dashboard/membermanagement',
                icon:<IoPeopleOutline />
            },
            {
                title:"Equipment Management",
                path:'/dashboard/equipmentmanagement',
                icon:<SlWrench />
            },
            {
                title:"Staff Management",
                path:'/dashboard/staffmanagement',
                icon:<IoPeopleOutline />
            },
    ];

const SideBar = () => {
  return (
    <div className='sm:px-3 sm:pt-4 text-white'  >
        <div className='pb-14 hidden sm:block '>
            <h1 className='font-bold'>FITGYM</h1>
            <p className='opacity-75'>Gym Management System</p>
        </div>
        <div className='grid grid-cols-5 sm:flex sm:flex-col' >
             {menuItems.map(item=>(
                <Link 
                key={item.title}
                href={item.path}
                className=' hover:bg-gray-700'>
                <div className=' flex flex-col items-center justify-center gap-y-1 sm:flex-row sm:justify-start sm:py-4'>
                    <div className=''>{item.icon} </div>
                    <div className='text-xs text-center sm:flex sm:justify-start sm:text-base sm:pl-2 sm:text-left'>{item.title}</div>
                </div>   
                </Link>
             ))}
             <Link href={'/setting'}>
             <div className=' hidden sm:flex items-center mt-16 py-3 hover:bg-gray-700'>
             <IoSettingsOutline />
             <p className='pl-3'>Setting</p>
             </div>
             </Link>
      </div>
    <div className='hidden sm:flex justify-between items-center pr-6 pt-40'>
        <User />
        <IoIosArrowForward color='white' size={22}/>
    </div>
       
    </div>
  )
}

export default SideBar
