import React, {useState} from 'react';
import StaticApartment from "./StaticApartment"
import StaticApartment1 from "./StaticApartment1"
const SearchSection = () =>{



  const [activeTab ,setActiveTab] = useState('sell')

  const handleTabChange = (tab) =>{
    setActiveTab(tab);
  }


  return (
    <div>
 <div className='flex m-6 justify-around'>
      <div className='flex gap-x-6'>
            <button className={` ${activeTab === 'sell' ? 'btnactive': 'btninactive'}`}
            onClick={() =>handleTabChange('sell')}
           >for sale</button>

             <button className={` ${activeTab === 'rent' ? 'btnactive': 'btninactive'}`}
            onClick={() =>handleTabChange('rent')}
           >to rent</button>
      </div>
 </div>

 <div className="mt-4">
{activeTab === 'sell' && (
<StaticApartment/>
)}
 </div>

 <div className="mt-4">
{activeTab === 'rent' && (

<StaticApartment1/>

)}
 </div>


 </div>
  );

}
export default SearchSection;









  


