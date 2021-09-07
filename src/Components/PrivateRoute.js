import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginUrl } from "../urls";


const PrivateRoute = ({ children, ...rest }) => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);


  return (
    <Route
      {...rest}
      render={({ location }) =>
        isSignedIn ? (
           
          children
        ) : (
          <Redirect
            to={{
              pathname: loginUrl(),
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
