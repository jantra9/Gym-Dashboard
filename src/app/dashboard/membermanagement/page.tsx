import React from "react";
import Table from "@/app/ui/dashboard/table/table";
import Card from "@/app/ui/dashboard/card/card";


const AttendanceCardList=[
  {
      title:"Total Employees",
      number:61,
  },
  {
      title:"Today's Attendance",
      number:36,
  },
  {
      title:"Late Comings",
      number:3,
  },
  {
      title:"Off",
      number:25
  }
]
const headers = [
  { label: 'Member ID', colspan: 2 },
  'Member Name',
  'Membership',
  'Joined',
  'Expiry Date',
  'Check In',
  'Check Out',
  'Date'
];

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
const MemberManagement: React.FC = () => {
 
    return (
      <div>
      <p className="pl-4 opacity-70 text-sm py-1 mb-2">Mark your attendance to attend the gym</p>
      <div className="grid grid-cols-4 gap-2 px-9 mb-6">
            {AttendanceCardList.map(item=>(
                <Card title={item.title} number={item.number}/>
            ))}
        </div>
        <div className="flex justify-center">
          <Table headers={headers} list={list} />  
        </div>
      </div>
    );
  }
  
  export default MemberManagement;