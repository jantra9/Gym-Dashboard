import Card from "@/app/ui/dashboard/card/card";
import Chart from "@/app/ui/dashboard/chart/chart";
import ProfileInfo from "@/app/ui/dashboard/profile-info/profile-info";
const ProfileCardList=[
    {
        title:"Checked in",
        number:61,
    },
    {
        title:"Not Checked In",
        number:5,
    },
    {
        title:"Late Comings",
        number:5,
    },
    {
        title:"Total Hours",
        number:244
    }
]
const Attendance: React.FC = () => {
 
    return (
      <div>
        <p className="pl-4 opacity-70 text-sm pb-4">Detaild view of member details</p>
        <div className="flex justify-center pb-4">
            <ProfileInfo />
        </div>
        <div className="grid grid-cols-4 gap-2 px-9">
            {ProfileCardList.map(item=>(
                <Card title={item.title} number={item.number}/>
            ))}
        </div>
        <div>
            <Chart />
        </div>
      </div>
    );
  }
  
  export default Attendance;