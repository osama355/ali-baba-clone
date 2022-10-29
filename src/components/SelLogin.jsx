import React from "react";

function SelLogin() {
  return (
    <div className="flex items-center justify-center w-auto mt-10">
      <div className="flex flex-col p-4 w-375">
        <h2 className="text-2xl font-semibold text-headingColor self-center">
          Login as Seller
        </h2>
        <input
          type="tel"
          name="phone"
          value=""
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
        <button
          type="button"
          className="bg-gradient-to-br mt-5 from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default SelLogin;
