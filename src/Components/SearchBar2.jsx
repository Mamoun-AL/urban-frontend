import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate,useParams } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import debounce from 'lodash.debounce'; // Add lodash.debounce for debouncing
import { textTransform } from '@mui/system';
import { isEmpty } from 'lodash';


export default function SearchBar2() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const [selectedCity1, setSelectedCity1] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [rentSale, setRentSale] = useState('');
  const [Bathrooms,setBathrooms] = useState('')
  const [propertyType, setPropertyType] = useState('');
  const [furnished, setFurnished] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [shouldUpdateUrl, setShouldUpdateUrl] = useState(false);


  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
    setShouldUpdateUrl(true);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

 
  // Debounced search term handler
  const debouncedSearch = useCallback(
    debounce(async (query) => {
      if (query.length >= 2) {
        try {
          // Clear previous results when a new search starts
          setResults([]);
  
          // Perform the search query
          const response = await axios.get(`/search?q=${query}&c=${selectedCity1}`);
          // Update search results with the new data
          setResults(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Optional: You can handle setting an error state here
        }
      } else {
        // Clear results if query is too short
        setResults([]);
      }
    }, 300), [selectedCity1] // `selectedCity1` as a dependency for the search
  );
  

  const handleInputChange = (e) => {
    const query = e.target.value;
    if(isEmpty(query)){
      setShouldUpdateUrl(true)
      setSearchTerm('');

    }
    else{
      setSearchTerm(query);
      debouncedSearch(query);
    }
  };

  const handleResultClick = (name) => {
    setSearchTerm(name);
    setShouldUpdateUrl(true); // Ensure URL is updated when search term changes
    setResults([]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Updating ${name} to ${value}`);
    
    switch (name) {
      case 'selectedCity1': setSelectedCity1(value); break;
      case 'bedrooms': setBedrooms(value); break;
      case 'rentSale': setRentSale(value); break;
      case 'propertyType': setPropertyType(value); break;
      case 'furnished': setFurnished(value); break;

      default: break;
    }
    setShouldUpdateUrl(true);

  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;    
    if (name === 'minPrice') setMinPrice(value);
    if (name === 'maxPrice') setMaxPrice(value);
  };
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const city = queryParams.get('city') || '';
    const bedroomsParam = queryParams.get('bedrooms') || '';
    const rentSaleParam = queryParams.get('rent_sale') || '';
    const bathroomsParam = queryParams.get('bathrooms') || '';
    const propertyTypeParm =  queryParams.get('propertyType') || '';
    const neighbourParam = queryParams.get('neighborhood') || '';
    const FurnishedParam = queryParams.get('furnished') || '';
    const MinpriceParam = queryParams.get('minPrice') || '';
    const MaxpriceParam = queryParams.get('maxPrice') || '';

    setSelectedCity1(city);
    setBedrooms(bedroomsParam);
    setSearchTerm(neighbourParam)
    setRentSale(rentSaleParam);
    setBathrooms(bathroomsParam);
    setPropertyType(propertyTypeParm)
    setFurnished(FurnishedParam)
    setMinPrice(MinpriceParam)
    setMaxPrice(MaxpriceParam)
    

    // Don't update URL on mount; set flag to false
    setShouldUpdateUrl(false);
  }, [location.search]);

  // Handle URL update based on state change
  useEffect(() => {
    if (shouldUpdateUrl) {
      console.log(searchTerm)
      const params = new URLSearchParams();
      if (selectedCity1) params.append('city', selectedCity1);
      if (rentSale) params.append('rent_sale', rentSale);
      if (propertyType && propertyType !== 'all types') params.append('propertyType', propertyType);
      if (furnished && furnished !== 'any') params.append('furnished', furnished);
      if (bedrooms && bedrooms !== 'any') params.append('bedrooms', bedrooms);
      if (minPrice) params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
      if (searchTerm) params.append('neighborhood', searchTerm);
      if (Bathrooms) params.append('bathrooms', Bathrooms);

      const url = `/listing?${params.toString()}`;
      console.log(`Navigating to URL: ${url}`);
      navigate(url, { replace: true });
      setShouldUpdateUrl(false);
    }
  }, [
    selectedCity1,
    bedrooms,
    rentSale,
    propertyType,
    furnished,
    searchTerm,
    Bathrooms,
    shouldUpdateUrl,
    navigate,
  ]);

  return (
    <div className="border  rounded-lg border-[#C2C4C7] bs3 w-full flex flex-wrap items-center  h-[56px] ">
      <FormControl 
      sx={{ minWidth: 100,  paddingTop: '5px !important',   paddingLeft: '10px !important',textAlign: 'left',borderRight:1 ,borderColor: '#cdcdcd', }} 
      className="flex-grow text-left  hv1 pl-2    h-full "
      >
      <p className="text-sm text-balck capitalize font-medium">City</p>

        <Select
          name="selectedCity1"
          value={selectedCity1}
          onChange={handleChange}
          displayEmpty
          sx={{
            fontFamily: 'Mukta, sans-serif',
            color: '#333',
            transform: 'capitalize',
            '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
              paddingTop: '0px !important',
              paddingBottom: '0px !important',
              paddingLeft: '0px !important',
              paddingRight: '0px !important',

            }
          }}
        >
           <MenuItem sx={{ fontFamily: 'Mukta',}} value="">
            <em className=' not-italic capitalize  '>all cities</em>
          </MenuItem>
          <MenuItem value="dubai">Dubai</MenuItem>
          <MenuItem value="abu dhabi">Abu Dhabi</MenuItem>
          <MenuItem value="ajman">Ajman</MenuItem>
          <MenuItem value="sharjah">Sharjah</MenuItem>
        </Select>
      </FormControl>
      <div className="relative hv1 pl-2   curs pt-1 h-full flex-grow">
  <div className="border-r  border-[#cdcdcd]">
    <p className="text-sm text-black capitalize font-medium">Location</p>
    <input
      className="text-sm h-[30px] inp1 shadow-sm bg-grayf8"
      placeholder="Enter neighborhood"
      type="text"
      value={searchTerm}
      onChange={handleInputChange}
    />
  </div>

  {results.length > 0 && (
    <div className="absolute top-full left-0 mt-1 text-black p-1 text-sm bg-grayf8 w-full  overflow-hidden z-50 rounded-md shadow-lg">
      <ul className="max-h-[150px] overflow-auto">
        {results.map((result) => (
          <li
            key={result.id}
            onClick={() => handleResultClick(result.name)}
            className="p-1 hover:bg-[#e8e8e8] cursor-pointer border-b"
          >
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>


      <FormControl sx={{ minWidth: 12, paddingLeft: '10px !important',  paddingTop: '5px !important', borderRight:1 ,borderColor: '#cdcdcd' }} className="flex-grow  capitalize hv1 pl-2  h-full">
        <p className="text-sm text-balck capitalize font-medium">Rent/Buy</p>
        <Select
          name="rentSale"
          value={rentSale}
          onChange={handleChange}
          displayEmpty
          sx={{
            fontFamily: 'Mukta, sans-serif',
            color: '#333',
            transform: 'capitalize',
            '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
              paddingTop: '0px !important',
              paddingBottom: '0px !important',
              paddingLeft: '0px !important',
              paddingRight: '0px !important',
            }
          }}
        >
           <MenuItem sx={{ fontFamily: 'Mukta',}} value="">
            <em className=' not-italic capitalize  '>Any</em>
          </MenuItem>
          <MenuItem  value="sale">sale</MenuItem>
          <MenuItem value="rent">Rent</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{  paddingTop: '5px !important',   minWidth: 120, paddingLeft: '10px !important',borderRight:1 ,borderColor: '#cdcdcd'  }} className="flex-grow hv1 pl-2  h-full">
        <p className="text-sm text-balck capitalize font-medium">Bedrooms</p>
        <Select
          name="bedrooms"
          value={bedrooms}
          onChange={handleChange}
          displayEmpty
          sx={{
            fontFamily: 'Mukta, sans-serif',
            color: '#333',
            transform: 'capitalize',
            '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
              paddingTop: '0px !important',
              paddingBottom: '0px !important',
              paddingLeft: '0px !important',
              paddingRight: '0px !important',
            }
          }}
        >
          <MenuItem sx={{ fontFamily: 'Mukta',}} value="">
            <em className=' not-italic capitalize  '>Any</em>
          </MenuItem>
          {[1, 2, 3, 4, 5, 6].map(bedroom => (
            <MenuItem key={bedroom} value={bedroom}>{bedroom} bedroom{bedroom > 1 ? 's' : ''}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{   paddingTop: '5px !important',  minWidth: 120 , paddingLeft: '10px !important', borderRight:1  ,borderColor: '#cdcdcd'  }} className="flex-grow hv1 pl-2  h-full">
        <p className="text-sm text-balck capitalize font-medium">Property Type</p>
        <Select
          name="propertyType"
          value={propertyType}
          onChange={handleChange}
          displayEmpty
          sx={{
            fontFamily: 'Mukta, sans-serif',
            color: '#333',
            transform: 'capitalize',
            '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
              paddingTop: '0px !important',
              paddingBottom: '0px !important',
              paddingLeft: '0px !important',
              paddingRight: '0px !important',
            }
          }}
        >
          <MenuItem value="">
            <em className=' not-italic capitalize  '>All types</em>
          </MenuItem>
          {['apartment', 'villa', 'townhouse', 'penthouse'].map(type => (
            <MenuItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{  paddingTop: '5px !important',  minWidth: 120 ,borderRight:1 , paddingLeft: '10px !important',borderColor: '#cdcdcd' ,borderColor: '#cdcdcd' }} className="flex-grow  hv1 pl-2 h-full">
        <p className="text-sm text-balck capitalize font-medium">Furnished</p>
        <Select
          name="furnished"
          value={furnished}
          onChange={handleChange}
          displayEmpty
          sx={{
            fontFamily: 'Mukta, sans-serif',
            color: '#333',
            transform: 'capitalize',
            '.css-15k6ek6-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
              paddingTop: '0px !important',
              paddingBottom: '0px !important',
              paddingLeft: '0px !important',
              paddingRight: '0px !important',
            }
          }}
        >
          <MenuItem value="">
            <em className=' not-italic capitalize  '>Any</em>
          </MenuItem>
          <MenuItem value="true">Yes</MenuItem>
          <MenuItem value="false">No</MenuItem>
        </Select>
      </FormControl>

      <div className='flex-grow h-full hv1  pt-1 pl-2'>
        <p className="text-sm text-balck capitalize font-medium">Filters</p>
        <Button
          aria-describedby={id}
          onClick={handleClick}
          style={{  textTransform: 'capitalize', padding: '0px'  }}
          className="bg-grayf8 rounded-md"
          sx={{
            fontFamily: 'Mukta, sans-serif',
            color: '#333',
            transform: 'capitalize',
            '.css-iu4g0-MuiButtonBase-root-MuiButton-root': {
              paddingTop: '0px !important',
              paddingBottom: '0px !important',
              paddingLeft: '0px !important',
              paddingRight: '0px !important',
            }
          }}
        >
          Baths,area/size(sqft),etc
        </Button>
      </div>

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
        <Typography className='w-[290px]' sx={{ p: 2,  }}>
          <div>
          <div className='flex  gap-x-2'>
         <div className='w-full flex-grow'>
           <p className='capitalize text-sm'>min price</p>
          <input
              type="number"
              name="minPrice"
              value={minPrice}
              onChange={handlePriceChange}
              className='border  w-full border-green rounded-md py-1 px-2'

            />


         </div>
         <div className='w-full '>
           <p className='capitalize text-sm'>max price</p>
          <input
              type="number"
              name="maxPrice"
              value={maxPrice}
              onChange={handlePriceChange}
              className='border w-full border-green rounded-md py-1 px-2'
           
            />
         </div>
           
         </div>
         <div className='mt-2'>
        <p className='capitalize text-sm'> Baths</p>
        <div className='flex gap-x-2'>
          {['1', '2', '3', '4', '5'].map((num) => (
            <Button
              key={num}
              variant={Bathrooms === num ? 'circular' : 'circular'}
              onClick={() => {setBathrooms(num);   setShouldUpdateUrl(true);} }
              sx={{
                backgroundColor: Bathrooms == num ? '#1C6E71' : '#e8e8e8',
                borderRadius: '50%',
                width: '40px',    // Set equal width
                height: '40px',   // Set equal height
                minWidth: '40px', // To override MUI button default behavior
              }}
            >
              {num}
            </Button>
          ))}
        </div>
      </div>
      <button onClick={() => {handleClose(); setShouldUpdateUrl(true)}} className='bg-green w-full text-grayf8 capitalize py-2 cursor-pointer hover:bg-[#3C7E71] mt-5 text-md rounded'>apply filters</button>




          </div>
        </Typography>
      </Popover>
    </div>
  );
}
