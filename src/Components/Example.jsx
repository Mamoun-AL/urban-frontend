import React, { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Example = ({ options, label, classes }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [savedOption, setSavedOption] = useState(options[0]); // State to save the selected option

  const handleSelect = (option) => {
    setSelectedOption(option);
    setSavedOption(option); // Save the selected option
  };

  // Log the savedOption whenever it changes
  useEffect(() => {
  }, [savedOption]); // Dependency array includes savedOption to log it whenever it changes

  return (
    <Menu as="div" className="relative z-10 w-full">
      <p className="text-md text-grayf8 capitalize font-light mb-1">{label}</p>
      <div>
        <MenuButton
          className={`${classes} flex items-center justify-between w-full border border-indigo-600 text-black gap-x-1.5 px-4 py-3 text-sm capitalize bg-grayf8 font-medium shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
          <span className="flex-1 truncate text-left">{selectedOption}</span>
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400 flex-shrink-0" />
        </MenuButton>
      </div>

      <MenuItems
        className="absolute mt-2 bg-grayf8 text-black rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-full"
      >
        


        <div className="py-1">
          {options.map((option, index) => (
            <MenuItem key={index}>
              {({ active }) => (
                <button
                  onClick={() => handleSelect(option)}
                  className={`${
                    active ? 'bg-indigo-100' : 'bg-white'
                  } w-full text-left px-4 py-2 text-sm text-black hover:bg-indigo-50 hover:text-indigo-800 focus:bg-indigo-100`}
                >
                  {option}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Example;
