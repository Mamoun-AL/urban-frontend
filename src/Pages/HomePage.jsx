import React, { useState } from 'react';
import SearchBar from "../Components/SearchBar";
import StatBoxes from "../Components/StatBoxes";
import SearchSection from "../Components/SearchSection"
import Login from "../Components/Login";





const HomePage = () => {

    

  return (
      <div>   
   <div className="h-screen z-0  flex align-middle items-center  rounded-lg max-h-[440px]"
   style={{
     backgroundImage: 'url("searchbackgorund.png")',
   }}>
      <div className="mx-auto flex flex-col  items-center  ">
      <p className="text-grayf8 text-5xl font-bold mb-5 uppercase">discover your new home</p>
      <p className="text-grayf8  mb-3 capitalize text-xl">Helping 100 million renters find their perfect fit.</p>

<SearchBar/>
      </div>

  
     
   </div>
   <div className="grid grid-cols-1 font-bold mt-3">
   <p className="text-black    text-4xl mt-2 nb-2 font-bold capitalize">your trusted real estate <br></br> platform.</p>
   </div>

   <div className="grid grid-cols-2  gap-x-4 font-bold mt-3">
      <div className="grid grid-cols-2 gap-2">
      <StatBoxes text="satsified customers" number="12k+"  bgcolor="bg-grayd9" txtcolor="text-black"/>
      <StatBoxes text="years in the market" number="25+"  bgcolor="bg-darkblue" txtcolor="text-grayf8"/>
      <StatBoxes text="real ads" number="15k+"  bgcolor="bg-green" txtcolor="text-grayf8"/>
      <StatBoxes text="satsified customers" number="19+"  bgcolor="bg-black" txtcolor="text-grayf8"/>
      </div>

      <div className="bg-grayd9 rounded-2xl grid grid-cols-2 p-5 ">
            <div className="text-left font-medium text-xl leading-8 " >
            Deciding to become a homeowner is a big deal! Luckily, with Homes.com, you get the most accurate homes for sale property data, 

            </div>
            <div className="bg-contain">
                  <img  className="w-full h-[320px]" src="/pexels-zachtheshoota-1838640 1.png" alt="" />

            </div>

      </div>
      </div>
      <div className="grid grid-cols-1 font-bold mt-3">
   <p className="text-black    text-4xl mt-2 mb-2 font-bold capitalize"> popular destinations in UAE.</p>
   </div>
     <table className="">
      <tbody>
            <tr >
                  <td rowSpan="2" className="w-[250px]  p-1  h-full">
                    <a href='listing?city=dubai&neighborhood=Downtown' >
                  <div className='des-box overflow-hidden relative'>
                         <img   className=" w-full h-[428px] rounded-xl" src="pexels-alexazabache-3214995.jpg" alt="" />
                         <div className='text-anim pe-5'>
                              <p className='text-xl font-medium'>downtown dubai</p>
                              <p className='text-sm'>home to the worlds tallest tower and biggest mall  </p>
                              <hr className='mt-2 mb-2' />
                              <p className='text-sm'>Studio, 1 and 2+ Bedroom Apartments</p>
                              <p className='text-sm'>starting from 40,000 AED</p>
                         </div> 
                         </div>
                         </a>
                  </td>
                  <td className="p-1 ">
                  <a href='listing?city=dubai&neighborhood=Downtown' >

                  <div className='des-box overflow-hidden relative'>
                         <img className="rounded-xl rrdf"  src="2-dubai-international-city.png" alt="" />
                         <div className='text-anim pe-5'>
                              <p className='text-xl font-medium'>international city</p>
                              <p className='text-sm'>an 800-hectare residential area inspired by countries</p>
                              <hr className='mt-2 mb-2' />
                              <p className='text-sm'>Studio, 1 and 2+ Bedroom Apartments</p>
                              <p className='text-sm'>starting from 40,000 AED</p>
                         </div> 
                         </div>
               </a>
                    </td>
                  <td className="p-1 ">
                  <a href='listing?city=dubai&neighborhood=Palm+Jumeirah' >

                  <div className='des-box overflow-hidden relative'>

                         <img className="rounded-xl rrdf"  src="pexels-abid-ali-150086727-10593605.jpg" alt="" />
                         <div className='text-anim pe-5'>
                              <p className='text-xl font-medium'>the palm jumeirahi</p>
                              <p className='text-sm'>live on the 8th wonder of the world. enough said!  </p>
                              <hr className='mt-2 mb-2' />
                              <p className='text-sm'>Studio, 1 and 2+ Bedroom Apartments</p>
                              <p className='text-sm'>starting from 40,000 AED</p>
                         </div> 
                         </div>
 </a>
                   </td>
                  <td className="p-1 ">
                  <a href='listing?city=dubai&neighborhood=Marina' >

                  <div className='des-box overflow-hidden relative'>

                         <img className="rounded-xl rrdf"  src="pexels-nextvoyage-1470405.jpg" alt="" />
                         <div className='text-anim pe-5'>
                              <p className='text-xl font-medium'>dubai marina</p>
                              <p className='text-sm'>vibrant waterfront community with amazing views </p>
                              <hr className='mt-2 mb-2' />
                              <p className='text-sm'>Studio, 1 and 2+ Bedroom Apartments</p>
                              <p className='text-sm'>starting from 40,000 AED</p>
                         </div> 
                         </div>
</a>
                   </td>
                  <td className="p-1 ">
                  <a href='listing?city=dubai&neighborhood=Jumeirah+Beach+Residence' >

                  <div className='des-box overflow-hidden relative'>

                         <img className="rounded-xl rrdf"  src="Rotana-Dubai-2-of-5.jpg" alt="" />
                         <div className='text-anim pe-5'>
                              <p className='text-xl font-medium'>JBR</p>
                              <p className='text-sm'>live be the bech with stunning waterfront views  </p>
                              <hr className='mt-2 mb-2' />
                              <p className='text-sm'>Studio, 1 and 2+ Bedroom Apartments</p>
                              <p className='text-sm'>starting from 40,000 AED</p>
                         </div> 
                         </div>
</a>
                    </td>


            </tr>
            <tr className=" ">
            
            <td colSpan="2" className="w-[250px]   p-1"> 
            <a href='listing?city=dubai&neighborhood=Downtown' >

            <div className='des-box overflow-hidden relative'>

                  <img className=" rounded-xl h-[210px] w-full " src="pexels-nextvoyage-1470502.jpg" alt="" />
                  <div className='text-anim pe-5'>
                              <p className='text-xl font-medium'>dubai silicon qasis</p>
                              <p className='text-sm h-[40px]'>a family-friendly suburb bursting with amenities  </p>
                              <hr className='mt-2 mb-2' />
                              <p className='text-sm'>Studio, 1 and 2+ Bedroom Apartments</p>
                              <p className='text-sm'>starting from 40,000 AED</p>
                         </div> 
                         </div>
</a>
                  </td>
            <td className="p-1 ">
            <a href='listing?city=dubai&neighborhood=Downtown' >

            <div className='des-box overflow-hidden relative'>

                   <img className="rounded-xl rrdf " src="dc24dccab21f3bed68e8522761ef279915e094824faeb9728d6871ffd1be479d.jpg" alt="" />
                   <div className='text-anim pe-5'>
                              <p className='text-xl font-medium'>jumeirah lake towers</p>
                              <p className='text-sm'>walk freely among high rises overlooking lakes </p>
                              <hr className='mt-2 mb-2' />
                              <p className='text-sm'>Studio, 1 and 2+ Bedroom Apartments</p>
                              <p className='text-sm'>starting from 40,000 AED</p>
                         </div> 
                         </div>
</a>
            </td>
            <td className="p-1 ">
            <a href='listing?city=dubai&neighborhood=Downtown' >

            <div className='des-box overflow-hidden relative'>

                   <img className=" rounded-xl rrdf" src="pexels-maxavans-5075798.jpg" alt="" />
                   <div className='text-anim pe-5'>
                              <p className='text-xl font-medium'>bussiness bay</p>
                              <p className='text-sm'>a centrally-located district adorning the dubai creek </p>
                              <hr className='mt-2 mb-2' />
                              <p className='text-sm'>Studio, 1 and 2+ Bedroom Apartments</p>
                              <p className='text-sm'>starting from 40,000 AED</p>
                         </div> 
                         </div>
</a>
                   </td>

            </tr>
      </tbody>
    </table>
    <div className="grid grid-cols-1 font-bold mt-3">
   <p className="text-black    text-4xl mt-2 nb-2 font-bold capitalize">popular searches in UAE.</p>
   </div>

  < SearchSection/>
  







   </div>//leave this one
  
  );
      }
      export default HomePage;

