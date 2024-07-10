import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaX,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 relative mt-10">
      <div className="flex flex-col justify-center items-center bg-blue-900 w-full px-3 py-2">
        <div>
          <h1 className="flex text-white items-center justify-center">
            CONNECT WITH US
          </h1>
          <div className="flex flex-row gap-2 text-2xl p-4 justify-center items-center text-white">
            <FaFacebook />
            <FaInstagram />
            <FaX />
            <FaYoutube />
            <FaTiktok />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-center mt-4 text-white">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">NEWS APP</h3>
              <div className="flex gap-2 mt-2">
                <button className="bg-black text-white py-2 px-4 rounded">
                  App Store
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">Email Us</h3>
              <p>Find out more about our SABC News App</p>
              <button className="bg-black text-white py-2 px-4 rounded">
                Email
              </button>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">
                INFORMATIVE Editorial Policy
              </h3>
              <button className="bg-black text-white py-2 px-4 rounded">
                Policy
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <img
            src="/path/to/press-council-fair.png"
            alt="Press Council FAIR"
            className="mx-auto mb-4"
          />
          <p className="text-sm text-white">
            INFORMATIVE News proudly displays the “FAIR” stamp of the Press
            Council of Lesotho, indicating our commitment to adhere to the Code
            of Ethics for Print and online media which prescribes that our
            reportage is truthful, accurate and fair. Should you wish to lodge a
            complaint about our news coverage, please lodge a complaint on the
            Press Council’s website, www.presscouncil.org.za or email the
            complaint to enquiries@ombudsman.org.za. Contact the Press Council
            on 011 4843612.
          </p>
        </div>
        <div className="bg-black text-white py-4 mt-4 w-full">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <div className="text-sm text-white text-center">
              <p>About the INFORMATIVE | Advertise | Contacts | Disclaimer </p>
            </div>
            <div className="text-sm text-white text-center">
              <p>INFORMATIVE © {currentYear}</p>
            </div>
            <div className="text-sm text-white text-center">
              <p>Proudly powered by: BAM CONSULTANCY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
