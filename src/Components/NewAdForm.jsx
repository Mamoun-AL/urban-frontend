import React, { useState, useEffect  } from 'react';
import PrimaryBtn from './PrimaryBtn';
import axios from 'axios';


const NewAdForm = () => {
  const [formData, setFormData] = useState({
    rent_sale: '',
    AdOwner: '',
    PropType: '',
    Title: '',
    Price: 'null',
    Description: '',
    PropertySize: '',
    PropertyAge: '',
    Bedrooms: '',
    Bathrooms: '',
    Furnished: '',
    Keywords: '',
    City: '',
    Neighborhood: '',
    Facilities: [],
    Files: [],
    deletedFiles: [], // Track deleted files
  });
  const [Neighborhoods, setNeighborhood] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [innerSubBtn, setinnerSubBtn] = useState('place my ad');

  const formatPrice = (value) => {
    const number = Number(value);
    return isNaN(number) ? '' : number.toLocaleString();
  };

  const handleImageDelete = (name) => {
    setImagePreviews(prev => prev.filter(preview => preview.name !== name));
    setFormData(prev => ({
      ...prev,
      Files: prev.Files.filter(file => file.name !== name),
      deletedFiles: [...prev.deletedFiles, name], // Mark for deletion
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
  
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        Facilities: checked
          ? [...prev.Facilities, value]
          : prev.Facilities.filter(facility => facility !== value),
      }));
    } else if (type === 'file') {
      const fileArray = Array.from(files);
      const previews = fileArray.map(file => {
        const objectURL = URL.createObjectURL(file);
        return {
          name: file.name,
          url: objectURL
        };
      });
      setImagePreviews(previews);
      setFormData(prev => ({
        ...prev,
        Files: fileArray,
      }));
      
    } else if (name === 'Price') {
      const rawValue = value.replace(/,/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: rawValue,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const getNeighborhood = async (selectedCity) => {
    try {
      const res = await axios.get(`/neighborhood?city=${selectedCity}`);
      setNeighborhood(res.data); 
      console.log(res.data,selectedCity)
    } catch (error) {
      console.error('Error fetching neighborhoods:', error); 
    }
  };
  const handelCityChange = (e) => {

    const { name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }
 

  const handleKeywordsChange = (e) => {
    setFormData(prev => ({
      ...prev,
      Keywords: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Check if no files are uploaded and all existing files have been deleted
    const filesDeleted = formData.deletedFiles.length > 0;
    const filesUploaded = formData.Files.length > 0;

    if (filesDeleted && !filesUploaded) {
      alert("Please upload at least one file.");
      return; // Prevent form submission
    }

    try {
      setinnerSubBtn(<div class="loader"></div>)
      const formDataToSend = new FormData();
  
      for (const key in formData) {
        if (Array.isArray(formData[key])) {
          if (key === 'Facilities') {
            formData[key].forEach(item => formDataToSend.append('Facilities[]', item));
          } else if (key === 'Files') {
            formData[key].forEach(file => {
              console.log(`Appending file: ${file.name}`);
              formDataToSend.append('Files[]', file);
            });
          } else if (key === 'deletedFiles') {
            formData[key].forEach(file => formDataToSend.append('deletedFiles[]', file));
          }
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
  
      // Debugging FormData content
      for (let [key, value] of formDataToSend.entries()) {
        console.log(`${key}:`, value);
      }

      const response = await axios.post('/listings', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccess('Your ad has been placed successfully!');
      setTimeout(() => {
        window.location.href = '/myads';
      }, 2000);
  
      console.log('Response data:', response.data);
  
      // Clear the form and image previews on successful submission
      setFormData({
        rent_sale: '',
        AdOwner: '',
        PropType: '',
        Title: '',
        Price: 'null',
        Description: '',
        PropertySize: '',
        PropertyAge: '',
        Bedrooms: '',
        Bathrooms: '',
        Furnished: '',
        Keywords: '',
        City: '',
        Neighborhood: '',
        Facilities: [],
        Files: [],
        deletedFiles: [], // Reset deleted files
      });
      setImagePreviews([]);
  
    } catch (error) {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        setError(error.response.data.message || 'An error occurred while submitting the form.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
    finally{
      setinnerSubBtn('place an ad')
    }
  };
  useEffect(() => {
    if (formData.City) {
      getNeighborhood(formData.City);
    }
  }, [formData.City]);


  return (
    <form onSubmit={handleSubmit}>
  
      <p className='capitalize text-green text-2xl mb-3 font-semibold'>Place an ad</p>

      <div className="grid grid-cols-3 gap-x-4">
        <div className='col-span-1'>
          <label className='block capitalize mb-1 font-medium' htmlFor="rent_sale">What you want to do with your property</label>
          <select
            id="rent_sale"
            name="rent_sale"
            value={formData.rent_sale}
            onChange={handleChange}
            required
            className='w-full bg-none rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'>
            <option value="">select</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
        </div>

        <div className='col-span-1'>
          <label className='block capitalize mb-1 font-medium' htmlFor="AdOwner">Are you an?</label>
          <select
            id="AdOwner"
            name="AdOwner"
            value={formData.AdOwner}
            onChange={handleChange}
            required
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'>
            <option value="">select</option>
            <option value="landlord">Landlord</option>
            <option value="agent">Agent</option>
          </select>
        </div>

        <div className='col-span-1'>
          <label className='block capitalize mb-1 font-medium' htmlFor="PropType">Choose your property type</label>
          <select
            id="PropType"
            name="PropType"
            value={formData.PropType}
            onChange={handleChange}
            required
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="townhouse">Townhouse</option>
            <option value="penthouse">Penthouse</option>
          </select>
        </div>

        <div className='mt-4'>
          <label className='block capitalize mb-1 font-medium' htmlFor="Title">Title for your property</label>
          <input
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'
            type="text"
            required
            name='Title'
            id="Title"
            value={formData.Title}
            onChange={handleChange}
            placeholder='Enter a title'
          />
        </div>

        <div className='mt-4'>
          <label className='block capitalize mb-1 font-medium' htmlFor="Price">Price</label>
          <input
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'
            type="text"
            required
            name='Price'
            id="Price"
            value={formatPrice(formData.Price)}
            onChange={handleChange}
            placeholder='Enter your price'
          />
        </div>

        <div className='mt-4'>
          <label className='block capitalize mb-1 font-medium' htmlFor="Price">property age</label>
          <input
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'
            type="number"
            required
            name='PropertyAge'
            id="PropertyAge"
            value={formData.PropertyAge}
            onChange={handleChange}
            placeholder='Enter property age'
          />
        </div>
        
        <div className="mt-4 col-span-2">
          <label className='  block capitalize mb-1 font-medium' htmlFor="Description">Enter a description</label>
          <textarea
            name='Description'
            id="Description"
            value={formData.Description}
            onChange={handleChange}
            placeholder='Enter a description for your property'
            className='w-full h-[120px]  rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'
            required
          />
        </div>

        <div className='mt-4'>
          <label className='block capitalize mb-1 font-medium' htmlFor="PropertySize">Property size</label>
          <input
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'
            type="number"
            required
            name='PropertySize'
            id="PropertySize"
            value={formData.PropertySize}
            onChange={handleChange}
            placeholder='Enter your property size'
          />
        </div>

        <div className='col-span-1'>
          <label className='block capitalize mb-1 font-medium' htmlFor="Bedrooms">Bedrooms</label>
          <select
            name='Bedrooms'
            id="Bedrooms"
            value={formData.Bedrooms}
            onChange={handleChange}
            required
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'>
            <option value="">Select</option>
            {[...Array(9).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>

        <div className='col-span-1'>
          <label className='block capitalize mb-1 font-medium' htmlFor="Bathrooms">Bathrooms</label>
          <select
            name='Bathrooms'
            id="Bathrooms"
            value={formData.Bathrooms}
            onChange={handleChange}
            required
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'>
            <option value="">Select</option>
            {[...Array(9).keys()].map(num => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>

        <div className='col-span-1'>
          <label className='block capitalize mb-1 font-medium' htmlFor="Furnished">Is it furnished?</label>
          <select
            name='Furnished'
            id="Furnished"
            value={formData.Furnished}
            onChange={handleChange}
            required
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'>
            <option value="">Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-x-4 mt-4'>
        <div className='col-span-1'>
          <label className='block capitalize mb-1 font-medium' htmlFor="Keywords">Enter keywords (separated by space)</label>
          <input
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'
            type="text"
            name='Keywords'
            id="Keywords"
            value={formData.Keywords}
            onChange={handleKeywordsChange}
            placeholder='Enter keywords separated by space'
            required
          />
        </div>

        <div className='col-span-1'>
          <label className='block capitalize mb-1 font-medium' htmlFor="City">City</label>
          <select
            name='City'
            id="City"
            value={formData.City}
            onChange={handelCityChange}
            required
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'>
            <option value="">Select</option>
            <option value="dubai">Dubai</option>
            <option value="sharjah">Sharjah</option>
            <option value="ajman">Ajman</option>
            <option value="abu dhabi">Abu Dhabi</option>
          </select>
        </div>

        <div className='col-span-1'>
          <label className='block capitalize mb-1 font-medium' htmlFor="Neighborhood">Neighborhood</label>
          <select
            name='Neighborhood'
            id="Neighborhood"
            value={formData.Neighborhood}
            onChange={handleChange}
            required
            className='w-full rounded-md py-2 bg-grayf8 border-2 border-green text-black px-1 capitalize'>
           <option value="">Select </option>
           {Neighborhoods.map((neighborhood) => (
           <option key={neighborhood.id} value={neighborhood.name}>
          {neighborhood.name}
        </option>
      ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-4 mt-4">
        {['free_wifi', 'central_ac', 'balcony', 'private_pool', 'jacuzzi', 'security', 'view_of_water', 'gym', 'laundry_room', 'barbeque_area','cctv','parking','playground','pet','waste'].map(facility => (
          <div key={facility} className='flex items-center'>
            <input
              type="checkbox"
              id={facility}
              name="Facilities"
              value={facility}
              checked={formData.Facilities.includes(facility)}
              onChange={handleChange}
              className='mr-2 '
            />
            <label htmlFor={facility} className=' cursor-pointer capitalize'>{facility.replace(/_/g, ' ')}</label>
          </div>
        ))}
      </div>

      <div className='mt-4'>
        <input
          type="file"
          name="Files"
          id="Files"
          onChange={handleChange}
          multiple
          required
          className='w-full hidden py-2 px-1'
        />
        <label htmlFor="Files" className=' w-fit px-2 py-2 cp  rounded  flex bg-green hover:bg-[#3C7E71] gap-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-grayf8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
          </svg>
          <p className='text-grayf8'>upload pictures</p>
        </label>
      </div>
      
      {imagePreviews.length > 0 && (
        <div className="mt-2 grid grid-cols-4 gap-4">
          {imagePreviews.map(preview => (
            <div key={preview.name} className="relative mt-2">
              <img src={preview.url} alt={preview.name} className='rounded-lg h-[160px] w-full bs1'  />
              <button
                type="button"
                onClick={() => handleImageDelete(preview.name)}
                className="absolute top-1 right-1 text-green text-4xl rounded hover:bg-[#2f2d2d1a]  "
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
      <div className='mt-5 flex justify-end'>
        <PrimaryBtn type="submit" text={innerSubBtn} classnames="py-2 hover:bg-[#3C7E71] px-3 min-w-[104px] flex items-center justify-center rounded" />
      </div>
      {error && (
        <div className="bg-red-100 text-rosered rounded mb-4">
          <strong>Error:</strong> {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 text-green rounded mb-4">
          <strong>Success:</strong> {success}
        </div>
      )}
      
    </form>
    
  );
};

export default NewAdForm;
