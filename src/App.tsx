import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';
import NavMenu from './components/Sidebar/NavMenu';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLocaleData } from './actions/i18n';
import Services from './components/Services/Services';
import Tenants from './components/Tenants/Tenants';
import Containers from './components/Containers/Containers';
import ViewController from './components/Header/ViewController';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocaleData('en'));
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        <Header />
        <ViewController />
        <div className="display-flex">
          <NavMenu />
          <Route path="/" exact component={Services} />
          <Route path="/tenants" exact component={Tenants} />
          <Route path="/containers" exact component={Containers} />
        </div>
      </Router>
    </div>
  );
}

export default App;
