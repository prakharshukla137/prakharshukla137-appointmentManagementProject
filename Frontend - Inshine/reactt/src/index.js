
import ReactDOM from 'react-dom';
import App from './Component/App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './Css/Style.css'
import {  RouterProvider } from "react-router-dom";
import customrouter from './Routing.js'  
// customerouter = it can be something

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={customrouter} />);
// copy from https://reactrouter.com/en/main/start/tutorial
