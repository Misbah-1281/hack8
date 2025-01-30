import React from "react"
import { MdOutlineEmail } from "react-icons/md";


const Offers=()=>{
  return(
    <main className="w-full flex justify-center items-center mt-5">
     <div className="w-[80%]  h-full sm:h-[150px] bg-black text-white flex flex-col sm:flex-row items-center p-5 rounded-[20px]">
      <h1 className=" text-4xl sm:text-4xl font-extrabold">STAY UP TO DATE ABOUT OUR LATEST OFFERS</h1>
      <div className="space-y-3">
        <div className="flex justify-start items-center sm:w-[330px] h-[40px] rounded-[62px] bg-[#FFFFFF]">
        <MdOutlineEmail className="text-xl ml-2 text-black" />


          <input placeholder="search item..."className="w-full ml-2 outline-none  h-full rounded-[62px]" ></input>
        </div>
        <div className="flex justify-center items-center sm:w-[330px] h-[40px] rounded-[62px] bg-[#FFFFFF]">
        <p className="text-black">Subscribe to Newsletter</p>
        </div>
      </div>
     </div>
    </main>
  )
}
export default Offers