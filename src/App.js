import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useRoutes } from './pages/routes'
import { Container } from 'semantic-ui-react'




export default function App() {

  const city = useSelector(state => state.city)
  const routes = useRoutes(city)

  return (
    <Container style={{ 'marginTop': 20 }}>
      <Router>
        {routes}
      </Router>
    </Container>
  );
}

