import React from 'react';
import LocationBox from './LocationBox';
import Usa from '../images/usa.png';

const Locations = () => {
  return (
    <div>
      <h1 className="text-center py-24 tracking-wide text-3xl mt-320">We <b>WentTo</b></h1>
      <div className='location mt-4'>
        {/* <LocationBox locationPhoto={WigglesImage} locationName="Wiggles" />
        <LocationBox locationPhoto={NewsletterImage} locationName="Newsletter" />
        <LocationBox locationPhoto={RogfreeImage} locationName="RogFree" /> */}
        <LocationBox locationPhoto={Usa} locationName="USA" />
      </div>
    </div>
  )
};

export default Locations;