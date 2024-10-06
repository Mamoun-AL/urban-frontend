import React, {useState} from 'react';



const Footer = () => {
      return (
            <div className=' px-6   bg-green'>
                  <div className='container pb-3 mx-auto'>
            <div className='grid grid-cols-5 text-grayd9  px-4  py-8'>
                  <div className='col-span-2  mx-1'>
                        <p className='font-bold text-3xl text-grayf8  uppercase'>ubranrealty.com</p>
                        <p className='text-md capitalize  mb-6'>your #1 real estate platfrom in the UAE</p>
                        <p className='text-sm'>Deciding to become a homeowner is a big deal! Luckily, with Homes.com, you get the most accurate homes for sale property data, an agent directory, and collaboration tools to browse with your agent and co-shopper to help you make the right decision.</p>


                  </div>

                  <div>
                        <p className='font-bold uppercase  mb-2 text-xl'>information</p>
                        <div className='flex flex-col '>
                              <p className='pb-2'>about us</p>
                              <p className='pb-2'>awards & recogntion</p>
                              <p className='pb-2'>egift cards</p>
                              <p className='pb-2'>sell on ubranrealty.com</p>
                              
                        </div>
                  </div>
                  <div>
                        <p className='font-bold uppercase  mb-2 text-xl'>help</p>
                        <div className='flex flex-col '>
                              <p className='pb-2'>faqs</p>
                              <p className='pb-2'>return center</p>
                              <p className='pb-2'>refund</p>
                              <p className='pb-2'>contact us</p>
                              
                        </div>
                  </div>
                  <div>
                        <p className='font-bold uppercase  mb-2 text-xl'>JOIN OUR COMMUNITY</p>
                        <div className='flex flex-col '>
                              <p className='pb-2'>faqs</p>
                              <p className='pb-2'>return center</p>
                              <p className='pb-2'>refund</p>

                              
                        </div>
                  </div>

            </div>
            </div>
            </div>
      )
}
export default Footer;









  


