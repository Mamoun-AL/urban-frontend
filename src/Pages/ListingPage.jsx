import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ListingNav from '../Components/ListingNav';
import ListingBox from '../Components/ListingBox';
import SearchBar from '../Components/SearchBar';
import SearchBar2 from '../Components/SearchBar2';
import ListingsPageScleton from '../Components/ListingsPageScleton'


// Helper function to parse query strings
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ListingPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = useQuery(); // Get query parameters from URL

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Construct the parameters object for the API request
        const params = {
          city: query.get('city'), // Optional
          rent_sale: query.get('rent_sale'), // Optional
          propertyType: query.get('propertyType'), // Optional
          bedrooms: query.get('bedrooms'), // Optional
          bathrooms: query.get('bathrooms'), // Optional
          furnished: query.get('furnished'), // Optional
          minPrice: query.get('minPrice'), // Optional
          maxPrice: query.get('maxPrice'), // Optional
          neighborhood: query.get('neighborhood'), // Optional
        };

        // Send GET request to the filtered_listing endpoint
        const response = await axios.get('http://localhost:3000/filtered_listings', { params });

        setListings(response.data); // Update listings with fetched data
      } catch (error) {
        setError(error.message); // Set error state if request fails
      } finally {
        setLoading(false); // Ensure loading state is reset after request completes
      }
    };

    fetchListings();
  }, [query]);

  if (loading) return <p> <ListingsPageScleton/> </p>; // Loading state
  if (error) return <p>Error: {error}</p>; // Error state

  return (
    <div>
      <SearchBar2 />

      <div className="grid grid-cols-8">
        <div className="col-span-6">
          <div className="flex justify-between mt-4 font-semibold">
            <p className="text-2xl capitalize text-green mb-5">
            Properties for {query.get('rent_sale') || 'rent/sale'} in {query.get('city') || 'UAE'}
            </p>
          </div>
          <div className="grid  gap-y-4">
            {listings.map((listing) => (
              <ListingBox
                key={listing._id}
                listingId={listing._id}
                rent_sale={listing.rent_sale}
                AdOwner={listing.AdOwner}
                PropType={listing.PropType}
                Title={listing.Title}
                Price={listing.Price}
                Description={listing.Description}
                PropertySize={listing.PropertySize}
                Bedrooms={listing.Bedrooms}
                Bathrooms={listing.Bathrooms}
                Furnished={listing.Furnished}
                Keywords={listing.Keywords}
                City={listing.City}
                Neighborhood={listing.Neighborhood}
                Facilities={listing.Facilities}
                File={listing.File}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
