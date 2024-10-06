import React from 'react';
import ImageGallery from './ImageGallery';
import ListingInfo from './ListingInfo';
import { Link } from 'react-router-dom';

// Accept listing data and listingId as props
export default function ListingBox({
  listingId,
  rent_sale,
AdOwner,
 PropType,
Title,
Price,
Description,
PropertySize,
Bedrooms,
Bathrooms,
Furnished,
Keywords,
City,
Neighborhood,
Facilities,
File
}) {

  return (
    <Link  to={`/listing/${listingId}`}  className='grid grid-cols-12 border box-border overflow-hidden bs2 rounded-xl'>
      {/* Pass listingId to ImageGallery */}
    

      <ImageGallery File={File} />

      <ListingInfo
listingid={listingId}
       rent_sale={rent_sale}
AdOwner={AdOwner}
      PropType={PropType}
Title={Title}
Price={Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
Description={Description}
PropertySize={PropertySize}
Bedrooms={Bedrooms}
Bathrooms={Bathrooms}
Furnished={Furnished}
Keywords={Keywords}
City={City}
Neighborhood={Neighborhood}
Facilities={Facilities}
File={File} 
      />
    </Link>
  );
}
