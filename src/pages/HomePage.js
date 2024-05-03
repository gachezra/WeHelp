import React from 'react';
import { Button } from "flowbite-react";

//components
import OpportunitiesPanel from '../components/OpportunitiesPanel';

// Shared Tailwind CSS classes
const headingClasses = 'text-2xl font-bold';
const subheadingClasses = 'font-semibold';

const HelpSection = ({ title, items }) => (
  <div className="py-12">
    <h2 className={headingClasses}>{title}</h2>
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index}>
          <h3 className={subheadingClasses}>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="bg-white text-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-3xl font-bold text-center">We Help: Connecting People in Need with Essential Services</h1>
          <p className="mt-4 text-center text-zinc-600">Providing a lifeline to those facing challenges, connecting them with vital resources and compassionate support.</p>
          <div className="mt-6 flex justify-center space-x-4">
            <Button size="xl" outline>
              Find Help
            </Button>
            <Button size="xl" outline>
              Get Involved
            </Button>
          </div>
        </div>

        <HelpSection
          title="Food Assistance: Locating and Partnering with Food Trucks"
          items={[
            { title: 'Mobile Meals', description: 'We work with a network of food trucks to bring nourishing meals directly to those in need.' },
            { title: 'Partnerships', description: 'We collaborate with local eateries and food suppliers to ensure a steady supply of fresh, quality food.' },
            { title: 'Scheduling', description: 'Our team coordinates food truck schedules to reach the most vulnerable communities on a regular basis.' }
          ]}
        />

        <OpportunitiesPanel/>

        {/* Other HelpSection components go here */}

      </div>
    </div>
  );
};

export default HomePage;