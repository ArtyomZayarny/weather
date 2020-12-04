import { Switch, Route, Redirect } from 'react-router-dom'
import City from './City'
import Home from './Home'

export const useRoutes = city => {
    if (city) {
        return (
            <Switch>
                <Route path={`/:${city}`} exact>
                    <City />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Redirect to="/" />
            </Switch>
        )
    }
}