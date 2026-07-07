import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeContextProvider } from './context/ThemeContext.jsx';
import { AuthContextProvider } from './context/authContext.jsx';
import { DarkModeContextProvider } from './context/DarkModeContext.jsx';

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
) */

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Form />
  </StrictMode>,
) */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </StrictMode>
);