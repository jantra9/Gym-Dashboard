import React from 'react'
import User from '../user/user'
const ProfileInfo = () => {
  return (
    <div className='text-opacity-80 bg-black w-11/12 rounded-3xl px-7 text-white py-6 text-sm sm:text-base'>
        <div>
            <div>
                <User />
            </div>
            <div>
                <ul className='grid grid-cols-auto-fit py-2 gap-y-3'>
                    <li className='flex-col flex justify-center'>
                        <p>Age: 5 Years Old</p>
                        <p>Sex: Adult Female</p>
                    </li>
                    <li className='flex-col flex justify-center'>
                        <p>Weight: 4.5 kg</p>
                        <p>Heigh: 40 cm</p>
                    </li>
                    <li className='flex-col flex justify-center'>
                        <p>Program Type: Running</p>
                        <p>Schedule: very morning</p>
                    </li>
                    <li className='flex-col flex justify-center'>
                        <p>Joined: 11-2022</p>
                        <p>Membership Exp: unlimited</p>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <hr className="my-3 h-0.5 border-t-0 bg-white" />
        </div>
        <div className=''>
            <div>Member starts:</div>
            <div>
                <ul className='grid grid-cols-auto-fit py-2 gap-y-3'>
                <li className='flex-col flex justify-center'>
                        <p>Total Steps taken:</p>
                        <p>Total Calories Burned:</p>
                    </li>
                    <li className='flex-col flex justify-center'>
                        <p>Total Miles Ran</p>
                        <p>10,900 Steps</p>
                    </li>
                    <li className='flex-col flex justify-center'>
                        <p>450 Kcal</p>
                        <p>0.5 Miles</p>
                    </li>
                    <li className='flex-col flex justify-center'>
                        <p>Membership Type:</p>
                        <p>Unlimited</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProfileInfo