import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import rise from '../LottieFiles/rise.json';
import ladder from '../LottieFiles/ladder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> us!</h1>
          <b>About Us</b>
          <br/>
          <p>
            We are a passionate team dedicated to making a positive impact on the lives of individuals in need. 
            Our mission is to create a supportive community where everyone has access to essential resources and assistance.
            {/* Apart from coding I love to do photography, you can check out some of my shots here <a href="https://www.instagram.com/devansh_sahni_/?hl=en" target='_blank'>Instagram.</a> */}
          </p>
          <br/>
          <b>Our Mission</b>
          <br/>
          <p>
          At <b>WeHelp</b>, we believe that no one should face life's challenges alone. 
          Our mission is to bridge the gap between those in need and the providers ready to offer support. 
          Whether it's connecting individuals with food trucks offering delicious meals, 
          helping survivors of domestic violence find refuge and counseling, or providing resources for those struggling 
          with mental health issues, we're committed to making a difference.
          </p>
          <br/>
          <b>Our Values</b>
          <br/>
          <p>
            <b>Compassion:</b> We approach every interaction with empathy and understanding, 
            striving to meet the unique needs of each individual we serve.<br/>
            <b>Empowerment:</b> We believe in empowering individuals to take control of their lives by 
            providing them with the resources and support they need to thrive.<br/>
            <b>Community:</b> We recognize the strength of community and the importance of coming together 
            to support one another in times of need.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration mb-3" 
              animationData={rise} 
              loop={true} 
            />
          </Tilt>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={ladder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
    </>
  )
}

export default About