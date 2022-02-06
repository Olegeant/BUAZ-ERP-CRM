import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Logo from './Logo';
import NavMenu from './NavMenu';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import BusinessCalendarPage from '../pages/BusinessCalendarPage';
import YearCalendarPage from '../pages/YearCalendarPage';

import './App.css';

function App() {
  return (
    <>
      <Header>
        <Logo />
        <NavMenu />
      </Header>

      <Main>
        <Routes>
          <Route
            path="time/business-calendar"
            element={<BusinessCalendarPage />}
          />
          <Route path="time/year-calendar" element={<YearCalendarPage />} />\
        </Routes>
      </Main>

      <Footer />
    </>
  );
}

export default App;
