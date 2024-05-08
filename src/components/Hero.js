import React from 'react';
import HeaderImage from '../images/header-image.jpg';

const Hero = () => {
    return (
        <div
        className="min-h-screen flex items-center justify-start bg-cover bg-center p-3"
        style={{ 
            backgroundImage: `url(${HeaderImage})`, // Assuming HeaderImage is the path to your image file
            padding: '15px', 
        }}
        >
            <div className="bg-gray-100 bg-opacity-80 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Our Organization</h1>
                <p className="text-gray-700 mb-4">
                Welcome to our organization's home page! Here you can find all the
                details about what we do and who we are.
                </p>
                <div className="border-t border-gray-300 pt-4">
                <h2 className="text-xl font-semibold mb-2">Mission Statement</h2>
                <p className="text-gray-700">
                    Our mission is to provide innovative solutions to our community's
                    challenges and empower individuals to thrive.
                </p>
                </div>
                <div className="border-t border-gray-300 pt-4">
                <h2 className="text-xl font-semibold mb-2">Services</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                    <li>Service 4</li>
                </ul>
                </div>
                <div className="border-t border-gray-300 pt-4">
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p className="text-gray-700">
                    Email: contact@organization.com<br />
                    Phone: 123-456-7890<br />
                    Address: 123 Main St, City, Country
                </p>
                </div>
            </div>
        </div>
        
    );
};

export default Hero;