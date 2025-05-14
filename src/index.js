import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Correct import
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // adjust path as needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
