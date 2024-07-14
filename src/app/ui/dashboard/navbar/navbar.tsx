"use client"
import React from 'react';
import { PiHouseSimpleLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from 'next/navigation';
import { IoSettingsOutline, IoSearch } from "react-icons/io5";
import { IoIosSwitch } from "react-icons/io";

const NavBar: React.FC = () => {
  const pathname=usePathname();
  const segment = pathname.split('/').pop() || '';
  const getDisplayName = (segment: string) => {
    switch (segment) {
      case 'membermanagement':
        return 'Member Management';
      case 'staffmanagement':
        return 'Staff Management';
      case 'equipmentmanagement':
        return 'Equipment Management';
      default:
        return segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    }
  };
  return (
    <div className='flex flex-col'>


      <div className='flex justify-between p-4'>
        <div className='flex gap-2 opacity-50 items-center'>
          <PiHouseSimpleLight size={22} style={{opacity:0.5}}/>
          <span>Fitgym</span>
          <IoIosArrowForward style={{opacity:0.5}}/>
          <p className="first-letter:capitalize">
          {getDisplayName(segment)}
        </p>
        </div>
        <div className='flex flex-row gap-3 items-cente'>
          <div className='bg-black w-9 h-9 rounded-lg flex justify-center items-center'>
               <IoSettingsOutline color='white' size={20}/>
          </div>
          <div className='bg-gray-200 rounded-lg flex items-center p-2 gap-1'>
               <IoSearch size={20} style={{opacity:0.3}}/>
               <input type='text' name='search' placeholder='Search' className='bg-gray-200 outline-none text-sm w-72' />
          </div>
        </div>
      </div>

      <div className='flex justify-between px-4 pt-4'>
          <p className="first-letter:capitalize font-bold text-3xl">
          {getDisplayName(segment)}
        </p>
        
        <div className='flex flex-row gap-3 items-cente'>
              <div className='bg-white w-9 h-9 border border-black rounded-lg flex justify-center items-center'>
                <IoIosSwitch size={22} />
              </div>
          <div className='bg-black w-9 h-9 rounded-lg flex justify-center items-center'>
               <IoSettingsOutline color='white' size={20}/>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default NavBar;
