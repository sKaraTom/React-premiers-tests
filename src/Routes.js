import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./App'),
  loading: Loading,
});

const Connexion = Loadable({
    loader: () => import('./Connexion'),
    loading: Loading,
});

const Mouse = Loadable({
    loader: () => import('./Mouse'),
    loading: Loading,
});

const Temperature = Loadable({
    loader: () => import('./Temperature'),
    loading: Loading,
});

const Horloge = Loadable({
  loader: () => import('./Horloge'),
  loading: Loading,
});

const Formulaires = Loadable({
    loader: () => import('./Formulaires'),
    loading: Loading,
});

const page404 = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
)

const FormContainer = Loadable({
    loader: () => import('./Enrollment-form/FormContainer'),
    loading: Loading,
});

const Routes = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '10%',
        height:'100%    ',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/connexion">connexion</Link></li>
            <li><Link to="/mouse">mouse tracker</Link></li>
            <li><Link to="/temperature">convertisseur t°</Link></li>
            <li><Link to="/horloge">horloge</Link></li>
            <li><Link to="/formulaires">formulaires</Link></li>
            <li><Link to="/test404">test-404</Link></li>
            <li><Link to="/inscription">enrollment form</Link></li>
        </ul>
        </div>
        <div style={{ flex: 1, padding: '10px' }}>
        <Switch>
            <Route  path="/" exact component={Home}/>
            <Route path="/connexion" component={Connexion}/>
            <Route path="/mouse" component={Mouse}/>
            <Route path="/temperature" component={Temperature}/>
            <Route path="/horloge" component={Horloge}/>
            <Route path="/formulaires" component={Formulaires}/>
            <Route path="/inscription" component={FormContainer}/>
            <Route component={page404}/>
        </Switch>
        </div>
    </div>
  </Router>
);

export default Routes;