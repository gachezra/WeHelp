import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import rise from '../LottieFiles/rise.json';
import ProjectBox from './ProjectBox';
import Usa from '../images/usa.png';

const GetHelp = () => {
    return(
        <>
        <h1 className='text-center py-24 tracking-wide text-3xl mt-320'>We <b>Helped</b></h1>
        <div className='project mt-4'>
            {/* <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
            <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" />
            <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" /> */}
            <ProjectBox projectPhoto={Usa} projectName="USA" />
        </div>
        {/* <div className="flex flex-wrap md:flex-nowrap items-center justify-between p-12">
            <div className="flex-1 p-4">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div className="mb-5">
                        <label
                        htmlFor="name"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Full Name
                        </label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Email Address
                        </label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@domain.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                        htmlFor="subject"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Subject
                        </label>
                        <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Message
                        </label>
                        <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div>
                        <button
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex-1 mb-8 p-4">
                <Tilt>
                    <Lottie 
                    className="illustration mb-3" 
                    animationData={rise} 
                    loop={true} 
                    />
                </Tilt>
            </div>
        </div> */}
        </>
    );
};

export default GetHelp;