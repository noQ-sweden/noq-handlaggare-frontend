import { useState, useEffect } from 'react'
import Layout from "./components/Layouts/Layout";

import ErrorPage from "./pages/ErrorPage"
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App
