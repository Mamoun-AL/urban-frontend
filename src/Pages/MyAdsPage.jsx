import React, { useEffect, useState } from 'react';
import { links } from '../data/AdsNavlinks.jsx';
import ProfileNav from '../Components/ProfileNav.jsx';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Skelton1 from '../Components/Skelton1.jsx';
import DeleteConfirm from '../Components/DeleteConfirm.jsx';

// Utility functions
const formatDate = (dateString) => {
  const options = { month: 'short', day: '2-digit' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
};
const simulateNetworkLatency = (ms) => new Promise(resolve => setTimeout(resolve, ms));


const calculateRemainingDays = (createdAt) => {
  const expirationDate = new Date(createdAt);
  expirationDate.setDate(expirationDate.getDate() + 30);
  return Math.max(Math.ceil((expirationDate - new Date()) / (1000 * 60 * 60 * 24)), 0);
};

export default function MyAdsPage() {
   const [deletebtn,setdeletebtn] = useState('Yes, delete!') 
  const [adToDelete, setAdToDelete] = useState(null);
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [popoverStates, setPopoverStates] = useState({});
  const [successMessage, setSuccessMessage] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get('/my-listings');
        setAds(response.data);
        const initialPopoverStates = response.data.reduce((acc, ad) => {
          acc[ad._id] = false;
          return acc;
        }, {});
        setPopoverStates(initialPopoverStates);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }

    return () => {
      body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const togglePopup = (adId = null) => {
    setIsOpen(!isOpen);
    setAdToDelete(adId);
  };

  const togglePopover = (adId) => {
    setPopoverStates((prev) => ({
      ...prev,
      [adId]: !prev[adId],
    }));
  };

  const deleteAd = async (adId) => {
    try {
      setdeletebtn(<div class="loader"></div>);
      await simulateNetworkLatency(1000); 
      await axios.delete(`/ad/delete/${adId}`);
      setAds(ads.filter((ad) => ad._id !== adId));
      setSuccessMessage('Ad deleted successfully!'); // Set success message
      setIsOpen(false);
    } catch (err) {
      console.error("Failed to delete ad:", err);
    } finally {
      document.body.classList.remove('overflow-hidden');
      setdeletebtn('Yes, delete!');
      setTimeout(() => {
        window.location.href = '/myads';
      }, 2000);
    }
  };

  if (loading) return <Skelton1 />;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="relative">
      <h1 className='capitalize text-3xl mb-8 text-black'>Manage Ads</h1>
      <div className='grid grid-cols-4 relative gap-10'>
        <div className='col-span-1'>
          <ProfileNav links={links} />
        </div>
        <div className='col-span-3 pt-3'>
          {ads.map((ad) => {
            const backgroundColor = ad.status === 'live' ? '#16a34a' : '#ef4444';
            const remainingDays = calculateRemainingDays(ad.createdAt);

            return (
              <div key={ad._id} className='flex items-start justify-between border-b pt-3 pb-6'>
                <img
                  src={`http://localhost:3000/uploads/${ad.File[0]}`}
                  alt={ad.Title}
                  style={{ width: '150px', height: '120px', objectFit: 'cover' }}
                  className='flex-shrink-0'
                />
                <div className='flex-1 flex flex-col justify-between px-3'>
                  <p style={{ backgroundColor, color: '#f8f8f8', width: 'fit-content' }} className='inline-flex capitalize font-light text-md rounded-xl px-2'>
                    {ad.status}
                  </p>
                  <Link to={`/listing/${ad._id}`} className='font-medium capitalize text-black'>{ad.Title}</Link>
                  <p className='text-sm text-[#8e8181]'>Last Updated: {formatDate(ad.updatedAt)}</p>
                  <div className='flex gap-x-1 text-black mt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className='capitalize'>Ad expires in {remainingDays} days</p>
                  </div>
                </div>
                <div className="relative inline-block">
                  <div className="hvbtn text-white px-2 py-1 rounded-md" onClick={() => togglePopover(ad._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                  </div>
                  {popoverStates[ad._id] && (
                    <div className="absolute mt-2 w-25 overflow-hidden bg-white border border-gray-200 rounded-md bs1 z-10">
                      <ul className="inline-block">
                        <Link to={`/myads/${ad._id}`}>
                          <div className="text-left px-4 py-2 hover:bg-[#e8e8e8] text-gray-700">
                            <div className='flex gap-x-1 text-green mt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                              </svg>
                              <p className='capitalize text-green'>edit</p>
                            </div>
                          </div>
                        </Link>
                        <li>
                          <button onClick={() => togglePopup(ad._id)} className="w-full text-left px-4 hover:bg-[#e8e8e8] py-2 text-gray-700">
                            <div className='flex gap-x-1 text-green mt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                              <p className='capitalize text-green'>delete</p>
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
           {successMessage && (
        <div className="bg-green-100 capitalize text-green rounded mb-4">
          <strong>Success:</strong> {successMessage}
        </div>
      )}
        </div>
      </div>
      {isOpen && (
        <DeleteConfirm togglePopup={togglePopup} deleteAd={() => deleteAd(adToDelete)} deletebtn={deletebtn} />
      )}   
    </div>
  );
}
