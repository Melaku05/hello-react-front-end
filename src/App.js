import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Greeting />)} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
