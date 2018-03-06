import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Loadable from 'react-loadable';

import CustomNavBar from './components/navbar';

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';

// redux
const reducers = {
    reducer,
    form: formReducer,
  }
  const reduc = combineReducers(reducers);
  const store = createStore(reduc);


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

const EnrollmentParent = Loadable({
    loader: () => import('./Enrollment-form/containers/EnrollmentParent'),
    loading: Loading,
});

const studentRedux = Loadable({
    loader: () => import('./redux/container'),
    loading: Loading,
});

const formBoot = Loadable({
    loader: () => import('./FormBoot'),
    loading: Loading,
});

const autoEnrollment = Loadable({
    loader: () => import('./auto-enrollment/AutoEnrollmentContainer'),
    loading: Loading,
});

const dashboard = Loadable({
    loader: () => import('./dashboard/DashboardContainer.js'),
    loading: Loading
});


const Routes = () => (
<Provider store={store}>
  <Router>
      <div>
    {/* <div style={{ display: 'flex' }}> */}
    <CustomNavBar />
      {/* <div style={{
        padding: '10px',
        height:'100vh',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: '0', }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/connexion">connexion</Link></li>
            <li><Link to="/mouse">mouse tracker</Link></li>
            <li><Link to="/temperature">convertisseur t°</Link></li>
            <li><Link to="/horloge">horloge</Link></li>
            <li><Link to="/formulaires">formulaires</Link></li>
            <li><Link to="/test404">test-404</Link></li>
            <li><Link to="/inscription">enrollment form</Link></li>
            <li><Link to="/students">students Redux</Link></li>
            <li><Link to="/formboot">formulaire simple bootstrap</Link></li>
            <li><Link to="/autoenrollment">simulation test enrollment</Link></li>
            <li><Link to="/dashboard">dashboard</Link></li>
        </ul>
        
        </div> */}
        <div style={{ flex: 1, padding: '10px' }}>
        <Switch>
            <Route  path="/" exact component={Home}/>
            <Route path="/connexion" component={Connexion}/>
            <Route path="/mouse" component={Mouse}/>
            <Route path="/temperature" component={Temperature}/>
            <Route path="/horloge" component={Horloge}/>
            <Route path="/formulaires" component={Formulaires}/>
            <Route path="/inscription" component={EnrollmentParent}/>
            <Route path="/students" component={studentRedux}/>
            <Route path="/formboot" component={formBoot}/>
            <Route path="/autoenrollment" component={autoEnrollment}/>
            <Route path="/dashboard" component={dashboard}/>
            <Route component={page404}/>
        </Switch>
        </div>
    </div>
  </Router>
</Provider>
);

export default Routes;