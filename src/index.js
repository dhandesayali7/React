import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

import SideBar from './components/SideBar';
import Navigation from './components/Navigation';

import HomePage from './pages/HomePage';
import EventHandlers from './pages/EventHandlers';

const configRouting = (
  <Router>
    <div className="container">
      <div className="row">
          <SideBar />

          <div className="col-sm-9 right__column">
            <Navigation />

            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/event-handlers' element={<EventHandlers />} />
            </Routes>
          </div>
      </div>
    </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  configRouting
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();