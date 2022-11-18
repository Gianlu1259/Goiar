import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

interface AuthRouteProps {
    
}
 
const AuthRoute: React.FunctionComponent<AuthRouteProps> = () => {
    return ( 
        <Routes>
            <Route path={'/home'} element={<PrivateRoutes><Home/></PrivateRoutes>}/>
            <Route path={'/'} element={<PublicRoutes><Login/></PublicRoutes>}/>
          </Routes>
     );
}
 
export default AuthRoute;