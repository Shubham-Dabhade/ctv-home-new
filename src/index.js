import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const router = createHashRouter([
//   {
//     path: "/*",
//     element: <App />,
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


