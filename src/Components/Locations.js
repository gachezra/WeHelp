import React, { useState } from 'react';
import LocationBox from './LocationBox';
import Map from './Map';
import Usa from '../images/usa.png';

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const locations = [
  { photo: Usa, name: "USA"},
];
  

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="HomePage p-4 text-center mx-auto">
        <h3 className="HomeText text-center text-7xl">We <b>Help</b></h3>
        <input
            type="text"
            placeholder="Search locations..."
            className='rounded-lg border border-gray-300 text-white bg-inherit shadow-sm text-center outline-gray-700 mb-10 mt-20 p-1'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        <div className='text flex'>
          {filteredLocations.map(location => (
            <LocationBox className='mt-7 col-auto' key={location.name} locationName={location.name} locationPhoto={location.photo} onSelect={setSelectedLocation} />
          ))}
        </div>
        <div className='container p-8 mt-5'>
          <h1 className='HomeText'>Directions</h1>
          <Map className='mx-auto' selectedLocation={selectedLocation} />
        </div>
    </div>
  );
};

export default Locations;