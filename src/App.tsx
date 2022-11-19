import './App.css';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';

import { PersistGate } from 'redux-persist/lib/integration/react';

import { BrowserRouter } from 'react-router-dom';
import AuthRoute from './AuthRoutes/AuthRoutes';
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      
        {/*<Home/>*/}
        <BrowserRouter>
          <AuthRoute/>
        </BrowserRouter>
        
      </PersistGate>
    </Provider>
    
  );
}

export default App;
