import React ,{useState} from 'react';
import {Button} from 'components/common';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from 'components/pages/home';
import Login from 'components/pages/login';
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';

const GlobalStyle = createGlobalStyle`
        body{
          background-color:${p=>p.theme.backgroundColor};
          min-height:100vh;
          margin:0;
          color:${p=>p.theme.textColor};
          font-family:'Kaushan Script'
        }`;
  

function App() {
  const [theme,setTheme] = useState(LightTheme);
  return (
    <ThemeProvider theme={{...theme,setTheme :()=>{
      setTheme(s=>s.id === 'lightTheme'?DarkTheme : LightTheme);
    }}}>
      <GlobalStyle/>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" >
            <Home/>
          </Route>
          <Route path="/login" >
            <Login/>
          </Route>
        </Switch>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
