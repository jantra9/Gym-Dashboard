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
    <div >
        <div className=' pb-14'>
            <h1 className='font-bold'>FITGYM</h1>
            <p>Gym Management System</p>
        </div>
        <ul>
             {menuItems.map(item=>(
                <Link 
                key={item.title}
                href={item.path}
                className='py-3 flex items-center hover:bg-gray-700 '>
                   {item.icon} 
                <span className='pl-3'>{item.title}</span>   
                </Link>
             ))}
             <Link href={'/setting'}>
             <div className='flex items-center mt-16 py-3 hover:bg-gray-700'>
             <IoSettingsOutline />
             <p className='pl-3'>Setting</p>
             </div>
             </Link>
      </ul>
    <div className='pt-28 flex justify-between items-center pr-6'>
        <User />
        <IoIosArrowForward color='white' size={22}/>
    </div>
       
    </div>
  )
}

export default SideBar
