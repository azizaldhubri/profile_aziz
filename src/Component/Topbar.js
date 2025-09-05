 import Box from '@mui/material/Box'; 
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container'; 
import MenuItem from '@mui/material/MenuItem'; 
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Tab, Tabs } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
 import Fade from '@mui/material/Fade';
import { Link, useLocation } from 'react-router-dom'; 
 import { useTranslation } from 'react-i18next'; 
import  { useState } from 'react';
import { styled } from "@mui/material/styles";
const pages = [
  { name: "HOME", path: '/' },
  { name: 'ABOUT', path: '/dashboard/about' },
  { name: 'PROJECT', path: '/dashboard/projects' }
];
export default function TopBar(props) {
  const { t, i18n } = useTranslation();
  const [anchorElNav, setAnchorElNav] =useState(0);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);  
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  

  const location = useLocation();

const getCurrentTabIndex = (pathname) => {
  switch (pathname) {
    case '/':
      return 0;
    case '/dashboard/About':
      return 1;
    case '/dashboard/Projects':
      return 2;
    default:
      return false; // أو -1 لإلغاء التحديد
  }
};

  const [value, setValue] = useState(getCurrentTabIndex(location.pathname));
 

  const handleChange = (event, newValue) => {
    setValue(newValue);   
  };

    const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {    
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {    
    setAnchorEl(null);
  };
  
const CustomTab = styled(Tab)(({ theme }) => ({
  fontSize: "19px",
  color: props.mode === "dark" ? "#f3e5f5" : "#212121",
  fontWeight: value === 0 ? "bold" : "normal",
  padding: "10px",
  marginLeft: "10px",
  "&.Mui-selected": {
    borderBottom: "3px solid #d32d2d",
    color: "#d32d2d",
    fontWeight: "bold",
  },
  "&:hover": {
    color: "#ffae00", // 👈 اللون عند المرور
    transition: "0.3s", // عشان الحركة تكون ناعمة
  },
}));



  return (    
      <Container  className=' flex justify-between align-middle p-2  border   border-red-600'
       sx={{   position: 'fixed',
  zIndex: 10,
  marginTop: '0.09rem',
  background: props.mode === 'dark' ? '#121216fc' : '#fefbff',
  width: '95%',
  direction: props.locale === 'ar' ? 'rtl' : 'ltr'}}>
        
           
          

           {/*  box pages Menu  */}
          <Box className='  '  sx={{  display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography sx={{ textAlign: 'center' }}>{t(`${page.name}`)}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>        
           {/* ----------- box pages Menu ------------ */}
         
          {/*  box Taps  */}
        <Box className='  items-center' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>           
         <Tabs value={value} onChange={handleChange} aria-label=" tabs example " 
          TabIndicatorProps={{ style: { display: "none" } }}        
          >
            <CustomTab  
               label={t("HOME")}
               component={Link}
                   to="/"             
            
                 />          

            <CustomTab  
               label={t("ABOUT")}
               component={Link}
                   to="/dashboard/About"             
            
                 />
            <CustomTab  
               label={t("PROJECT")}
               component={Link}
                   to="/dashboard/Projects"             
            
                 />
            
         </Tabs>
        </Box> 
          {/* ----------------- box Taps ------------ */}

         {/*  box Menu Languge  and Screen Light*/}
        <Box className='  flex  lg:w-1/5 justify-center items-center  gap-4'   >
            
               <IconButton  color="inherit" onClick={props.click}>
                {props.mode === 'dark' ? <Brightness7 /> : <Brightness4 sx={{ color: 'black' }} />}
                </IconButton>
                 <IconButton color="inherit" 
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                 >
                 <LanguageIcon sx={{ color:props.mode==='dark'? 'white':'black' }} />                 
                  </IconButton>

                  <Menu
                    id="fade-menu"
                    slotProps={{
                    list: {
                        'aria-labelledby': 'fade-button',
                       },
                   }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                                    >                       
                        <MenuItem onClick={()=>{handleClose('Eng');props.handleLangugeClick('Eng')}}>EN</MenuItem>
                        <MenuItem onClick={()=>{handleClose('ar');props.handleLangugeClick('ar')}}>AR</MenuItem>
         
                  </Menu>
                  
            
               
                <img className='rounded-full border border-3 '   alt="Remy Sharp" 
                src='/img1/aziz.jpg' 
                // src={require ("../img1/aziz.jpg")}
                 style={{height:'50px',width:'50px'}}/>
              
              {/* </IconButton> */}
           
        </Box>
       
        {/* </Toolbar> */}
      </Container>     
  );
}
 
