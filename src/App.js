import React, { useEffect, useMemo, useState } from 'react';
import {   createTheme, ThemeProvider, CssBaseline } from '@mui/material'; 
import { useTranslation } from 'react-i18next'; 
import HomePage from './Page/HomePage';
import Projects from './Page/Projects'; 
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import About from './Page/About';
 

function App() {
   const[locale,setlocale]=useState('Eng');
   const { t, i18n } = useTranslation(); 
   const [mode, setMode] = useState('dark');

 function handleLangugeClick(lang) {
  setlocale(lang);
  i18n.changeLanguage(lang);
  
}
  useEffect(()=>{ i18n.changeLanguage(locale);},[locale])

      const theme = useMemo(
    () =>
      createTheme({
        palette: {                    
          mode: mode, 
          background: {
            // default: mode === 'light' ? '#f5f5f5' : '#121212d4',#121212,          
            default: mode === 'light' ? '#f5f5f5' : '#121212d4',          
          },
          color:{
             default: mode === 'light' ? '#121212d4':'#f5f5f5',    
          },
        },
      }),
    [mode]
  );

 
  const toggleTheme = () => {    
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeProvider theme={theme}   >
      <CssBaseline />             
      <React.Fragment >  
        <Routes>                              
          <Route path='/'   element={<Dashboard toggleTheme={toggleTheme} mode={mode} 
          handleLangugeClick={handleLangugeClick}
          locale={locale} /> }>                   
            <Route path='/' element={<HomePage locale={locale}/>  }>
            <Route path='/' element={<Projects locale={locale}/> } />           
            </Route>          
            <Route path='/dashboard/Projects' element={<Projects locale={locale}/>}></Route>
            <Route path='/dashboard/About' element={<About locale={locale}/>}></Route>          
          </Route>
        </Routes>   
      </React.Fragment> 
    </ThemeProvider>
  
  );
}

export default App;