import React from 'react'
import ReactDOM from 'react-dom/client';
import HomePageBar from './components/HomePageBar';
import { BrowserRouter } from 'react-router-dom';

// styles
import './NavBar.css';

export default function HomePage(){
  return(
        <HomePageBar />
  )
}