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
          <Table />  
        </div>
      </div>
    );
  }
  
  export default MemberManagement;