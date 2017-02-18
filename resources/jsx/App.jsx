import React from "react";
import ReactDOM from "react-dom";

// The Layout file contains components for the entire page
import Layout from "./Components/Layout.jsx";

const app = document.getElementById('content');
ReactDOM.render(<Layout/>, app);