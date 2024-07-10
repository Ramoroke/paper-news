import React, { useState, useEffect } from "react";

function Subscription() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!submitted) {
      const interval = setInterval(() => {
        setShowModal(true);
      }, 18000);

      return () => clearInterval(interval);
    }
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div
        className={`relative inset-0 flex items-center justify-center z-auto ${
          showModal ? "" : "hidden"
        }`}
      >
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Thank you!</h2>
              <p className="text-gray-600">
                You have successfully subscribed with your WhatsApp number.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Subscribe via WhatsApp
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your WhatsApp number"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <button
                onClick={closeModal}
                className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Subscription;
