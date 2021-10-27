import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Booking from './Components/Booking/Booking/Booking';
import Login from './Components/Login/Login/Login';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddService from './Components/AddService/AddService';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
