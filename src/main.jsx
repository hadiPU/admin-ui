import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx';
//import Form from "./latihan/Form.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";

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
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);