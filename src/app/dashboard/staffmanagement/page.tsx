import Table from "@/app/ui/dashboard/table/table";
import React from "react";
import Card from "@/app/ui/dashboard/card/card";
const headers=[
  {label:' Employee ID', colspan:2},
  'Employee Name',
  'Employee Type',
  'Shift',
  'Shift Time',
  'Check In',
  'Check Out',
  'Date',
]

const list =[
  '#MGYM-89274-110',
  'Emma Tran ',
  'Cat (full-time)',
  'Day',
  "7:00 AM",
  "6:40 AM",
  '2:00 PM',
  "Jun 4, 2024"
];

const StaffManagementCardList = [
  { title: "Total Employees", number: 61 },
  { title: "Total's Attendance", number: 36 },
  { title: "Late Comings", number: 3 },
  { title: "Off", number: 47 },
];

const StafManagement: React.FC = () => {
    return (
      <div>
        <p className="pl-4 opacity-70 text-sm py-1">Detailed view of the staff member</p>        
          <div className="px-3 sm:grid grid-cols-4 gap-x-2">
              {StaffManagementCardList.map((item, index) => (
              <Card key={index} title={item.title} number={item.number} />
              ))}
          </div>
        <Table list={list} headers={headers} />
      </div>
    );
  }
  
  export default StafManagement;
  