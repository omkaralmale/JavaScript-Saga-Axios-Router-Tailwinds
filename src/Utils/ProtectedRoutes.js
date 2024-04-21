import { Outlet } from "react-router-dom";
// import { Layout } from "../components/Layout";
// export default const ProtectedRoutes = () => {
//   const userToken = sessionStorage.getItem("myKey");

//   return userToken ? (
//     <div>
//       <Layout />
//       <div className="md:pl-60 overflow-auto">
//         <Outlet />
//       </div>
//     </div>
//   ) : (
//     <Navigate to="/login" />
//   );
// };
import React from "react";

const ProtectedRoutes = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoutes;
