import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter} from "react-router-dom";
import App from './App.tsx'
import {Provider} from "react-redux"
import './assets/styles/app.scss';
import store from "./store/configureStore.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <HashRouter>
              <App />
          </HashRouter>
      </Provider>
  </StrictMode>,
)
