import React, { useState, useEffect } from 'react';
import '../Component/TabsWithBackground.css';
// import './App.css'

const SlidingTabs = () => {
  const [activeTab, setActiveTab] = useState('Html');
  const [isAnimationPaused, setIsAnimationPaused] = useState(false); // حالة الأنيميشن
  const tabs = ['Html', 'Css', 'Bootstrap', 'javascript','React','Laravel','Git','MUI-Material']; 
 

  // دالة لتبديل التاب بشكل عشوائي
  const changeTabRandomly = () => {
    const randomIndex = Math.floor(Math.random() * tabs.length);
    // setActiveTab(tabs[randomIndex]);
    // setPercent(tabs.length*10);
  };

 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     changeTabRandomly();
  //     setPercent(tabs.length*10);
  //   }, 2000); // تغيير التاب كل 5 ثواني

    // تنظيف الinterval عند إلغاء المكون
  //   return () => clearInterval(interval);
  // }, []);

  const[precent,setPercent]=useState(1);
  const changePercet = (e) => {
    // const randomIndex = Math.floor(Math.random() * tabs.length);
    setPercent(e*5);
  };
  const [progress, setProgress] = useState(0);
  const [isMoving, setIsMoving] = useState(true);
  useEffect(() => {
    let interval;
    if (isMoving) {
      // عند بدء الحركة، نقوم بتحديث التقدم بشكل مستمر
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            return 0; // إعادة تعيين التقدم بعد اكتمال الدورة
          }
          return prevProgress + 0.5; // تحديث التقدم
        });
      }, 100); // تحديث التقدم كل 100 مللي ثانية
    } else {
      // إذا كانت الحركة متوقفة، لا نقوم بتحديث التقدم
      clearInterval(interval);
    }

    // تنظيف المؤقت عند توقف المكون
    return () => clearInterval(interval);
  }, [isMoving]);

  const toggleMovement = () => {
    setIsMoving((prevState) => !prevState); // عكس حالة الحركة (تشغيل/إيقاف)
  };

  return (
    // <div className="sliding-tabs-container    border" >
    <div className=" sliding-tabs-container   marquee    "style={{overflowX:'hidden' }}  >

{/* <img src={require(`./imges/${activeTab}.png`)} width='100%' height='50%'></img> */}
 
      <div 
        className={`sliding-tabs ${isAnimationPaused ? 'paused' : ''} mt-0 pt-0  ,w-full     `} 
        onMouseEnter={() => {setIsAnimationPaused(true);toggleMovement()}} // إيقاف الأنيميشن عند مرور الماوس
        onMouseLeave={() =>{ setIsAnimationPaused(false);toggleMovement()}} // استئناف الأنيميشن عند مغادرة الماوس
      >
        {tabs.map((tab,index) => (
          <div 
          
          key={tab}
          className={`tab ${activeTab === tab ? 'active' : ''} `}
          onClick={() => setActiveTab(tab)}
          >           
            {tab}            
          </div>
        ))}
      </div>
    


      <div className='marquee  marquee--reverse  mb-3'>
          <div data-v-0516ec98="" className=" marquee__group">
        <div data-v-0516ec98="" className="skill">HTML</div>
        <div data-v-0516ec98="" className="skill">CSS</div>
        <div data-v-0516ec98="" className="skill">JavaScript</div>
        <div data-v-0516ec98="" className="skill">Bootstrap</div>
        <div data-v-0516ec98="" className="skill">Laravel</div>       
        <div data-v-0516ec98="" className="skill"> React.js</div>
         
        </div>
          <div data-v-0516ec98="" className=" marquee__group">
        <div data-v-0516ec98="" className="skill">HTML</div>
        <div data-v-0516ec98="" className="skill">CSS</div>
        <div data-v-0516ec98="" className="skill">JavaScript</div>
        <div data-v-0516ec98="" className="skill">Bootstrap</div>
        <div data-v-0516ec98="" className="skill"> React.js</div>        
        <div data-v-0516ec98="" className="skill">Laravel</div>
       
        
        </div>

      </div>
      

       <div className='flex items-center gap-2 mt-5   ' >
            <div className="progress-bar-container  "style={{height:'15px',position:'relative'}}>
            <div className="progress-bar border" >
              <div className="progress flex " 
              style={{ width: `${progress}%`,backgroundColor:'#4caf50',   }}> </div>
            </div>
            {/* <span className="progress-text">{Math.round(progress)}%</span> */}
 


            <span className="span   fs-3 w-50" style={{ left:`${Math.round(progress)-5}%`}}>
              {Math.round(progress)<10 ?'HTML'
              :Math.round(progress)<25 ? "Css"
              :Math.round(progress)<30 ?'Bootstrap'
              :Math.round(progress)<50 ?'javascript '
              :Math.round(progress)<70 ?'React'
              :Math.round(progress)<80 ?'Laravel'
              :'MUI-Material' }
              </span>
            
          </div>
            <p className='mb-3'>My Skills</p>

       </div>
       


     
     
    </div>
  );

 
};

export default SlidingTabs;