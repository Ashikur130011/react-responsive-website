import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    console.log(user)
    return (
        <Route
        {...rest}
           render={({ location }) => user.email ? children : <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}  
           ></Redirect>
            
           } 
        >
           
        </Route>
    );
};

export default PrivateRoute;