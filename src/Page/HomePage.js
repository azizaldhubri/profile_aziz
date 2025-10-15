 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography'; 
import { Link } from 'react-router-dom'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';  
import { useTranslation } from 'react-i18next';
import Projects from './Projects';
 import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SkillCards from './Skilles1';
import './style.css';
import { useEffect, useRef, useState } from 'react';
import { Collapse } from '@mui/material';

function useOnScreen(options) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {   
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
}
export default function HomePage({locale}){
   const { t, i18n } = useTranslation();
   const lng=i18n.translator.language ;
    const [expanded, setExpanded] = useState(false);
  
 const [bannerRef, bannerVisible] = useOnScreen({ threshold: 0 });
    const phoneNumber = '967770515088'; // استبدل برقم الهاتف الخاص بك
     const message = 'مرحباً! كيف يمكنني مساعدتك؟'; // الرسالة المسبقة (اختياري)
     const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

     const email = 'azizaldhubri@gmail.com';     
    const mailtoLink = `mailto:${email}`;
    // Text animation 
    // const text = "Hello There!";
  const text = lng=='Eng'? "Hello There!":"مرحبا بكم! "; 

  // const text = messages[lang];
  const [shown, setShown] = useState("");
  const speed = 100;        // سرعة الكتابة بالمللي ثانية لكل حرف
  const startDelay = 300;  // تأخير البداية (اختياري)

  useEffect(() => {
    setShown('');
    let i = 0;
    let timer;
    const start = setTimeout(() => {
        timer = setInterval(() => {
        setShown((prev) => prev + text[i]);
        i++;
        if (i >= text.length) clearInterval(timer);
      }, speed);
    }, startDelay);

    return () => clearTimeout(start);
  }, [lng]);

   return(
     <div className="        ">

      <section id="/">    

    <div  className="      overflow-auto  flex items-center md:items-stretch lg:items-stretch 
         flex-col lg:flex-row md:flex-row   
           justify-center   gap-6    mb-3   
           
           "
        >

        <div className="w-12/12  md:w-4/12 lg:w-4/12  sm:w-12/12     text-center   flex justify-center   items-center      
                    " >                        
            <Card className='  text-center w-full h-full sm:w-12/12 flex items-center justify-center gap-2    flex-wrap    border border-red-950 '
                              
       sx={{
        p: 4,
        borderRadius: 4,
        boxShadow: 4,
        textAlign: "center",        
      }}>
              {/* <CardActionArea > */}
      <CardContent>
        <Typography sx={{
          fontSize: 'larger' ,
          fontFamily:'sans-serif' }}>
            // Front-End Developer
       Full stack Developer
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
                {t('Aziz Aldhubri')}
        </Typography>
        <img  className='   rounded-full p-1' 
            src='/img1/azizprofile.jpg'                 
            style={{maxWidth:'150px',border:'2px solid red'}}>
        </img>



      </CardContent>
        
      <CardContent className='flex items-center   justify-center flex-col gap-1'>
            <Typography variant="body2" sx={{ color: 'text.secondary' ,width:'100%',fontSize:'20px' }}>
            {t("I'm turning ideas into reality.")}
            </Typography>
            <Typography className=' flex items-center    justify-center flex-col   '  variant="body2" 
            sx={{ color: 'text.secondary' }}>
            {t("To contact me via:")}
                {/* icons contacts */}
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
 
        <Card
         sx={{
        p: 4,
        borderRadius: 4,
        boxShadow: 4,
        textAlign: "center",        
      }}
        className="  px-4 py-4 flex items-center justify-between      flex-col     " 
        style={{  
          // boxShadow:' 1px 2px 4px 8px rgb(11 11 11 / 39%)  ',
              direction:locale==='ar'&& 'rtl'
        }}
        >
            <h1
              style={{height:'70px',
                // color:'#ff2222e6',
                color:'#e63946',
                 fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "2.5rem" }}
              aria-live="polite"
            >
              <span style={{ whiteSpace: "pre" }}>{shown}</span>
            
              </h1>
            <div 
              ref={bannerRef}
                className={`banner-title fadeInButtom animated ${bannerVisible ? 'visible' : ''}`}
                style={{
                    animationDuration: '1.8s',            
                    animationDelay: '2.6s',
                }}>
        
        <p    className="m-0  text-2xl" 
              style={{padding: '20px', lineHeight: '1.8',fontFamily:'initial'}}>
                {t("I'm Aziz Al-Dhubri")}
        </p> 
            {/* عرض باقي الفقرات عند الضغط */}
      
         <Collapse in={expanded} timeout={900}>
           <p    className="m-0  text-2xl" 
              style={{padding: '20px', lineHeight: '1.8',fontFamily:'initial'}}>
                {t("Alongside")}
        </p>
          <p    className="m-0  text-2xl" 
              style={{padding: '20px', lineHeight: '1.8',fontFamily:'initial'}}>
                {t("I enjoy solving")}
        </p>
         </Collapse>
       
       <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>                  

                </div>
          
        <a href="/files/aziz-cv.pdf" download='aziz-cv.pdf' className="animated-box mt-3 text-center rounded text-4xl ps-1 pe-1   "
                >{t("Download Cv")}
                <span className="text-2xl  ms-2"> 📄</span> 
                  </a>
            </Card>
          
          </div>          
           
 
      
        </section>        
         <SkillCards/>
        <Projects  />
     </div>

    )
}
