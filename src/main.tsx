import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.tsx'
import {Provider} from "react-redux"
import './assets/styles/app.scss';
import store from "./store/configureStore.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </StrictMode>,
)
