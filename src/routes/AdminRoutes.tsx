import { useRoutes,Navigate } from "react-router-dom";

import { Admin } from "./Element";

const AdminRoutes = () => {

  return (
      useRoutes([
        {
          path: '/',
          element: <Navigate to='/home' replace/>,
        },  
        
        {
          path: '/home',
          element:<Admin/>,
        },
    
      ])
  ) 
}

export default AdminRoutes
