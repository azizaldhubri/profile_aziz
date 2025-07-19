import { Link } from "react-router-dom"; 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Card, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

export default function About({locale}) { 
    const { t, i18n } = useTranslation();
  const phoneNumber = '967770515088';
  const message = 'مرحباً! كيف يمكنني مساعدتك؟';
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const email = 'azizaldhubri@gmail.com';
  const mailtoLink = `mailto:${email}`;

  return (
    // <div className="w-full flex justify-center items-center flex-col">
      <section id="About" >
        <div className="w-full max-w-7xl flex flex-wrap justify-center gap-5 p-4"
        >

          {/* Card 1 - Profile */}
          <Card className="  rounded-lg p-4 flex flex-col items-center gap-4 w-80 sm:w-96 m-2 mt-4 "
           style={{  boxShadow:' 1px 2px 4px 8px rgb(11 11 11 / 39%)  '}}>
            <img
              // src={require('../imges/aziz.jpg')}
              src='/img1/azizprofile.jpg' 
              alt="Aziz"
              className="rounded-full w-full max-w-xs"
            />
            <Typography variant="3" className="text-xl font-semibold ">{t("Aziz Aldhubri")}</Typography>
            <Typography variant="4" className="text-center ">{t("I'm turning ideas into reality.")}</Typography>
            <Typography className="mt-3 ">{t("To contact me via:")}</Typography>

            <div className="flex justify-center gap-4 text-2xl w-full mt-2">
              <Link to="https://www.facebook.com/profile.php?id=100004740935402">
                <FacebookOutlinedIcon className="hover:text-blue-600 transition" />
              </Link>
              <Link to="https://github.com/azizaldhubri">
                <GitHubIcon className="hover:text-gray-700 transition" />
              </Link>
              <Link to={waLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="text-green-600 hover:scale-110 transition" />
              </Link>
              <Link to={mailtoLink} target="_blank" rel="noopener noreferrer">
                <EmailIcon className="text-red-600 hover:scale-110 transition" />
              </Link>
            </div>
          </Card>

          {/* Card 2 - Info */}
          <Card className="  box_shadow rounded-lg p-6 flex flex-col gap-4 w-full md:w-[50%]  mt-4  text-lg" 
          sx={{}}
           style={{  boxShadow:' 1px 2px 4px 8px rgb(11 11 11 / 39%)  ',
            direction:locale==='ar'&& 'rtl'
           }}>
            <p className="text-2xl font-semibold">{t("Hello! I’m Aziz Aldhubri, a Frontend Developer.")}</p>
            <p>{t("Academic qualification: Bachelor’s degree in Information Systems with a very good grade from Sana’a University.")}</p>
            <p>{t("Training courses")}</p>
            <p>{t("Course in Html, CSS, Bootstrap,JavaScript , Tailwind , Material-ui , Laravel, React,Redux , Context")}</p>
            <p>{t("I worked on several projects under the supervision of a professional programmer.")}</p>
            <a
              href="/files/cv2.pdf"
              download="cv2.pdf"
              className="bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-semibold px-4 py-2 rounded w-fit"
            >
              Download CV
            </a>
          </Card>

        </div>
      </section>
    // </div>
  );
}
