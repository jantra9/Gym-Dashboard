import Image from "next/image";
import { CiSearch } from "react-icons/ci";
const TopLogo = () => {
  return (
    <>
           <div className="flex justify-between px-6 gap-x-3 ">
               <div className='text-black bg-white'>
                <h1 className='font-bold'>FITGYM</h1>
                <p className='opacity-75 text-sm'>Gym Management System</p>
                       </div>
                    <div className="flex gap-x-4">
                        <div>
                                <Image
                                src="/Avatar.jpg"
                                alt="User Avatar"
                                width={40}
                                height={40}
                                style={{ borderRadius: '15px' }}
                            />
                        </div>
                        <div className="w-10 h-10 bg-gray-200 border flex justify-center items-center rounded-lg">
                        <CiSearch size={28} />
                        </div>
                    </div>
           </div>
        <div>
            <hr className=" h-0.5 bg-gray-800 mt-4" />
        </div>
    </>
  )
}

export default TopLogo