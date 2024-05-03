import React from 'react';

const PeopleInNeedRegistration = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">People in Need Registration</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="example@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="123-456-7890"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="assistance-needed" className="block mb-2 text-sm font-medium">
              Assistance Needed
            </label>
            <select
              id="assistance-needed"
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Select the assistance needed</option>
              <option value="food">Food</option>
              <option value="shelter">Shelter</option>
              <option value="clothing">Clothing</option>
              <option value="medical">Medical</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            Register
          </button>
        </form>
      </main>
    </div>
  );
};

export default PeopleInNeedRegistration;