import React, { useState } from "react";
import CusLogin from "../components/CusLogin";
import SelLogin from "../components/SelLogin";

function Login() {
  const [userSelect, setUserSelect] = useState(true);

  return (
    <div className="w-full flex items-center justify-center absolute top-40">
      <div className="w-460 bg-primary flex flex-col rounded-md">
        <div className="flex items-center justify-between p-6 mb-2">
          <p
            className={`cursor-pointer font-semibold text-xl capitalize text-headingColor  ${
              userSelect &&
              "relative before:absolute before:rounded-lg before:content before:w-24 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto"
            }`}
            onClick={() => setUserSelect(true)}
          >
            Customer
          </p>
          <p
            className={`cursor-pointer text-xl font-semibold capitalize text-headingColor ${
              !userSelect &&
              "relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2  before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100"
            }`}
            onClick={() => setUserSelect(false)}
          >
            Seller
          </p>
        </div>
        {userSelect ? <CusLogin/> : <SelLogin/>}
      </div>
    </div>
  );
}

export default Login;
