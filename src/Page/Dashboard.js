import { Box } from "@mui/material";
import { Outlet, } from "react-router-dom"; 
import React from "react";
import Container from '@mui/material/Container';
import TopBar from "../Component/Topbar"; 

export default function Dashboard({toggleTheme,mode,handleLangugeClick ,locale}){
 

    return(
           <React.Fragment>      
        <Container  className='     lg:w-4/12  relative   ' sx={{  height: '100vh'   ,width:'100%'}}> 
        <Box  className='     relative flex justify-center   '>   
                  <TopBar click={toggleTheme}  mode={mode}  handleLangugeClick={handleLangugeClick} locale={locale}/>  
                  </Box>          
          <Box  className='     relative    'sx={{ top:'80px'   ,width:'100%'}}> 
            <Outlet/>          
          </Box> 
        </Container>
      </React.Fragment>
    )
}