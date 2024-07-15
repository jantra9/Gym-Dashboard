import Table from "@/app/ui/dashboard/table/table";
import React from "react";
import Card from "@/app/ui/dashboard/card/card";
const headers=[
  {label:'Equipment ID', colspan:2},
  'Equipment Name',
  'Fault',
  'Date',
  'On Duty Trainer',
  'Reported date',
  'Given to repair',
  'Satus',
]

const list =[
  '#MGYM-89274-110',
  'Exercise Wheel ',
  'Broken',
  'Nov 11, 2022',
  "Emma herself",
  "Nov 11, 2024",
  'Nov 11, 2024',
  "Disposed"
];

const EquipmentManagement: React.FC = () => {
    return (
      <div>
        <p className="pl-4 opacity-70 text-sm py-1">Detailed view of all available equipment</p>
        <div className="py-3 sm:grid grid-cols-4 gap-x-2 px-6 sm:py-5">
          <Card title="New Equipment" number={3}/>
          <Card title="In Repair" number={3}/>
          <Card title="Collected" number={2}/>
          <Card title="Total Available Equipment" number={25}/>
        </div>
        <Table list={list} headers={headers} />
      </div>
    );
  }
  
  export default EquipmentManagement;