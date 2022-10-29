import React from "react";
import { useNavigate } from "react-router";


function SelSign() {
  const navigate=useNavigate();
  const RegisterClick = () => {
    navigate('/sellogin')
  };

  return (
    <div className="flex flex-col p-4">
      <h2 className="text-2xl font-semibold text-headingColor self-center">Sign Up as Seller</h2>
      <input
        type="email"
        name="email"
        value=""
        className="bg-gray-50 p-4 mt-5"
        placeholder="Email"
        required
      />
      <input
        type="name"
        value=""
        name="name"
        className="bg-gray-50 p-4 mt-5"
        placeholder="Name"
        required
      />
      <input
        type="tel"
        value=""
        name="telephone"
        className="bg-gray-50 p-4 mt-5"
        placeholder="Mobile Number"
        required
      />
      <input
        type="password"
        name="password"
        value=""
        className="bg-gray-50 p-4 mt-5"
        placeholder="Password"
        required
      />
      <button onClick={RegisterClick} type="button" className="bg-gradient-to-br mt-5 from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100">
        Register
      </button>
    </div>
  );
}

export default SelSign;
