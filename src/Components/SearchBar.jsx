import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import PrimaryBtn from './PrimaryBtn';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FormControl from '@mui/material/FormControl';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // State for filters
  const [selectedCity, setSelectedCity] = useState('dubai');
  const [bedrooms, setBedrooms] = useState('');
  const [rentSale, setRentSale] = useState(''); // Add state for Rent/Sale filter
  const [propertyType, setPropertyType] = useState('');
  const [furnished, setFurnished] = useState('');

  // State for price range
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'selectedCity':
        setSelectedCity(value);
        break;
      case 'bedrooms':
        setBedrooms(value);
        break;
      case 'rentSale':
        setRentSale(value); // Update Rent/Sale state
        break;
      case 'propertyType':
        setPropertyType(value);
        break;
      case 'furnished':
        setFurnished(value);
        break;
      default:
        break;
    }

    console.log(`${name}: ${value}`);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;

    if (name === 'minPrice') {
      setMinPrice(value);
    } else if (name === 'maxPrice') {
      setMaxPrice(value);
    }
  };

  // Handle search input change
  const handleInputChange = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length >= 2) { // Start searching only after 2 characters
      try {
        const response = await axios.get(`/search?q=${query}&c=${selectedCity}`);
        setResults(response.data); // Update the results state
        console.log(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      setResults([]); // Clear results if query is less than 2 characters
    }
  };

  // Handle search result click
  const handleResultClick = (name) => {
    setSearchTerm(name); // Set the input value to the clicked item's name
    setResults([]); // Clear results after selecting an item
  };

  // Handle search button click
  const handleSearch = () => {
      const params = new URLSearchParams();

      // Add parameters conditionally based on their existence
      if (selectedCity) params.append('city', selectedCity);
      if (rentSale) params.append('rent_sale', rentSale);
      if (propertyType && propertyType !== 'all types') params.append('propertyType', propertyType);
      if (furnished && furnished !== 'any') params.append('furnished', furnished);
      if (bedrooms && bedrooms !== 'any') params.append('bedrooms', bedrooms);
      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (searchTerm) params.append('neighborhood',searchTerm);
      
      // Convert to string
      const queryString = params.toString();

    console.log("Navigating to URL with params:", `/listing?${params}`);

    navigate(`/listing?${params}`);
  };

  return (
  
    <div className="bg-black py-3 px-5 rounded-lg w-full flex gap-2">
          <style></style>
      <div className="flex items-end gap-x-2 w-full">
        <div className='flex items-center h-full'>
          <div className="">
            <p className="text-md text-grayf8 capitalize font-light mb-1">city</p>
            <FormControl 
              className="bg-grayf8 capitalize rounded-l-md" 
              sx={{  fontFamily: 'Mukta, sans-serif', minWidth: 120, overflow: 'hidden' }}
            >
              <Select
                name="selectedCity"
                value={selectedCity}
                onChange={handleChange}
                displayEmpty
                sx={{
                  paddingY: '12px',
                  fontFamily: 'Mukta, sans-serif',
                  color: '#333',
                  transform: 'capitalize',
                  '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                    paddingTop: '0px !important',
                    paddingBottom: '0px !important',
                    paddingLeft: '10px !important',
                    paddingRight: '0px !important',
                    outline: 'none',
                    border: 'none',
                    overflow: 'hidden',
              
                  }
                }}              >
           
                <MenuItem className='capitalize text-xl' value={"dubai"}>dubai</MenuItem>
                <MenuItem className='capitalize' value={"abu dhabi"}>abu dhabi</MenuItem>
                <MenuItem className='capitalize' value={"ajman"}>ajman</MenuItem>
                <MenuItem className='capitalize' value={"sharjah"}>sharjah</MenuItem>

              </Select>
            </FormControl>
          </div>
          
          <div className='in-se '>
            <p className='text-md text-grayf8 capitalize font-light mb-1'>location</p>
            <input
              className=' pl-4 text-sm h-[47px] capitalize shadow-sm rounded-r-md font-medium'
              placeholder='Enter neighborhood'
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
            />
            {results.length > 0 && (
              <div className="mt-2 in-pop text-black p-2 text-sm bg-grayf8 w-[280px] rounded-md bs1">
                <ul className='h-[250px] overflow-x-scroll'>
                  {results.map((result) => (
                    <li
                      key={result.id}
                      onClick={() => handleResultClick(result.name)} // Set input on click
                      className="p-2 hover:bg-[#e8e8e8] hover:cursor-pointer border-b last:border-none"
                    >
                      {result.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Rent/Sale Filter */}
        <div className="">
          <p className="text-md text-grayf8 capitalize font-light mb-1">rent/sale</p>
          <FormControl 
            className="bg-grayf8 capitalize rounded-md" 
            sx={{  fontFamily: 'Mukta, sans-serif', minWidth: 70, overflow: 'hidden' }}
          >
            <Select
              name="rentSale"
              value={rentSale}
              onChange={handleChange}
              displayEmpty
              sx={{
                  paddingY: '12px',
                  fontFamily: 'Mukta, sans-serif',
                  color: '#333',
                  transform: 'capitalize',
                  '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                    paddingTop: '0px !important',
                    paddingBottom: '0px !important',
                    paddingLeft: '10px !important',
                    paddingRight: '0px !important',
                    outline: 'none',
                    border: 'none',
                    overflow: 'hidden',
                  }
                }}            >

              <MenuItem className='capitalize' value="">
                <em className=' not-italic capitalize  '>any</em>
              </MenuItem>
              <MenuItem className='capitalize' value={"rent"}>rent</MenuItem>
              <MenuItem className='capitalize' value={"sale"}>buy</MenuItem>

            </Select>
          </FormControl>
        </div>

        {/* Bedrooms Filter */}
        <div className="">
          <p className="text-md text-grayf8 capitalize font-light mb-1">bedrooms</p>
          <FormControl 
            className="bg-grayf8 capitalize  rounded-md" 
            sx={{  fontFamily: 'Mukta, sans-serif', minWidth: 125, overflow: 'hidden', textDecoration :'none' }}
          >
            <Select
              name="bedrooms"
              value={bedrooms}
              onChange={handleChange}
              displayEmpty
              sx={{
                  paddingY: '12px',
                  fontFamily: 'Mukta, sans-serif',
                  color: '#333',
                  transform: 'capitalize',
                  '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                    paddingTop: '0px !important',
                    paddingBottom: '0px !important',
                    paddingLeft: '10px !important',
                    paddingRight: '0px !important',
                    outline: 'none',
                    border: 'none',
                    overflow: 'hidden',
                    textDecoration :'none'
                  }
                }}            >
              <MenuItem className='capitalize' value="">
                <em className=' not-italic capitalize  '>any</em>
              </MenuItem>
              <MenuItem className='capitalize' value={1}>1 bedroom</MenuItem>
              <MenuItem className='capitalize' value={2}>2 bedrooms</MenuItem>
              <MenuItem className='capitalize' value={3}>3 bedrooms</MenuItem>
              <MenuItem className='capitalize' value={4}>4 bedrooms</MenuItem>
              <MenuItem className='capitalize' value={5}>5 bedrooms</MenuItem>
              <MenuItem className='capitalize' value={6}>6 bedrooms</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Property Type Filter */}
        <div className="">
          <p className="text-md text-grayf8 capitalize font-light mb-1">property type</p>
          <FormControl 
            className="bg-grayf8 rounded-md" 
            sx={{

                  fontFamily: 'Mukta, sans-serif',
                  color: '#333',
                  transform: 'capitalize',
                  '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                    paddingTop: '0px !important',
                    paddingBottom: '0px !important',
                    paddingLeft: '10px !important',
                    paddingRight: '0px !important',
                    outline: 'none',
                    border: 'none',
                    overflow: 'hidden',
                    minWidth:100
                  }
                }}          >
            <Select
              name="propertyType"
              value={propertyType}
              onChange={handleChange}
              displayEmpty
              sx={{  fontFamily: 'Mukta, sans-serif', padding: '12px', color: '#333', transform:'capitalize' }}
            >
              <MenuItem className='capitalize' value="">
                <em className='capitalize not-italic '>all types</em>
              </MenuItem>
              <MenuItem className='capitalize' value={"apartment"}>apartment</MenuItem>
              <MenuItem className='capitalize' value={"villa"}>villa</MenuItem>
              <MenuItem className='capitalize' value={"townhouse"}>townhouse</MenuItem>
              <MenuItem className='capitalize' value={"penthouse"}>penthouse</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Furnished Filter */}
        <div className="">
          <p className="text-md text-grayf8 capitalize font-light mb-1">furnished</p>
          <FormControl 
            className="bg-grayf8 rounded-md" 
            sx={{
                 
                  fontFamily: 'Mukta, sans-serif',
                  color: '#333',
                  transform: 'capitalize',
                  '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                    paddingTop: '0px !important',
                    paddingBottom: '0px !important',
                    paddingLeft: '10px !important',
                    paddingRight: '0px !important',
                    outline: 'none',
                    border: 'none',
                    overflow: 'hidden',
                    minWidth:100
                  }
                }}          >
            <Select
              name="furnished"
              value={furnished}
              onChange={handleChange}
              displayEmpty
              sx={{
                  paddingY: '12px',
                  fontFamily: 'Mukta, sans-serif',
                  color: '#333',
                  transform: 'capitalize',
                  '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                    paddingTop: '0px !important',
                    paddingBottom: '0px !important',
                    paddingLeft: '10px !important',
                    paddingRight: '0px !important',
                    outline: 'none',
                    border: 'none',
                    overflow: 'hidden',
                  }
                }}            >
              <MenuItem className='capitalize' value="">
                <em className='capitalize not-italic '>any</em>
              </MenuItem>
              <MenuItem className='capitalize' value={"true"}>yes</MenuItem>
              <MenuItem className='capitalize' value={"false"}>no</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Price Range Filter */}
        <div>
        <p className="text-md text-grayf8 capitalize font-light mb-1">filter</p>

          <Button aria-describedby={id}
            variant="contained"
            onClick={handleClick}
            sx={{ paddingY: '12px' ,paddingX:'0px', minWidth:100, backgroundColor:'#f8f8f8' }}

            className="bg-grayf8 rounded-md">
           <div className='flex gap-x-2'>
            <p className='capitalize text-black'>more</p>
           <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1u6jos5-MuiSvgIcon-root-MuiSelect-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="M7 10l5 5 5-5z"></path></svg>
           </div>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Typography sx={{  fontFamily: 'Mukta, sans-serif', p: 2  }} className='bs1 '>
              <div className='flex gap-x-5 capitalize font-medium '>
                <div>
                  <p>min</p>
                  <input 
                    type="number" 
                    name="minPrice" 
                    value={minPrice} 
                    onChange={handlePriceChange} 
                    className='border border-green w-[120px] rounded-md py-2 px-2' 
                  />
                </div>
                <div>
                  <p>max</p>
                  <input 
                    type="number" 
                    name="maxPrice" 
                    value={maxPrice} 
                    onChange={handlePriceChange} 
                    className='border border-green w-[120px]  rounded-md py-2 px-2' 
                  />
                </div>


              </div>
              <button onClick={() => {handleClose(); }} className='bg-green w-full block text-grayf8 capitalize py-2 cursor-pointer hover:bg-[#3C7E71] mt-5 text-md rounded'>apply filters</button>

            </Typography>

          </Popover>
        </div>

        <PrimaryBtn text="search" classnames="px-4 py-2 rounded-md text-xl" onClick={handleSearch} />
      </div>
    </div>
  );
}
