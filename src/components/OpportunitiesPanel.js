import React from 'react';
import { HandIcon, CurrencyDollarIcon, TruckIcon, CalendarIcon } from '@heroicons/react/outline';

// Shared Tailwind CSS classes
const flexColCenter = "flex flex-col items-center";
const iconSize = "h-12 w-12 mb-2";
const textStyles = "text-xl font-semibold";

const OpportunityCard = ({ icon, title, description }) => {
  return (
    <div className={flexColCenter}>
      {icon}
      <h3 className={textStyles}>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const OpportunitiesPanel = () => {
  return (
    <div className="bg-zinc-800 text-white p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6">How to Get Involved: Volunteer and Donation Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <OpportunityCard
          icon={<HandIcon className={iconSize} />}
          title="Volunteer"
          description="Join our team and lend a helping hand."
        />
        <OpportunityCard
          icon={<CurrencyDollarIcon className={iconSize} />}
          title="Donate"
          description="Financial contributions make our work possible."
        />
        <OpportunityCard
          icon={<TruckIcon className={iconSize} />}
          title="Host a Drive"
          description="Organize a collection for clothing, food, or supplies."
        />
        <OpportunityCard
          icon={<CalendarIcon className={iconSize} />}
          title="Attend an Event"
          description="Support our cause by participating in community events."
        />
      </div>
    </div>
  );
};

export default OpportunitiesPanel;