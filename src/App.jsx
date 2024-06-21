import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Aside from './Pages/aside/Aside';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Home from './Pages/home/Home';
import Leads from './Pages/leads/Leads';
import Navbar from './components/Navbar/Navbar';
import MonthlyFinancialIndicatorsChart from './Pages/FinanceLine/FinanceLine';
import Login from './Pages/Login/Login';
import './App.css';
import Client from './Pages/Clients/Clients';
import StudentPage from './Pages/StudentPage/StudentPage';

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState('dssdda');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div className="App">
      {token && <Aside />}
      <div className="main">
        {token && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/Clients" element={<Client />} />
          <Route path="/finance" element={<MonthlyFinancialIndicatorsChart />} />
          <Route path="/login" element={<Login token={token} setToken={setToken} />} />
          <Route path="/Student-Page" element={<StudentPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;