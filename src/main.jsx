import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import Authprovider from './Providers/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>

    </React.StrictMode>,
  </div>

)
