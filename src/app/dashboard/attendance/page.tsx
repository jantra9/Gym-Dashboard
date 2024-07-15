import Card from "@/app/ui/dashboard/card/card";
import Image from "next/image";
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
const MemberList=[
    {
        title:"Member ID",
        placeholder:"#MGYM-89274-110"
    },
    {
        title:"Member name",
        placeholder:"Emma Tran"
    },
    {
        title:"Membership Type",
        placeholder:"Pet (full-time)"
    },
    {
        title:"Joined",
        placeholder:"November, 2020"
    },
    {
        title:"Membership Expiry",
        placeholder:"Unlimited"
    },
];
const Attendance: React.FC = () => {
 
    return (
      <div className="pb-36 sm:pb-2">
        <p className="pl-4 opacity-70 text-sm pb-4">Mark your attendance to attend the gym</p>
        <div className=" gap-2 px-9 sm:grid grid-cols-4">
            {AttendanceCardList.map(item=>(
                <Card title={item.title} number={item.number}/>
            ))}
        </div>
        <div className="py-0 sm:flex px-9 sm:py-5 gap-4">
            <div className="flex justify-center py-4 sm:block">
                <Image
                src="/Avatar.1.jpg"
                alt="User Avatar"
                width={200}
                height={200}
                style={{ borderRadius: '15px' }}
                />
            </div>
            <div className="flex flex-col">
                {
                MemberList.map(item=>(
                    <div className="flex flex-col pb-3">
                    <label className="font-semibold">{item.title}</label>
                    <input placeholder={item.placeholder} className="border-2 sm:w-72 h-9 rounded-lg outline-none px-2"/>     
                    </div>      
                ))
                } 
                <div className="bg-black text-white flex justify-center py-2 rounded-lg mb-3">Confirm</div>
                <div className="bg-gray-200 border border-gray-400 flex justify-center py-2 rounded-lg">Cancel</div>
            </div>

        </div>
      </div>
    );
  }
  
  export default Attendance;