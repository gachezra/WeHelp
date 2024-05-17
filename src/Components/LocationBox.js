import React, { useState, useEffect, useRef } from 'react';
import { BiDonateHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { MdOutlineSensorOccupied } from "react-icons/md";

const locations = [
  { name: "New York", latitude: 37.0902, longitude: -95.7129 },
  { name: "Nairobi", latitude: 1.2921, longitude: 36.8219 },
];

// Updated desc object with an image property
const desc = [
  { name: "Settings", description: "Manage your settings"},
];

const LocationBox = ({ locationName, locationPhoto, onSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLocationName, setSelectedLocationName] = useState("New York"); // Default to New York
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSelect = (location) => {
  // Assuming each location object now includes latitude and longitude
  const locationWithCoords = {
      ...location,
      latitude: location.latitude, // Example latitude value
      longitude: location.longitude // Example longitude value
    };
    onSelect(locationWithCoords);
    setSelectedLocationName(location.name);
    setDropdownOpen(false);
  };

  return (
    <div className='locationBox'>
      <img className='block w-full my-5' src={locationPhoto || "/path/to/default-image.jpg"} alt={`${locationName} display`} />
      <div>
        <br/>
        <h3>{desc.name || 'Default Location'}</h3>
        <br/>
        <p className='text-center tw-bold text-2xl mt-4 mb-5'>{desc.description || 'No description available'}</p>
        <div className="relative" ref={dropdownRef}>
          <button id="dropdownHoverButton" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={toggleDropdown}>
            {selectedLocationName}
            <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div id="dropdownHover" className={`${dropdownOpen ? '' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
              {locations.map((location) => (
                <li key={location.name} style={{ margin: '5px' }}>
                  <a href="#map" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default anchor link behavior
                      handleSelect(location); // Update the selected location
                    }}>
                    {location.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
          <div className="mt-10 sm:flex sm:justify-center sm:space-x-4">
            <Link to={`/donate/${locationName}`}>
                <button className="get-involved-btn p-2 m-3 flex bg-transparent hover:bg-sky-950 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <BiDonateHeart className="btn-icon m-1" />
                    Donate
                </button>
            </Link>
            <Link to={`/donate/${locationName}`}>
                <button className="get-involved-btn p-2 m-3 flex bg-transparent hover:bg-sky-950 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <MdOutlineSensorOccupied className="btn-icon m-1" />
                    Volunteer
                </button>
            </Link>
          </div>
    </div>
  );
};

export default LocationBox;