 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
 
import Typography from '@mui/material/Typography';
 
import { Link } from 'react-router-dom';
 
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email'; 
import TabsWithBackground from "../Component/TabsWithBackground";
import '../Component/TabsWithBackground.css' ;
import { useTranslation } from 'react-i18next';
import Projects from './Projects';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function HomePage({locale}){
   const { t, i18n } = useTranslation();

    const phoneNumber = '967770515088'; // استبدل برقم الهاتف الخاص بك
     const message = 'مرحباً! كيف يمكنني مساعدتك؟'; // الرسالة المسبقة (اختياري)
     const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

     const email = 'azizaldhubri@gmail.com';     
    const mailtoLink = `mailto:${email}`;
   return(
     <div className="        ">

    <section id="/" className="      overflow-auto  flex items-center md:items-stretch lg:items-stretch  flex-col lg:flex-row md:flex-row   
           justify-center p-4 gap-6
             mb-3 pb-3    " >      

        <div className="w-11/12  md:w-4/12 lg:w-4/12  sm:w-12/12     text-center rounded flex justify-center   items-center  box_shadow   
                    "style={{ }} >                        
            <Card className='text-center w-full h-full flex items-center justify-center gap-6    flex-wrap  '
                    sx={{ // maxWidth: 345 , 
                         
                    padding:'10px',}}>
              {/* <CardActionArea > */}
                <img  className='   rounded-full ' 
                src='/img1/azizprofile.jpg' 
                // src={require('../imges/aziz1.jpg')}
                style={{maxWidth:'150px'}}></img>
               
                <CardContent className='flex items-center   justify-center flex-col gap-3'>
                    <Typography gutterBottom variant="h5" component="div">
                        {t('Aziz Aldhubri')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' ,width:'100%',fontSize:'20px' }}>
                    {t("I'm turning ideas into reality.")}
                    </Typography>
                    <Typography className=' flex items-center    justify-center flex-col   '  variant="body2" 
                    sx={{ color: 'text.secondary' }}>
                    {t("To contact me via:")}
                             <div className="flex items-center    justify-center gap-4" 
                            style={{ margin:'auto',width:'100%',fontSize:'40px'}}> 
                                                    
                                <Link to='https://www.linkedin.com/in/azizaldhubri/'>
                                {/* <FontAwesomeIcon icon={faFacebook} /> */}
                                <LinkedInIcon sx={{ fontSize:'35px',color:'#0866ff',}}
                                 className="text-blue-600 hover:text-blue-800 transition duration-300 hover:scale-125"/>
                                </Link>                      
                                <Link to='https://github.com/azizaldhubri'>
                                <GitHubIcon  sx={{ fontSize:'35px',color:''}}
                                 className=" hover:text-gray-300 transition duration-300 hover:scale-125"/>
                                </Link>                   
                                <Link to={waLink} target="_blank" rel="noopener noreferrer"> 
                                <WhatsAppIcon   sx={{ fontSize:'35px',color:'#04f904'}}
                                  className="text-green-500 hover:text-green-600 transition duration-300 hover:scale-125"/>
                                </Link>                   
                            <Link to={mailtoLink} target="_blank" rel="noopener noreferrer"> 
                                <  EmailIcon sx={{ fontSize:'35px',color:'red'}}
                                 className="text-red-500 hover:text-red-700 transition duration-300 hover:scale-125"/>
                                </Link>                     

                            
                        </div>      
                    </Typography>
                    </CardContent>
              
            </Card>
        </div> 

        <div className="   w-11/12  md:w-8/12 lg:w-8/12    rounded
               text-2xl    mt-0 flex justify-between flex-col  gap-5        " style={{flex:1,}} >
                <Card className="mb-3 px-3 py-2 flex items-between rounded box_shadow flex-col     col-md-12  col-lg-12 col-sm-8 col-10  " 
                style={{  boxShadow:' 1px 2px 4px 8px rgb(11 11 11 / 39%)  ',
                     direction:locale==='ar'&& 'rtl'
                }}
                >
                <p className="m-0 text-start   ">{t("Hello There!")}</p>                    
                <p    className="m-0 fs-2 ">{t("I'm Aziz Al-Dhubri")}</p>                    
                  
                    <a href="/files/cv2.pdf" download='cv2.pdf' className=" text-center rounded text-4xl ps-1 pe-1  mt-3"
                        style={{background:'#ffae00',color:'black'}}  >{t("Download Cv")}</a>
                    </Card>
               
                 <Card className="row-span-3    p-3   box_shadow rounded  "style={{
                position: 'relative' ,  
                  boxShadow:' 1px 2px 4px 8px rgb(11 11 11 / 39%)  '
                }}> 
                    <TabsWithBackground/>
                    {/* <Skills skills={mySkills} /> */}
                 </Card> 
        </div>
      
        </section>        
        <Projects  />
     </div>

    )
}