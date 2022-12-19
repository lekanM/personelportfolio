import React from 'react';
import ReactDom from 'react-dom/client'

import App from './App'
import './index.css'

//accessing the html page
const root=ReactDom.createRoot(document.getElementById('root'));


//rendering to the html
root.render(<App/>)