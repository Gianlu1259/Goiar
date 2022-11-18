import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import Home from './pages/Home/Home';
import { PersistGate } from 'redux-persist/lib/integration/react';
import fireConfig from '../src/firebase/config'
import { FirebaseAppProvider } from 'reactfire';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoutes/AuthRoutes';
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <FirebaseAppProvider firebaseConfig={fireConfig}>
        {/*<Home/>*/}
        <BrowserRouter>
          <AuthRoute/>
        </BrowserRouter>
        </FirebaseAppProvider>
      </PersistGate>
    </Provider>
    
  );
}

export default App;
