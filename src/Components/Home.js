import React from 'react';
import Lottie from  "lottie-react";
import help from "../LottieFiles/help.json";
import Tilt from 'react-parallax-tilt';
import helping from '../images/helping.png';
import { Link } from 'react-router-dom';
import { LuHelpingHand } from "react-icons/lu";
import { BiDonateHeart } from "react-icons/bi";

const Home = () => {
  return (
    <div>
      <div className='AboutPage'>
        <div className='AboutText p-2 lg:ml-6'>
          <h1 className='mb-3 text-6xl'>Welcome to <b>WeHelp</b></h1>
          <p>
            Your one-stop destination for connecting people with the resources and services they need.<br/>
            Whether you're searching for food trucks in your area or seeking assistance for a variety of other needs, 
            we're here to lend a hand.
          </p>
          <div className="buttons-container m-3 mt-4 md:flex md:text-center">
            <Link to='/donate'>
              <button className="get-involved-btn p-2 m-3 flex bg-transparent hover:bg-sky-950 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <BiDonateHeart className="btn-icon m-1" />
                Get Involved
              </button>
            </Link>
            <Link to='/help'>
              <button className="find-help-btn p-2 m-3 flex bg-transparent hover:bg-sky-950 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <LuHelpingHand className="btn-icon m-1" />
                Find Help
              </button>
            </Link>
          </div>
        </div>
        <div className='fluid'>
          <Tilt>
            <Lottie
              className="illustration p-3"
              animationData={help} 
              loop={true} 
            />
          </Tilt>
        </div>       
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            <b>WeHelp</b> is a compassionate organization committed to providing essential resources and support 
            services to individuals facing various challenges in their lives. <br/><br/>
            At We Help, our dedicated team works tirelessly to bridge the gap between those in need and the providers 
            ready to offer assistance. <br/><br/>
            Through our online platform, we strive to connect individuals with food trucks offering delicious street food, 
            shelters providing refuge from domestic violence, clothing assistance programs, mental health counseling services, 
            and resources for survivors of trafficking. <br/><br/>
            Our mission is to create a stronger, more resilient community where everyone has access to the help they need. <br/><br/>
            Join us in our journey to make a positive impact and extend a helping hand to those who need it most. Welcome to We Help.
          </p>
          <button className="get-involved-btn p-2 m-3 mt-6 flex bg-transparent hover:bg-sky-950 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <BiDonateHeart className="btn-icon mr-1" />
              Get Involved
            </button>
        </div>
        <Tilt>
          <img className='Avatar' src={helping} alt="helping hand" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home;
