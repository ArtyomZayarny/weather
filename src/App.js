import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useRoutes } from './pages/routes'




export default function App() {

  const city = useSelector(state => state.city)
  const routes = useRoutes(city)

  return (
    <Router>
      {routes}
    </Router>
  );
}

