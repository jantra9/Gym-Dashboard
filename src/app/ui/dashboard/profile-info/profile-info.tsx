import React from 'react'
import User from '../user/user'
const ProfileInfo = () => {
  return (
    <div className='bg-black w-11/12 rounded-3xl px-7 text-white py-6'>
        <div className='grid grid-cols-5'>
            <div className='col-span-1'>
                <User />
            </div>
            <div className="col-span-3 px-14">
                <ul className='grid grid-cols-3'>
                    <li>Age: 5 Years Old</li>
                    <li>Heigh: 40 cm</li>
                    <li>Program Type: Running</li>
                    <li>Weight: 4.5 kg</li>
                    <li>Sex: Adult Female</li>
                    <li>Schedule: very morning</li>
                </ul>
            </div>
            <div className='col-span-1'>
                <ul>
                    <li>Joined: 11-2022</li>
                    <li>Membership Expiry: unlimited</li>
                </ul>
            </div>
        </div>
        <div>
            <hr className="my-3 h-0.5 border-t-0 bg-white" />
        </div>
        <div className='grid grid-cols-5'>
            <div className='grid col-span-1'>Member starts:</div>
            <div className="grid col-span-3 px-14">
                <ul className='grid grid-cols-3'>
                    <li>Total Steps taken:</li>
                    <li>Total Calories Burned:</li>
                    <li>Total Miles Ran</li>
                    <li>10,900 Steps</li>
                    <li>450 Kcal</li>
                    <li>0.5 Miles</li>
                </ul>
            </div>
            <div className='grid col-span-1'>
                <ul>
                    <li>Membership Type:</li>
                    <li>Unlimited</li>
                </ul>
            </div>
        </div>
    </div>


  )
}

export default ProfileInfo