import Image from "next/image";
const Dress =()=>{
  return(
    <div className="w-full h-full mt-8 sm:0 sm:h-[500px] bg-[#F0F0F0]  flex flex-col justify-start items-center pt-8">
      {/*top div*/}
     <div className="mt-2">
      <h1 className="text-3xl font-bold">BROWSE BY DRESS STYLE</h1>
     </div>
     {/*bottom*/}
     <div className="w-[90%] h-full sm:h-[600px] mt-5 flex flex-wrap justify-center items-center ">
     <div className="w-[400px] h-[200px] ml-2 mt-1 relative">
      <Image src={"/image.14.png"} alt="image" className="w-full h-full rounded-[20px]"width={100} height={100}></Image>
      </div>
      <div className="w-[600px] h-[200px] ml-2 mt-1 relative">
      <Image src={"/image.12.png"} alt="image" className="w-full h-full rounded-[20px]"width={100} height={100}></Image>
     </div>
     <div className="w-[600px] h-[200px] ml-2 mt-1 relative">
      <Image src={"/image.11.png"} alt="image" className="w-full h-full rounded-[20px]"width={100} height={100}></Image>
       </div>
       <div className="w-[400px] h-[200px] ml-2 mt-1 relative">
      <Image src={"/image.13.png"} alt="image" className="w-full h-full rounded-[20px]"width={100} height={100}></Image>
      </div>
     </div>
    </div>
  )
}
export default Dress