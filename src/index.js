import React from "react";
import ReactDOM from "react";
import App from './components/App.jsx'
import { createRoot } from 'react-dom/client';
import './styles/global.scss';

const container = document.getElementById('app')
const root = createRoot(container);
root.render(<App tab="home" />);