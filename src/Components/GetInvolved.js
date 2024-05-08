import React from "react";
import Lottie from "lottie-react"
import donate from '../LottieFiles/donate.json';
import { BiDonateHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { MdOutlineSensorOccupied } from "react-icons/md";

const GetInvolved = () => {
    return(
        <>
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            <div className="w-full lg:w-1/2 px-4">
                <h2 className="text-3xl font-bold tracking-tight lg:mt-10 mt-11 sm:text-4xl">
                Make a <b>Difference</b><br/><br/>
                Donate or Volunteer with WeHelp
                </h2>
                <p className="mt-4 text-xl sm:mt-5">
                Every day, WeHelp connects people in need with vital resources around the world. 
                From providing meals through food trucks to offering shelter and support services, 
                we empower individuals and build stronger communities.
                </p>
                <p className="mt-6 sm:mt-8">
                    Spread the Word: Let others know about WeHelp. Share this page on
                    social media using <b>#WeHelp</b> or <b>#EmpowerOthers</b>.
                </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <Lottie 
                className="illustration mb-3" 
                animationData={donate} 
                loop={true} 
                />
            </div>
            </div>

                <div className="mt-10 sm:flex sm:justify-center sm:space-x-4">
                    <Link to='/donate'>
                        <button className="get-involved-btn p-2 m-3 flex bg-transparent hover:bg-sky-950 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            <BiDonateHeart className="btn-icon m-1" />
                            Donate
                        </button>
                    </Link>
                    <Link to='/donate'>
                        <button className="get-involved-btn p-2 m-3 flex bg-transparent hover:bg-sky-950 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            <MdOutlineSensorOccupied className="btn-icon m-1" />
                            Volunteer
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        {/* <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="mb-5">
                    <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Full Name
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div class="mb-5">
                    <label
                    for="email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Email Address
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div class="mb-5">
                    <label
                    for="subject"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Subject
                    </label>
                    <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter your subject"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div class="mb-5">
                    <label
                    for="message"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Message
                    </label>
                    <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                </div>
                <div>
                    <button
                    class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
        </div> */}
        </>
    );
};

export default GetInvolved;