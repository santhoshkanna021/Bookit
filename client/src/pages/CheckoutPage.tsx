import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1); // Go back
  };

  // ✅ Get order data from localStorage
  const orderData = JSON.parse(localStorage.getItem("latestOrder") || "{}");

  const experience = {
    name: orderData.title || "No activity selected",
    date: orderData.selectedDate || "-",
    time: orderData.selectedTime || "-",
    qty: orderData.quantity || 1,
    subtotal: orderData.total ? orderData.total - 59 : 0,
    taxes: 59,
    total: orderData.total || 0,
  };

  // ✅ Handle Payment Confirmation
  const handlePayment = () => {
    localStorage.removeItem("latestOrder");
    navigate("/results");
  };

  return (
    <div className="min-h-screen w-full overflow-y-auto bg-white px-4 sm:px-8 md:px-[70px] py-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleNavigate}
          className="text-gray-700 hover:text-black transition-colors"
        >
          <FaArrowLeft size={15} />
        </button>
        <h1 className="text-lg sm:text-xl font-semibold">Checkout</h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
        {/* ✅ Form Section */}
        <div className="w-full lg:max-w-2xl bg-[#EFEFEF] rounded-2xl p-5 sm:p-6">
          <form className="flex flex-col space-y-5">
            {/* Full Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            {/* Promo Code */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-grow px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none"
              />
              <button
                type="button"
                className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-all"
              >
                Apply
              </button>
            </div>

            {/* Checkbox */}
            <div className="flex items-start sm:items-center gap-2">
              <input
                id="agree"
                type="checkbox"
                className="h-4 w-4 mt-1 text-black border-gray-400 rounded focus:ring-black"
              />
              <label htmlFor="agree" className="text-gray-700 text-sm">
                I agree to the terms and safety policy
              </label>
            </div>
          </form>
        </div>

        {/* ✅ Summary Card */}
        <div className="bg-gray-100 rounded-2xl p-5 sm:p-6 w-full lg:max-w-sm shadow-sm">
          <h2 className="text-base sm:text-lg font-medium mb-3">
            Order Summary
          </h2>

          <div className="space-y-2 text-sm sm:text-base text-gray-700">
            <div className="flex justify-between">
              <span>Experience</span>
              <span className="font-medium text-right">{experience.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Date</span>
              <span>{experience.date}</span>
            </div>
            <div className="flex justify-between">
              <span>Time</span>
              <span>{experience.time}</span>
            </div>
            <div className="flex justify-between">
              <span>Qty</span>
              <span>{experience.qty}</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{experience.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>₹{experience.taxes}</span>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between text-base font-semibold">
              <span>Total</span>
              <span>₹{experience.total}</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="mt-5 w-full bg-yellow-400 text-black font-medium py-2 rounded-md hover:bg-yellow-500 transition-all"
          >
            Pay and Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
