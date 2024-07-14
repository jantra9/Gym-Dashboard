import React,{useState} from 'react'


const list =[
    '#MGYM-89274-110',
    'Emma Tran',
    'Pet (Full-time)',
    'November 2022',
    "Unlimited",
    "6:40 pm",
    '2:00 am',
    "November 2022"
];
const Table = () => {

  return (
    <div className='w-full flex justify-center'>
      <table className='w-11/12'>
        <thead>
          <tr><th colSpan={9} className='bg-black text-white text-left rounded-t-lg h-10 pl-5'>MEMBER MANAGEMENT</th></tr>
          <tr className='bg-gray-300 min-w-full h-10'>
            <th colSpan={2}>Member ID</th>
            <th>Member Name</th>
            <th>Membership</th>
            <th>Joined</th>
            <th>Expiry Date</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className='bg-gray-100'>
          {[...Array(9)].map((_,i)=>(
          <tr className='border-b'>
                <td className='p-2 pl-4'>
                  <input type='checkbox' />
                </td>            
                {list.map(item=>(
                <th className='font-normal py-1'>{item}</th>
                ))}
 
          </tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default Table


