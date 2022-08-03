import React from "react"
import * as ReactDOMClient from 'react-dom/client';
import App from './poplication/App'
import './CSS/Style.css'










const app = ReactDOMClient.createRoot(document.getElementById("app"))
app.render(<App/>)


