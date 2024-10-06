import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import axios from 'axios';
import ListingImages from '../Components/ListingImages';
import AdDetalis1 from '../Components/AdDetalis1';
import Gallery from '../Components/Gallery'
import Skelton2 from '../Components/Skelton2';

export default function AdPage() {


function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th'; // except for 11-13
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function formatDateWithOrdinal(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-GB', { month: 'long' });
  const year = date.getFullYear();
  return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}


  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { ad_id } = useParams();

  useEffect(()=>{
      const fetchAd = async () =>{
            try{
             const response = await  axios.get(`ad/${ad_id}`);
             await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay of 1 second
             setAd(response.data);
             console.log(response.data)
            }
            catch (err){
                  setError('Failed to fetch advertisement');
            }
            finally {
                  setLoading(false);
                }
      };

    fetchAd();
}, [ad_id]);

if (loading) return <div><Skelton2/></div>
if (error) return <div>{error}</div>; 
  return (
    <div>
      <ListingImages file={ad.File}/>

      <div className="grid grid-cols-12">
            <div className='col-span-8'>
            <AdDetalis1
            AdOwner = {ad.AdOwner}
            Bathrooms={ad.Bathrooms}
            Bedrooms={ad.Bedrooms}
            City={ad.City}
            Description={ad.Description}
            Facilities={ad.Facilities}
            Furnished={ad.Furnished}
            Keywords={ad.Keywords.split(' ').join(' | ')}
            Neighborhood={ad.Neighborhood}
            Price={ad.Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            PropType={ad.PropType}
            PropertySize={ad.PropertySize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            Title={ad.Title}
            rent_sale={ad.rent_sale}
            updatedAt={formatDateWithOrdinal(ad.updatedAt)}
            createdAt={formatDateWithOrdinal(ad.createdAt)}
            />
            </div>
      </div>
    </div>
  )
}
