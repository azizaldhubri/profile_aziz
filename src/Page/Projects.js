import { BottomNavigation, BottomNavigationAction, Box, Card } from '@mui/material'; 
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

export default function Projects(props) {
   const { t, i18n } = useTranslation();
  const [value, setValue] = useState('All');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };
console.log(props.locale)
  return (
    <section id='/dashboard/Projects' className=" flex justify-center flex-wrap mt-5 ">
      <div
        className={`w-full flex flex-col items-center justify-center mb-5  `
      
        }
      >
        <div
          className={`box_shadow  w-11/12 md:w-full lg:w-full mt-5 mb-5 flex flex-col items-center justify-center shadow-lg rounded-md p-4 
          `}
        >
          <p className="text-center text-[50px]">{t("Works & Projects")}</p>
          <p className="text-center text-xl mt-3 w-full md:w-10/12 mb-6">
            {t("Discover my projects, crafted with care to deliver smooth, engaging web experiences.")}
          </p>

          
              <Box className='flex items-center justify-center  mb-3  '   >
                <BottomNavigation  className='flex items-center justify-center   flex-wrap rounded  h-8 border' 
                    showLabels                     
                    value={value} 
                    onChange={handleChange}
                
                 sx={{
                    // backgroundColor: '#eddede',
                    padding: '1rem',
                    // height:'fitcontent' ,
                    height:'fit-content' ,
                    borderRadius: '8px',
                  }}>{['All', 'React', 'JavaScript', 'Html'].map((val) => (
          <BottomNavigationAction
            key={val}
            label={val === 'All' ? 'All' : val}
            value={val}
          sx={{
              // borderBottom: value === val ? '3px solid #1976d2' : '3px solid transparent',
              borderRadius: 0,               
              minWidth: 80,                         
              transition: 'border-bottom 0.3s ease',  
              color: value === val ? '#1976d2' : 'inherit',
              '& .MuiBottomNavigationAction-label': {
                fontSize: value === val ? '1.3rem' : '1rem', // 👈 نشط = كبير
              //  fontWeight: value === val ? '600' : '400',
                transition: 'color 0.8s ease',
                
              },
            }}
          />
        ))}
                </BottomNavigation>
                </Box>
 
          <div className="w-full mt-3 flex flex-wrap">
             {(value === 'React' || value === 'All') && (
              <>
                    <ProjectItem
                      src="/img1/react4.PNG"                       
                      title="Human resurce with taskes(Latest) Please Click Here"
                      link="https://hr-front-end2-gilt.vercel.app/"
                      external
                      desc="A very excellent project that enables us to manage human resources, manage tasks, and control permissions.
                         Technologies used in the project:Bootstrap, Material-UI, Context, React Hooks"
                      />
                    <ProjectItem
                      src="/img1/react6.PNG"
                      title="Human resurce with taskes(Latest) Please Click Here"
                      link="https://hr-front-end2-gilt.vercel.app/"
                      external
                      desc="A very excellent project that enables us to manage human resources, manage tasks, and control permissions.
                         Technologies used in the project:Bootstrap, Material-UI, Context, React Hooks"
                      />
                  <ProjectItem  
                    src="/img1/www.PNG"
                    title="To Do list"
                    link="https://venerable-kelpie-769c57.netlify.app/"
                     imgClass="w-full   lg:h-36 md:h-32 xs:h-36 sm:h-48 sm:w-11/12"
                    external
                    desc="Simple project to manage small tasks"
                  />
                <ProjectItem
                  src="/img1/ecommerce2.PNG"
                  title="e-commerce with React"
                  link="#"
                  external
                   desc="E-commerce management website"
                />
              </>
            )}
            {(value === 'JavaScript' || value === 'All') && (
              <>
                <ProjectItem
                  src="/img1/proj4.JPG"
                  title="opensooq with JavaScript"
                  link="https://profile-7zbj.vercel.app/all-apps/opensooq/index.html"
                   desc="A trial site to test my ability to delete, add and edit"
                />
                <ProjectItem
                  src="/img1/proj3.JPG"
                  title="Crud1 with JavaScript"
                  link="https://profile-7zbj.vercel.app/all-apps/cruds_progect/indexi.html"
                   desc="A trial site to test my ability to delete, add and edit"
                />
                <ProjectItem
                  src="/img1/proj1.JPG"
                  title="Crud2 with JavaScript"
                  link="https://profile-7zbj.vercel.app/all-apps/custum_bussnis/index.html"
                   desc="A trial site to test my ability to delete, add and edit"
                />
                <ProjectItem
                  src="/img1/proj2.JPG"
                  title="gameSnake with JavaScript"
                  link="https://profile-7zbj.vercel.app/all-apps/snake/snake.html"
                   desc="A trial site to test my ability to delete, add and edit"
                />
              </>
            )} 
            {(value === 'Html' || value === 'All') && (
              <>
             
                <ProjectItem               
                   src='/img1/css1.JPG'
                  title="dashboard with Html ,css"               
                  link="https://profile-7zbj.vercel.app/all-apps/dashboard/index.html"
                   desc="The purpose of the project is to learn the properties of the element and learn to build a web page interface"
                   
                />
                <ProjectItem
                  src="/img1/facebook.JPG"
                  title="facebook with Html ,css"
                  link="https://profile-7zbj.vercel.app/all-apps/%E2%80%ABfacebook/facebook.html"
                   desc="The purpose of the project is to learn the properties of the element and learn to build a web page interface"
                />
              </>
            )}
           
          </div>
        </div>

        <Card
          className={`p-5 w-11/12 md:w-10/12 text-center rounded-md shadow-lg mt-10 `}
        sx={{boxShadow:' 1px 2px 4px 8px rgb(11 11 11 / 39%)  '}}>
          <p className="text-2xl">
           {t("Are You Ready to kickstart your project with a touch of magic?")}
          </p>
          <p
            className="mt-3 text-lg"
            style={{         
              fontWeight:'lighter'              
            }}
          >
           {t("Let's connect and bring ideas to life ✨. I'm open to full-time or freelance opportunities to create impactful web experiences.")}
          </p>
        </Card>
      </div>
    </section>
  );
}

function ProjectItem({ src, title, link,desc, external ,imgClass = "w-[90%]"}) {
 
  const [open, setOpen] = useState(false);
 const timeoutRef = useRef(null);

  const handleOpen = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleClose = () => {
    // تأخير الإغلاق قليلاً لتجنب التكرار المزعج
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 100); // 300ms
  };
 
function DescriptionProject(){ 
  return(
    <div className=' w-2/3  p-2 rounded  -translate-y-2/4 text-black  ' 
    style={{position:'absolute ',bottom:'0px',zIndex:10000, background:'rgb(214 221 231)'
      
    }}>{desc}</div>
  )
}
  
  return (
       <div className="p-3 w-full md:w-1/2 flex items-center justify-center flex-col  relative   " 
           onMouseEnter={handleOpen}  
      onMouseLeave={handleClose} 
       >
      <img src={src} alt={title}   className={`${imgClass} rounded-md`}
    
      />
      <p>{title}</p>
      {external ? (
        <Link to={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Visit
        </Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Visit
        </a>
      )}
       
      {open=== true &&
       <DescriptionProject />

      }
        
        
    </div>
  );
}
