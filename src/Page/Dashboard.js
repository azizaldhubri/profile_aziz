import { Box } from "@mui/material";
import { Outlet, } from "react-router-dom";  
import TopBar from "../Component/Topbar"; 

export default function Dashboard({toggleTheme,mode,handleLangugeClick ,locale}){
 

    return(
           <div className="w-full flex justify-center  ">       
        <div  className='   w-11/12   lg:w-11/12 md:w-11/12 sm:w-11/12   relative    ' sx={{  height: '100vh'  }}> 
        <Box  className='     relative flex justify-center   '>   
                  <TopBar click={toggleTheme}  mode={mode}  handleLangugeClick={handleLangugeClick} locale={locale}/>  
                  </Box>          
          <Box  className='     relative    'sx={{ top:'80px'   }}> 
            <Outlet/>          
          </Box> 
        </div>
      </div>
    )
}